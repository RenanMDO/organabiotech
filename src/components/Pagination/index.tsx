import { DivPag, TextPag, ContainerPag } from './PaginationElements'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const sibilingsCount = 1;

function generetaPagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 1,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previusPages = currentPage > 1
    ? generetaPagesArray(currentPage - 1 - sibilingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generetaPagesArray(currentPage, Math.min(currentPage + sibilingsCount, lastPage))
    : []
  return (
    <>
      <ContainerPag>
        <DivPag>
          {currentPage > (1 + sibilingsCount) && (
            <>
              <PaginationItem onPageChange={onPageChange} number={1} />
              {currentPage > (2 + sibilingsCount) && <TextPag >...</TextPag>}
            </>
          )}

          {previusPages.length > 0 && previusPages.map(page => {
            return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          })}

          <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

          {nextPages.length > 0 && nextPages.map(page => {
            return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          })}

          {(currentPage + sibilingsCount) < lastPage && (
            <>
              {(currentPage + 1 + sibilingsCount) < lastPage && <TextPag>...</TextPag>}
              <PaginationItem onPageChange={onPageChange} number={lastPage} />
            </>

          )}

        </DivPag>
      </ContainerPag>
    </>
  )
}