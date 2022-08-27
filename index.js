
const SmartWebscraping = require("./SmartWebscraping");


async function getResults() {
    // const URLS = [
    //     'https://github.com/search?o=desc&q=javascript&s=stars&type=Repositories',
    //     'https://github.com/search?o=desc&p=2&q=javascript&s=stars&type=Repositories',
    //     'https://github.com/search?o=desc&p=3&q=javascript&s=stars&type=Repositories'
    // ];

    // const promisesExtractions = []
    // for (let index = 0; index < URLS.length; index++) {
    //     promisesExtractions.push(
    //         new SmartCrawler().extract(URL, rulesToExtract)
    //     )
    // }

    // const results = await Promise.all(promisesExtractions)
    // console.log(results)

    //     const URL = 'https://github.com/search?o=desc&q=javascript&s=stars&type=Repositories'

    // const rulesToExtract = {
    //     "title": ".flex-items-start > .flex-auto > .mb-1",
    //     "repositories": {
    //         type: "list",
    //         selector: ".repo-list-item",
    //         rulePerItem: {
    //             link: {
    //                 selector: ".flex-items-center > details > details-dialog",
    //                 action: "attr",
    //                 attributeName: "src"

    //             },
    //             name: ".text-normal > .v-align-middle",
    //             description: ".flex-auto > .mb-1",
    //             stars: ".flex-auto > div > .text-small > div > a",
    //             projectLanguage: ".flex-auto > div > .text-small > div:nth-child(2) > span > span:nth-child(2)"
    //         }
    //     }
    // }
    // const result = await new SmartWebscraping().extract(URL, rulesToExtract)

    // const rulesToExtractRemoteOk = {
    //     jobs: {
    //         type: "list",
    //         selector: ".card",
    //         rulePerItem: {
    //             companyLogo: {
    //                 selector: "div > .justify-content-between > div > .u-lg-avatar > div > img",
    //                 action: "attr",
    //                 attributeName: "src"
    //             },
    //             company: {
    //                 selector: ".p-3 > .row > .align-items-center > div:nth-child(2) > ul > li > span",
    //                 action: 'text'
    //             },
    //             jobTitle: ".p-3 > .row > .align-items-center > div:nth-child(2) > .h4"
    //         }
    //     }

    // }
    // const result = await new SmartWebscraping().extract(
    //     'https://coodesh.com/vagas', rulesToExtractRemoteOk
    // )

    // const rulesToExtract = {
    //     jobs: {
    //         type: "list",
    //         selector: ".feature",
    //         rulePerItem: {
    //             company: ".company:nth-child(1)",
    //             title: {
    //                 selector: ".title",
    //             },
    //             logo: {
    //                 selector: ".tooltip > a > div",
    //                 action: "attr",
    //                 attributeName: "style"
    //             },
    //             jobLink: {
    //                 selector: ".tooltip + a",
    //                 action: "attr",
    //                 attributeName: "href"
    //             },
    //             companyLink: {
    //                 selector: ".tooltip > a",
    //                 action: "attr",
    //                 attributeName: "href"
    //             },


    //         }
    //     }
    // }

    // const result = await new SmartWebscraping().extract(
    //     "https://weworkremotely.com/", rulesToExtract
    // )
    // console.log(result)
}


getResults()
