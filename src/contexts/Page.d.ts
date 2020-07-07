
export interface IPageProps {
  children: ReactElement;
}

export interface IPageContext {
  page: number;
  nextPage(): boolean;
  previousPage(): boolean;
  setPage(page: React.SetStateAction<number>): void;
  setPageNumber(page: number): boolean;
}
