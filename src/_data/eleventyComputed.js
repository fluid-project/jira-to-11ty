export default {
	issueStatuses: (data) => [...new Set(data.issues.map(item => item.fields.status.name))],
	issueResolutions: (data) => [...new Set(data.issues.map(item => item.fields.resolution?.name || 'N/A'))],
	issueTypes: (data) => [...new Set(data.issues.map(item => item.fields.issuetype.name))],
};