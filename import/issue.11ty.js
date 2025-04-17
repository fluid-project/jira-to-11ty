class Issue {
    data() {
        return {
            pagination: {
                data: 'issues',
                size: 1,
                alias: "issue"
            },
            permalink: function (data) {
                return `/issues/${data.issue.key}.md`;
            }
        };
    }

    render(data) {
        const frontMatter = {
            title: data.issue.key,
            summary: data.issue.fields.summary,
            tags: data.issue.fields.project.key,
            project: {
                key: data.issue.fields.project.key,
                title: data.issue.fields.project.name
            },
            type: data.issue.fields.issuetype.name,
            priority: data.issue.fields?.priority?.name,
            status: data.issue.fields.status.name,
            resolution: data.issue.fields?.resolution?.name,
            assignee: data.issue.fields?.assignee?.displayName,
            reporter: data.issue.fields?.reporter?.displayName,
            date: data.issue.fields.created,
            updated: data.issue.fields.updated,
            versions: data.issue.fields.versions ?
                data.issue.fields.versions.map(version => version.name) :
                [],
            fixVersions: data.issue.fields.fixVersions ?
                data.issue.fields.fixVersions.map(version => version.name) :
                [],
            components: data.issue.fields.components ?
                data.issue.fields.components.map(component => component.name) :
                [],
            environment: data.issue.fields?.environment ?
                this.fromADF(data.issue.fields.environment) :
                null,
            issueLinks: data.issue.fields?.issuelinks ?
                data.issue.fields.issuelinks.map(issuelink => {
                    return {
                        type: issuelink.type.name,
                        url: `/browse/${ issuelink.outwardIssue ? issuelink.outwardIssue.key : issuelink.inwardIssue.key }/`,
                        key: issuelink.outwardIssue ? issuelink.outwardIssue.key : issuelink.inwardIssue.key,
                        summary: issuelink.outwardIssue ? issuelink.outwardIssue.fields.summary : issuelink.inwardIssue.summary
                    }
                }) :
                [],
            attachments: data.issue.fields?.attachment ?
                data.issue.fields.attachment.map(attachment => {
                    return {
                        type: /^image/i.test(attachment.mimeType) ? 'image' : 'file',
                        url: `${data.site.attachmentBaseUrl}${data.issue.fields.project.key}/${data.issue.key}/${attachment.filename}`,
                        filename: attachment.filename
                    }
                }) :
                [],
            comments: data.issue.fields?.comment?.comments ?
                data.issue.fields.comment.comments.map(comment => {
                    return {
                        author: comment.author.displayName,
                        date: comment.created,
                        body: this.removeMentions(this.fromADF(comment.body))
                    }
                }) :
                []
        }
        const body = data.issue.fields.description?.version === 1 ?
            this.removeMentions(this.fromADF(data.issue.fields.description)) :
            '';
        return `---json
${JSON.stringify(frontMatter, null, 2)}
---
${body}
        `;
    }
};

export default Issue;