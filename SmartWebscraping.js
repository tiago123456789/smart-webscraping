
const axios = require("axios")
const cheerio = require("cheerio");

const ACTIONS_ALLOWED = {
    attr: true, 
    text: true,
    html: true
}

class SmartWebscraping  {

    _extractElement($, key, rulesToExtract) {
        const action = rulesToExtract[key]?.action || "text"

        if (!ACTIONS_ALLOWED[action]) {
            throw new Error("Actions is invalid. Actions allowed: attr, html and text")
        }

        if (action === "attr") {
            return $(rulesToExtract[key]?.selector)[action](rulesToExtract[key]?.attributeName)
        } else {
            return $(rulesToExtract[key]?.selector || rulesToExtract[key])[action]().trim()
        }
    }

    _extractElementInList($, key, rulesToExtract) {
        const action = rulesToExtract[key]?.action || "text"


        if (!ACTIONS_ALLOWED[action]) {
            throw new Error("Actions is invalid. Actions allowed: attr, html and text")
        }

        if (action === "attr") {
            return $.find(rulesToExtract[key]?.selector)[action](rulesToExtract[key]?.attributeName)
        } else {
            return $.find(rulesToExtract[key]?.selector || rulesToExtract[key])[action]().trim()
        }
    }

    async extract(url, rulesToExtract) {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const keys = Object.keys(rulesToExtract)
        const result = {}
        for (let index = 0; index < keys.length; index += 1) {
            const key = keys[index];
            const isListRule = typeof rulesToExtract[key] === 'object' && rulesToExtract[key].type == "list"
            if (isListRule) {
                const item = rulesToExtract[key];
                const rulePerItemKeys = Object.keys(item.rulePerItem);
                result[key] = []
                let listIndex = 0;
                const extractElementInList = this._extractElementInList
                $(item.selector).each(function () {
                    for (let index2 = 0; index2 < rulePerItemKeys.length; index2 += 1) {
                        const keyName = (rulePerItemKeys[index2])
                        result[key][listIndex] = {
                            ...result[key][listIndex],
                            [keyName]: extractElementInList($(this), rulePerItemKeys[index2], item.rulePerItem) 
                        }
                    }
                    listIndex += 1
                })
            } else {
                result[key] = this._extractElement($, key, rulesToExtract)
            }
        }

        return result;
    }
}

module.exports = SmartWebscraping