declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}
declare module '*.png'
declare const __ISDEV__: boolean
