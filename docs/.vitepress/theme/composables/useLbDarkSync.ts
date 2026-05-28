import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'

export function useLbDarkSync() {
  const { isDark } = useData()
  const sync = (dark: boolean) => document.documentElement.classList.toggle('lb-dark', dark)
  onMounted(() => sync(isDark.value))
  watch(isDark, sync)
}
