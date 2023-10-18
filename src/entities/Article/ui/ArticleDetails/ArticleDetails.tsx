/* eslint-disable indent */
import { type FC, useMemo, useCallback } from 'react'
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

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ArticleComments } from '../ArticleComments/ui/ArticleComments'
import { AddArticleComment } from '../AddArticleComment/AddArticleComment'
import { ArticleRecommendations } from '../ArticleRecommendations/ui/ArticleRecommendations'

interface ArticleDetailsProps {
    className?: string

    data?: Article
}
export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const { className, data } = props

    const headerData = useMemo(() => {
        const copy = { ...data }
        delete copy.blocks
        return copy
    }, [data])

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        type={block.type}
                        id={block.id}
                        code={block.code}
                    />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        id={block.id}
                        paragraphs={block.paragraphs}
                        type={block.type}
                        title={block.title}
                    />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        id={block.id}
                        src={block.src}
                        title={block.title}
                        type={block.type}
                    />
                )
            default:
                return null
        }
    }, [])

    return (
        <div className={classNames(styles.ArticleDetails, {}, [])}>
            <ArticleDetailsHeader data={headerData} />
            {data?.blocks?.map((block) => renderBlock(block))}

            <ArticleRecommendations />
            <h2 style={{ fontWeight: 500 }}>Comments</h2>
            <AddArticleComment />
            <ArticleComments />
        </div>
    )
}
