class Project {
    data() {
        return {
            pagination: {
                data: "collections.projects",
                size: 1,
                alias: "projectKey"
            },
            permalink: function (data) {
                return `/projects/${data.projectKey}.md`;
            }
        };
    }

    render(data) {
        const frontMatter = {
            title: data.projects[data.projectKey].title,
            key: data.projectKey,
            eleventyImport: {
                collections: [data.projectKey]
            },
            types: data.projects[data.projectKey].types.sort(),
            resolutions: data.projects[data.projectKey]?.resolutions.sort(),
            reporters: data.projects[data.projectKey]?.reporters.sort()
        }
        
        return `---json
${JSON.stringify(frontMatter, null, 2)}
---
        `;
    };
};

export default Project;