export default {
	issueReporters: (data) => [...new Set(data.issues.map(item => item.fields.reporter?.displayName || 'N/A'))],
	issueResolutions: (data) => [...new Set(data.issues.map(item => item.fields.resolution?.name || 'N/A'))],
	issueTypes: (data) => [...new Set(data.issues.map(item => item.fields.issuetype.name))],
};