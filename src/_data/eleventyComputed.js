export default {
	issueStatuses: (data) => [...new Set(data.issues.map(item => item.fields.status.name))],
	issueTypes: (data) => [...new Set(data.issues.map(item => item.fields.issuetype.name))],
};