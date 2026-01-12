import type { Template } from "../types";

export const generateDocsTemplate: Template = {
	id: "docs-generate",
	name: "Generate Code Documentation",
	category: "documentation",
	tags: ["documentation", "docstrings", "comments", "jsdoc"],
	difficulty: "beginner",

	template: `# Generate Code Documentation

**Role**: Technical writer specializing in {{language}} documentation
**Goal**: Add comprehensive documentation to {{module_name}}

## Code to Document
\`\`\`{{language}}
{{code_snippet}}
\`\`\`

## Documentation Request
Please add documentation that includes:

1. **Module/File Level**
   - Purpose and overview
   - Usage examples
   - Dependencies and requirements

2. **Function/Method Level**
   - Description of what it does
   - Parameters with types and descriptions
   - Return value description
   - Exceptions/errors that may be thrown
   - Usage examples

3. **Class Level** (if applicable)
   - Class purpose and responsibility
   - Constructor parameters
   - Public methods overview
   - Usage examples

4. **Inline Comments**
   - Complex logic explanations
   - Non-obvious decisions
   - TODO/FIXME notes where appropriate

## Output Format
Use {{language}} documentation conventions (JSDoc, docstrings, XML comments, etc.)`,

	description: "Use to add comprehensive documentation to code",

	tips: [
		"Specify the documentation format (JSDoc, Google-style docstrings, etc.)",
		"Include the full module for complete documentation",
		"Mention any specific documentation standards to follow",
		"Note if you need API documentation for external consumption",
	],

	example: {
		filled: `# Generate Code Documentation

**Role**: Technical writer specializing in Python documentation
**Goal**: Add comprehensive documentation to UserAuthentication

## Code to Document
\`\`\`python
class UserAuthentication:
    def __init__(self, db_connection, secret_key):
        self.db = db_connection
        self.secret = secret_key
        self.token_expiry = 3600

    def login(self, username, password):
        user = self.db.find_user(username)
        if not user:
            raise ValueError("User not found")
        if not self._verify_password(password, user.password_hash):
            raise ValueError("Invalid password")
        return self._generate_token(user.id)

    def _verify_password(self, plain, hashed):
        return bcrypt.checkpw(plain.encode(), hashed.encode())

    def _generate_token(self, user_id):
        payload = {"user_id": user_id, "exp": time.time() + self.token_expiry}
        return jwt.encode(payload, self.secret, algorithm="HS256")
\`\`\`

## Documentation Request
Please add documentation that includes:

1. **Module/File Level**
   - Purpose and overview
   - Usage examples
   - Dependencies and requirements

2. **Function/Method Level**
   - Description of what it does
   - Parameters with types and descriptions
   - Return value description
   - Exceptions/errors that may be thrown
   - Usage examples

3. **Class Level** (if applicable)
   - Class purpose and responsibility
   - Constructor parameters
   - Public methods overview
   - Usage examples

4. **Inline Comments**
   - Complex logic explanations
   - Non-obvious decisions
   - TODO/FIXME notes where appropriate

## Output Format
Use Python documentation conventions (JSDoc, docstrings, XML comments, etc.)`,
		context: "Authentication class needing proper documentation",
	},

	variables: [
		{
			name: "language",
			label: "Programming Language",
			type: "text",
			placeholder: "Python, TypeScript, Java, etc.",
			required: true,
		},
		{
			name: "module_name",
			label: "Module/Class Name",
			type: "text",
			placeholder: "UserAuthentication, PaymentService, etc.",
			required: true,
		},
		{
			name: "code_snippet",
			label: "Code to Document",
			type: "code",
			placeholder: "Paste the code you want documented...",
			required: true,
		},
	],

	version: "1.0.0",
	author: "system",
	createdAt: "2024-01-01T00:00:00.000Z",
	updatedAt: "2024-01-01T00:00:00.000Z",
};
