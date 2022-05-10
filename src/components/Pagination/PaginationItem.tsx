import { ButtonPag, ButtonPagCurrent } from './PaginationElements'

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}
export function PaginationItem({ isCurrent = false, onPageChange, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <ButtonPagCurrent>
        {number}
      </ButtonPagCurrent>
    )
  }
  return (
    <ButtonPag onClick={() => onPageChange(number)}>
      {number}
    </ButtonPag>
  )
}