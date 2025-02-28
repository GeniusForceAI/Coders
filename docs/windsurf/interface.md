---
sidebar_position: 3
---

# Navigating the Windsurf Interface

## Introduction

The Windsurf interface combines traditional IDE capabilities with revolutionary AI-powered features in an intuitive, customizable environment. Understanding this interface is key to maximizing your productivity with Windsurf. This guide will walk you through each component of the Windsurf UI and explain how to navigate and customize it to suit your workflow.

## Interface Overview

The Windsurf interface is organized into several main areas:

1. **Activity Bar**: Vertical icon bar for switching between major views
2. **Side Bar**: Expandable panel for project navigation and management
3. **Editor Area**: Main coding workspace with tabs and split views
4. **AI Assistant Panel**: Intelligent coding companion
5. **Status Bar**: Information and quick actions at the bottom
6. **Terminal/Output Panel**: Integrated terminal and console output

<!-- Image temporarily removed for documentation restructuring -->
<!-- ![Windsurf Interface Overview](/img/docs/windsurf-interface-overview.png) -->

## Activity Bar

Located on the far left of the window, the Activity Bar contains icons for accessing different aspects of your development workflow:

- **Explorer**: Navigate project files and directories
- **Search**: Find and replace across your project
- **Source Control**: Manage Git repositories
- **Run & Debug**: Execute and debug your application
- **Extensions**: Browse and manage Windsurf extensions
- **AI Flow**: Visualize and manage AI-driven workflows
- **Settings**: Configure Windsurf preferences

You can reorder these icons by dragging them, and add or remove views through the context menu (right-click).

## Side Bar

The Side Bar displays different panels based on the selected Activity Bar icon:

### Explorer Panel

- **Project Files**: Tree view of your project structure
- **Open Editors**: List of currently open files
- **Timeline**: History of file changes
- **Outlines**: Structure of the current file

**Tips**:
- Use drag and drop to reorganize files
- Right-click for context-specific actions
- Use the filter box at the top to quickly find files

### Search Panel

- **Text Search**: Find text across all project files
- **Replace**: Perform project-wide replacements
- **Filters**: Narrow search by file type or pattern

### Source Control Panel

- **Changes**: Uncommitted changes in your repository
- **Commit History**: Browse previous commits
- **Branches**: Switch between and manage branches

### Debug Panel

- **Variables**: Inspect runtime values
- **Watch**: Monitor specific expressions
- **Call Stack**: Track execution path
- **Breakpoints**: Manage debug breakpoints

### Extensions Panel

- **Installed**: View and manage installed extensions
- **Marketplace**: Browse available extensions
- **Recommendations**: AI-suggested extensions based on your project

### AI Flow Panel

- **Agents**: Configure AI agents for different tasks
- **Workflows**: Define and monitor AI-assisted development processes
- **History**: Review past AI interactions and generated code

## Editor Area

The central workspace where you write and edit code:

### Key Features

- **Multiple Tabs**: Switch between open files
- **Split Views**: Work on multiple files side by side (horizontal or vertical)
- **Minimap**: Visual overview of the file (optional)
- **Inline Suggestions**: AI-powered code completions as you type
- **Error and Warning Indicators**: Visual cues for code issues
- **Code Folding**: Collapse sections of code for better readability

### Editor Context Menu

Right-click in the editor to access context-specific actions:

- **Generate Code with AI**: Create new code based on description
- **Explain Code**: Get AI explanation of selected code
- **Refactor**: AI-assisted code restructuring
- **Test Generation**: Create unit tests for selected code
- **Optimize**: Suggestions for performance improvements
- **Format Document**: Apply code formatting rules

## AI Assistant Panel

Located on the right side of the interface, the AI Assistant provides:

### Chat Interface

- **Natural Language Queries**: Ask questions about code, APIs, or programming concepts
- **Context-Aware Responses**: Get answers tailored to your current project
- **Code Snippets**: Directly insert suggested code into your editor

### AI Actions

- **Code Analysis**: Get feedback on potential issues or improvements
- **Documentation Generation**: Create docs for your functions and classes
- **Code Translation**: Convert between programming languages
- **Algorithm Suggestions**: Get implementation ideas for specific problems

### Learning Mode

- **Tutorials**: Interactive guides for new concepts or frameworks
- **Best Practices**: Suggestions for improving code quality
- **Examples**: Sample implementations related to your current task

## Terminal and Output Panel

Located at the bottom of the interface:

### Terminal

- **Multiple Shells**: Open several terminal instances with different shells
- **Split View**: Run commands side by side
- **Command History**: Quickly access previously run commands
- **Smart Terminal**: AI-enhanced command suggestions

### Output Panels

- **Problems**: List of errors and warnings
- **Output**: Program stdout/stderr and build output
- **Debug Console**: Interactive debugging environment
- **AI Logs**: Record of AI-related operations

## Status Bar

Located at the bottom of the window:

- **Current Branch**: Active Git branch
- **Language Mode**: Language of the active file
- **Encoding**: File encoding information
- **Line/Column**: Current cursor position
- **Indentation**: Tab/space settings
- **AI Status**: Current AI model and connection status
- **Errors/Warnings**: Count of issues in the current file

## Customizing the Interface

### Layout Customization

- **Resize Panels**: Drag panel dividers to adjust sizes
- **Hide/Show Panels**: Toggle visibility of different UI elements
- **Panel Position**: Move panels to different locations

### Theme and Appearance

1. Open Settings (`Ctrl+,` or `Cmd+,`)
2. Navigate to "Appearance"
3. Choose from built-in themes or install custom themes
4. Adjust font, icon set, and color customizations

### Keyboard Shortcuts

1. Open Settings
2. Navigate to "Keyboard Shortcuts"
3. Search for commands and assign custom shortcuts
4. Import/export keyboard shortcut configurations

### Windsurf Profiles

- **Create Profiles**: Different configurations for different project types
- **Switch Profiles**: Quickly change entire setups based on current task
- **Share Profiles**: Export configurations for team consistency

## Advanced Interface Features

### Zen Mode

Press `Ctrl+K Z` (Windows/Linux) or `Cmd+K Z` (macOS) to enter distraction-free coding mode, which hides most interface elements.

### Screen Sharing Mode

Optimize the interface for pair programming and presentations with larger fonts and simplified views.

### Custom Layouts

Save and restore window arrangements for different workflows:

1. Arrange your interface as desired
2. Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. Type "Workbench: Save Layout"
4. Restore layouts through the same Command Palette

### AI Visibility Controls

Adjust how much AI assistance is visible during coding:

- **Minimal**: Only show AI suggestions on explicit request
- **Balanced**: Show suggestions for complex code sections
- **Maximum**: Continuously display AI assistance and suggestions

## Keyboard Navigation

Efficient keyboard navigation can significantly improve your productivity:

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| Navigate between panels | `Ctrl+0-9` | `Cmd+0-9` |
| Focus editor | `Ctrl+1` | `Cmd+1` |
| Focus terminal | `Ctrl+` | ``Cmd+` `` |
| Focus side bar | `Ctrl+0` | `Cmd+0` |
| Toggle side bar | `Ctrl+B` | `Cmd+B` |
| Toggle AI panel | `Ctrl+I` | `Cmd+I` |
| Cycle through open files | `Ctrl+Tab` | `Cmd+Tab` |
| Split editor | `Ctrl+\` | `Cmd+\` |
| Close current editor | `Ctrl+W` | `Cmd+W` |

## Touch and Gesture Support

Windsurf supports multi-touch gestures on compatible devices:

- **Pinch to zoom**: Adjust font size
- **Two-finger scroll**: Navigate through code
- **Three-finger swipe**: Switch between files
- **Tap and hold**: Context menu

## Accessibility Features

Windsurf includes several accessibility enhancements:

- **Screen Reader Support**: Compatible with major screen readers
- **High Contrast Themes**: Improved visibility for visual impairments
- **Keyboard Navigation**: Complete control without mouse interaction
- **Font Customization**: Adjust for readability
- **Animation Controls**: Reduce or disable interface animations

## Conclusion

Mastering the Windsurf interface allows you to take full advantage of its powerful AI-assisted development capabilities. As you become more familiar with the layout and navigation, you'll discover workflows that significantly accelerate your coding process.

Continue to [AI-Assisted Code Generation](./code-generation.md) to learn how Windsurf can help you write code faster and with fewer errors.
