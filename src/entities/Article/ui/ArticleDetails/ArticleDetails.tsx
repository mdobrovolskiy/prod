/* eslint-disable indent */
import { type FC, useEffect, useMemo } from 'react'
import styles from './ArticleDetails.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    ArticleBlockType,
    type Article,
    type ArticleBlock,
} from 'entities/Article/model/types/Article'
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { Text, ThemeText } from 'widgets/Text/Text'

interface ArticleDetailsProps {
    className?: string
    id?: string
    data?: Article
}
export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const { className, id, data } = props

    const headerData = useMemo(() => {
        const copy = { ...data }
        delete copy.blocks
        return copy
    }, [data])

    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        type={block.type}
                        id={block.id}
                        code={block.code}
                    />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        id={block.id}
                        paragraphs={block.paragraphs}
                        type={block.type}
                        title={block.title}
                    />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        id={block.id}
                        src={block.src}
                        title={block.title}
                        type={block.type}
                    />
                )
            default:
                return null
        }
    }

    return (
        <div className={classNames(styles.ArticleDetails, {}, [])}>
            <ArticleDetailsHeader data={headerData} />
            {data?.blocks?.map((block) => renderBlock(block))}
        </div>
    )
}
