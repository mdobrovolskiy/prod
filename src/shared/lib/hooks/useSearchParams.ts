export const setSearchParams = (
    params: Record<string, string | undefined | null>
) => {
    const url = new URL(window.location.href)

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.set(key, String(value))
        } else {
            url.searchParams.delete(key)
        }
    })
    window.history.pushState(null, '', url.search)
}
export const getParamsValue = (name: string) => {
    const url = new URL(window.location.href)

    return url.searchParams.get(name)
}
