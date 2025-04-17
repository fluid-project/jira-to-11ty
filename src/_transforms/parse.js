import {parseHTML} from "linkedom";

export default (value, outputPath) => {
    if (outputPath && outputPath.includes(".html")) {
        const {document} = parseHTML(value);
        const links = [
            ...document.querySelectorAll('a[href*="#icft="]')
        ];

        if (links.length > 0) {
            for (const link of links) {
              const issue = link.href.split("#icft=")[1];
              link.textContent = issue;
              link.href = `/browse/${issue}/`;
            }
        }

        return `<!DOCTYPE html>\r\n${document.documentElement.outerHTML}`;
    }

    return value;
};
