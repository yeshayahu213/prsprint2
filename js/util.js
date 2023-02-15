function getValByQSParams(param) { //gets query string
    const queryStringParams = new URLSearchParams(window.location.search)
    return queryStringParams.get(param)
}

function setQueryStringParams(filterBy) { //sets query string params with an object like we had before
    const queryStringParams = `?min=${filterBy.min}&max=${filterBy.max}&name=${filterBy.name}&modal=${gIsModalOpen}&lang=${getLang()}&arrId=${gCurrarrId}`
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
    window.history.pushState({ path: newUrl }, '', newUrl)

}
function setQueryParams(newParams) { //Sets with an object different way
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    for (let paramName in newParams) {
        const paramValue = newParams[paramName];
        params.set(paramName, paramValue); // used to update an existing query string parameter or add a new one if it doesn't exist.
    }

    url.search = params.toString();
    window.history.pushState({ path: url.href }, '', url.href); //modify the URL of the current page without reloading the page
}