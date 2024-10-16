import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const isDark = ref<boolean>(false)

    function applyTheme() {

        const savedTheme = sessionStorage.getItem('theme')


        if (savedTheme) {
            isDark.value = savedTheme === 'dark'
        } else {
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        }

        updateBodyClass()
    }

    function updateBodyClass() {
        if (isDark.value) {
            document.body.classList.add('dark-theme')
            document.body.classList.remove('light-theme')
            sessionStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.add('light-theme')
            document.body.classList.remove('dark-theme')
            sessionStorage.setItem('theme', 'light')
        }
    }

    function listenForThemeChange() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if(!sessionStorage.getItem('theme')) {

                isDark.value = e.matches
                updateBodyClass()
            }

        })
    }

    onMounted(() => {
        applyTheme()
        listenForThemeChange()
    })

    function toggleTheme() {
        isDark.value = !isDark.value
        updateBodyClass()
    }

    const checkTheme = () => {
        if (!localStorage.getItem('theme')) {

            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
            updateBodyClass()
        }
    }

    return { isDark, toggleTheme, checkTheme }
});
