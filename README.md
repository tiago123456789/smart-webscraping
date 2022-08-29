# What is it?

Times ago I see some websraping services like **https://www.scrapingbee.com/features/data-extraction/** using one interesting strategy for easily process extract data for clients, when you use the service you define url
and rules of extraction for the service, so service get html, after extract data for you and return data extracted format json. 

After I see this how to make equal solution however more simply, but simplify the process webscraping the site and begin this curiosity I created this code where has class named SmartWebscraping
and when call *extract* method pass params: url and rules extraction and SmartWebscraping does extraction. Case you need to make webscraping you don't need create all code for each
webscraping you can use SmartWebscraping only define url and rules extractions


# Examples using SmartWebscraping class:

```
  const URL = 'https://github.com/search?o=desc&q=javascript&s=stars&type=Repositories'

    const rulesToExtract = {
        "title": ".flex-items-start > .flex-auto > .mb-1",
        "repositories": {
            type: "list",
            selector: ".repo-list-item",
            rulePerItem: {
                link: {
                    selector: ".flex-items-center > details > details-dialog",
                    action: "attr",
                    attributeName: "src"

                },
                name: ".text-normal > .v-align-middle",
                description: ".flex-auto > .mb-1",
                stars: ".flex-auto > div > .text-small > div > a",
                projectLanguage: ".flex-auto > div > .text-small > div:nth-child(2) > span > span:nth-child(2)"
            }
        }
    }
    const result = await new SmartWebscraping().extract(URL, rulesToExtract)
    
    console.log(result) // Output: { title: "value", repositories: [ { name: "value", description: "value", stars: "value", projectLanguage: "value", link: "value" } ] }
```

```
  const rulesToExtractRemoteOk = {
        jobs: {
            type: "list",
            selector: ".card",
            rulePerItem: {
                companyLogo: {
                    selector: "div > .justify-content-between > div > .u-lg-avatar > div > img",
                    action: "attr",
                    attributeName: "src"
                },
                company: {
                    selector: ".p-3 > .row > .align-items-center > div:nth-child(2) > ul > li > span",
                    action: 'text'
                },
                jobTitle: ".p-3 > .row > .align-items-center > div:nth-child(2) > .h4"
            }
        }

    }
    const result = await new SmartWebscraping().extract(
        'https://coodesh.com/vagas', rulesToExtractRemoteOk
    )
    
    console.log(result) // Output: { jobs: [ { companyLogo: "value", company: "value", jobTitle: "value" } ] }
```

```
   const rulesToExtract = {
        jobs: {
            type: "list",
            selector: ".feature",
            rulePerItem: {
                company: ".company:nth-child(1)",
                title: {
                    selector: ".title",
                },
                logo: {
                    selector: ".tooltip > a > div",
                    action: "attr",
                    attributeName: "style"
                },
                jobLink: {
                    selector: ".tooltip + a",
                    action: "attr",
                    attributeName: "href"
                },
                companyLink: {
                    selector: ".tooltip > a",
                    action: "attr",
                    attributeName: "href"
                },


            }
        }
    }

    const result = await new SmartWebscraping().extract(
        "https://weworkremotely.com/", rulesToExtract
    )
    console.log(result) // Output: { jobs: [ { companyLink: "", jobLink: "", logo: "", title: "", company: "" } ] }
```

# Warning about this code

I'm builded this code for challenge me how to make solution equal Scrapingbee for simplify process extract when use webscraping, but exist another challenge 
when you work with webscraping for example: case you try extract data on the big site like fakebook propabily has strategies for block you ips, captchas and block
user based user-agent used for scraping. So, in this use soluctions like Scrapingbee to prevent build all things to bypass this block strategies.
