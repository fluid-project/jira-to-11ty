export default {
	issueResolutions: (data) => [...new Set(data.issues.map(item => item.fields.resolution?.name || 'N/A'))],
	issueTypes: (data) => [...new Set(data.issues.map(item => item.fields.issuetype.name))],
};