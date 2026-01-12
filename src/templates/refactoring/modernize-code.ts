import type { Template } from "../types";

export const modernizeCodeTemplate: Template = {
	id: "refactor-modernize",
	name: "Modernize Legacy Code",
	category: "refactoring",
	tags: ["refactoring", "modernize", "legacy", "upgrade"],
	difficulty: "intermediate",

	template: `# Modernize Legacy Code

**Role**: {{language}} modernization expert
**Goal**: Update legacy code to modern {{target_standard}} standards

## Target Standard
{{target_standard}}

## Legacy Code
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Modernization Request
Please update this code to use:

1. **Modern Syntax**: Latest language features and idioms
2. **Best Practices**: Current recommended patterns
3. **Type Safety**: Add types if applicable
4. **Modern APIs**: Replace deprecated methods with current alternatives
5. **Async Patterns**: Use modern async/await if applicable

## Requirements
- Maintain backward compatibility where specified
- Explain which legacy patterns are being replaced
- Note any breaking changes
- Highlight new features being utilized`,

	description: "Use to update old code to modern language standards and patterns",

	tips: [
		"Specify the target version or standard (ES2022, Python 3.11, etc.)",
		"Mention any compatibility requirements",
		"Note dependencies that may need updating",
		"Identify any deprecated features being used",
	],

	example: {
		filled: `# Modernize Legacy Code

**Role**: JavaScript modernization expert
**Goal**: Update legacy code to modern ES2022+ standards

## Target Standard
ES2022+ with modern JavaScript best practices. Project uses Node.js 20.

## Legacy Code
\`\`\`javascript
var self = this;

function fetchData(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/data');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        callback(null, data);
      } else {
        callback(new Error('Request failed'));
      }
    }
  };
  xhr.send();
}

fetchData(function(err, data) {
  if (err) {
    console.log('Error: ' + err.message);
    return;
  }
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
});
\`\`\`

## Modernization Request
Please update this code to use:

1. **Modern Syntax**: Latest language features and idioms
2. **Best Practices**: Current recommended patterns
3. **Type Safety**: Add types if applicable
4. **Modern APIs**: Replace deprecated methods with current alternatives
5. **Async Patterns**: Use modern async/await if applicable

## Requirements
- Maintain backward compatibility where specified
- Explain which legacy patterns are being replaced
- Note any breaking changes
- Highlight new features being utilized`,
		context: "ES5 callback-based code to modernize to async/await",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "JavaScript, Python, etc.",
			required: true,
		},
		{
			name: "target_standard",
			label: "Target Standard",
			type: "text",
			placeholder: "ES2022, Python 3.11, C++20, etc.",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Legacy Code",
			type: "code",
			placeholder: "Paste the legacy code to modernize...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
