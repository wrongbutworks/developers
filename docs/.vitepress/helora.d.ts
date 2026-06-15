// Helora 客服 SDK 的全局类型声明
// 脚本通过 <script> 注入 window.Helora，需要给 TS 一个最小的形状
// cSpell:words Helora helora

interface HeloraHeaderAction {
  id: string
  label: string
  icon?: string
  intent?: 'event' | 'link' | string
}

interface HeloraBootConfig {
  proxy: 'prod' | 'staging'
  guest?: boolean
  configPlatform: 'web' | string
  configKey: string
  source?: string
  locale?: string
  theme?: 'light' | 'dark'
  headerActions?: HeloraHeaderAction[]
  [key: string]: unknown
}

interface HeloraSDK {
  boot: (config: HeloraBootConfig) => void
  setTheme?: (theme: 'light' | 'dark') => void
  /** 订阅运行时事件，返回取消函数 */
  on?: (event: string, handler: (payload: any) => void) => () => void
}

declare global {
  interface Window {
    Helora?: HeloraSDK
  }
}

export {}
