import { rtkApi } from 'shared/api/rtkApi'

const getArticleRecs = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecs: build.query({
            query: ({ url, limit }) => ({
                url,
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const useArticleRecs = getArticleRecs.useGetArticleRecsQuery
