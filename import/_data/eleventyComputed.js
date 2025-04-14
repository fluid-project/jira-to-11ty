export default {
	projects: (data) => {
		const projects = data.issues.reduce((acc, item) => {
			const key = item.fields.project.key;
			const name = item.fields.project.name;
		  
			if (!acc[key]) {
			  acc[key] = { title: name };
			}
		  
			return acc;
		  }, {});

		const grouped = Object.groupBy(data.issues, (item) => {
			return item.fields.project.key;
		});

		for (const [projectKey, issues] of Object.entries(grouped)) {
			if (projects[projectKey]) {
				projects[projectKey].types = [...new Set(issues.map(item => item.fields.issuetype.name))];
				projects[projectKey].resolutions = [...new Set(issues.map(item => item.fields.resolution?.name))].filter(item => item);
				projects[projectKey].reporters = [...new Set(issues.map(item => item.fields.reporter?.displayName))].filter(item => item);
			}
		}

		return projects;
	},
};