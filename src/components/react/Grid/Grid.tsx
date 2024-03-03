import classnames from 'classnames'
import styles from './Grid.module.css'

const gapNumbers = [1, 2, 3] as const
export type GapNumbers = (typeof gapNumbers)[number]

type Props = {
    gap?: GapNumbers
    children: React.ReactNode
}

const Grid = (props: Props) => {
    const gridClasses = classnames({
        [styles.gridContainer]: true,
        [styles[`gap-${props.gap}`]]: props.gap,
    })
    return <div className={gridClasses}>{props.children}</div>
}

export default Grid
