import type { Template } from "../types";

export const applySolidTemplate: Template = {
	id: "refactor-solid",
	name: "Apply SOLID Principles",
	category: "refactoring",
	tags: ["refactoring", "SOLID", "DRY", "clean-code", "design-principles"],
	difficulty: "advanced",

	template: `# Apply SOLID Principles

**Role**: Software architect specializing in {{language}} and clean architecture
**Goal**: Refactor code to follow SOLID and DRY principles

## Code to Refactor
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Refactoring Request
Please refactor this code applying:

### SOLID Principles
1. **Single Responsibility**: Each class/function should have one reason to change
2. **Open/Closed**: Open for extension, closed for modification
3. **Liskov Substitution**: Subtypes must be substitutable for base types
4. **Interface Segregation**: Many specific interfaces over one general interface
5. **Dependency Inversion**: Depend on abstractions, not concretions

### Additional Principles
- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple
- **YAGNI**: You Aren't Gonna Need It

## Requirements
- Identify which principles are currently violated
- Provide refactored code for each violation
- Explain the trade-offs of each change
- Keep the solution pragmatic (avoid over-engineering)`,

	description: "Use to refactor code following SOLID, DRY, and clean code principles",

	tips: [
		"Include related classes/interfaces for full context",
		"Mention which violations you've noticed",
		"Specify if certain principles are more important for your use case",
		"Consider the team's familiarity with design patterns",
	],

	example: {
		filled: `# Apply SOLID Principles

**Role**: Software architect specializing in TypeScript and clean architecture
**Goal**: Refactor code to follow SOLID and DRY principles

## Code to Refactor
\`\`\`typescript
class UserService {
  private db: Database;

  constructor() {
    this.db = new MySQLDatabase();
  }

  async createUser(data: any) {
    // Validate
    if (!data.email || !data.email.includes('@')) {
      throw new Error('Invalid email');
    }
    if (!data.password || data.password.length < 8) {
      throw new Error('Password too short');
    }

    // Hash password
    const salt = crypto.randomBytes(16);
    const hash = crypto.pbkdf2Sync(data.password, salt, 1000, 64, 'sha512');

    // Save to DB
    await this.db.query('INSERT INTO users...');

    // Send welcome email
    const transporter = nodemailer.createTransport({...});
    await transporter.sendMail({ to: data.email, subject: 'Welcome!' });

    // Log analytics
    fetch('https://analytics.example.com/event', {...});
  }
}
\`\`\`

## Refactoring Request
Please refactor this code applying:

### SOLID Principles
1. **Single Responsibility**: Each class/function should have one reason to change
2. **Open/Closed**: Open for extension, closed for modification
3. **Liskov Substitution**: Subtypes must be substitutable for base types
4. **Interface Segregation**: Many specific interfaces over one general interface
5. **Dependency Inversion**: Depend on abstractions, not concretions

### Additional Principles
- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple
- **YAGNI**: You Aren't Gonna Need It

## Requirements
- Identify which principles are currently violated
- Provide refactored code for each violation
- Explain the trade-offs of each change
- Keep the solution pragmatic (avoid over-engineering)`,
		context: "God class with multiple responsibilities and tight coupling",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "TypeScript, Java, C#, etc.",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Refactor",
			type: "code",
			placeholder: "Paste the code you want to refactor with SOLID principles...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
