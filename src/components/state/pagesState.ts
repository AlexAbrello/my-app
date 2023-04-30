export type PageStateType = {
  pages: PagesType[]
}

export type PagesType = {
  name: string
  content: string
}

export const pagesState: PageStateType = {
  pages: [
    {name: 'First page Title', content: 'First Page Content'},
    {name: 'Second page Title', content: 'Second Page Content'},
    {name: 'Third page Title', content: 'Third Page Content'},
  ]
}