import styles from './GridItem.module.css'
import classnames from 'classnames'

const columnValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const
export type ColumnNumber = (typeof columnValues)[number]

type Props = {
    base: ColumnNumber
    sm?: ColumnNumber
    md?: ColumnNumber
    lg?: ColumnNumber
    xl?: ColumnNumber
    children: React.ReactNode
}

const GridItem = (props: Props) => {
    const gridItemClasses = classnames({
        [styles[`span-${props.base}`]]: true,
        [styles[`sm-span-${props.sm}`]]: props.sm,
        [styles[`md-span-${props.md}`]]: props.md,
        [styles[`lg-span-${props.lg}`]]: props.lg,
        [styles[`xl-span-${props.xl}`]]: props.xl,
    })
    return <div className={gridItemClasses}>{props.children}</div>
}

export default GridItem
