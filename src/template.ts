import * as Color from 'color';

export default (colors: Color[], bordered: boolean) => ({
  'type': 'dark',
  'colors': {
    // Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

    // CONTRAST COLOURS
    // --
    
    // BASE COLOURS
    'focusBorder': colors[8].hex()+'77',
    'foreground': colors[7].hex()+'99',
    'widget.shadow': colors[0].darken(0.25).hex(),
    'selection.background': colors[7].hex()+'77',
    
    // TEXT COLOURS
    'textBlockQuote.background': colors[0].lighten(0.20).hex(),
    'textLink.foreground': colors[1].hex(),
    'textLink.activeForeground': colors[1].hex(),
    'textPreformat.foreground': colors[7].hex(),
    
    // BUTTON CONTROL
    'button.background': colors[1].hex(),
    'button.foreground': colors[0].hex(),
    //'button.hoverBackground': '',
    
    // DROPDOWN CONTROL
    'dropdown.background': colors[0].lighten(0.20).hex(),
    'dropdown.foreground': colors[7].hex()+'99',
    'dropdown.border': colors[8].hex()+'77',
    
    // INPUT CONTROL
    'input.background': colors[0].lighten(0.20).hex(),
    'input.border': colors[8].hex()+'55',
    'input.foreground': colors[7].hex(),
    'input.placeholderForeground': colors[8].hex()+'77',
    'inputOption.activeBorder': colors[1].hex(),
    'inputValidation.errorBackground': colors[0].hex(),
    'inputValidation.errorBorder': colors[4].hex(),
    'inputValidation.infoBackground': colors[0].hex(),
    'inputValidation.infoBorder': colors[2].hex(),
    'inputValidation.warningBackground': colors[0].hex(),
    'inputValidation.warningBorder': colors[3].hex(),

    // SCROLLBAR CONTROL
    'scrollbar.shadow': colors[8].hex()+'33',
    'scrollbarSlider.background': colors[7].hex()+'44',
    'scrollbarSlider.hoverBackground': colors[7].hex()+'77',
    'scrollbarSlider.activeBackground': colors[7].hex()+'92',
    
    // BADGE
    'badge.background': colors[1].hex(),
    'badge.foreground': colors[0].hex(),
    
    // PROGRESS BAR
    'progressBar.background': colors[1].hex(),
    
    // LISTS AND TREES
    'list.activeSelectionBackground': colors[8].hex()+'33',
    'list.activeSelectionForeground': colors[7].hex(),
    'list.focusBackground': colors[8].hex()+'33',
    'list.focusForeground': colors[7].hex()+'99',
    'list.highlightForeground': colors[1].hex(),
    'list.hoverBackground': colors[8].hex()+'33',
    'list.hoverForeground': colors[7].hex()+'99',
    'list.inactiveSelectionBackground': colors[8].hex()+'33',
    'list.inactiveSelectionForeground': colors[7].hex()+'99',
    'list.invalidItemForeground': colors[7].hex()+'77',
    
    // ACTIVITY BAR
    'activityBar.background': colors[0].hex(),
    'activityBar.foreground': colors[8].hex(),
    'activityBar.border': bordered ? colors[8].hex()+'33' : colors[0].hex(),
    'activityBarBadge.background': colors[1].hex(),
    'activityBarBadge.foreground': colors[0].hex(),
    
    // SIDE BAR
    'sideBar.background': colors[0].hex(),
    'sideBar.border': bordered ? colors[8].hex()+'33' : colors[0].hex(),
    'sideBarTitle.foreground': colors[7].hex()+'99',
    'sideBarSectionHeader.background': colors[0].hex(),
    'sideBarSectionHeader.foreground': colors[7].hex()+'99',
    
    // EDITOR GROUPS & TABS
    'editorGroup.border': colors[8].hex()+'33',
    //'editorGroup.background': colors[0].lighten(0.20).hex(), // deprecated
    'editorGroupHeader.noTabsBackground': colors[0].hex(),
    'editorGroupHeader.tabsBackground': colors[0].hex(),
    'editorGroupHeader.tabsBorder': bordered ? colors[8].hex()+'33' : colors[0].hex(),
    'tab.activeBackground': bordered ? colors[0].lighten(0.20).hex() : colors[0].hex(),
    'tab.activeForeground': colors[7].hex(),
    'tab.border': bordered ? colors[8].hex()+'33' : colors[0].hex(),
    'tab.activeBorder': bordered ? undefined : colors[1].hex(),
    'tab.activeBorderTop': bordered ? colors[1].hex() : undefined,
    'tab.unfocusedActiveBorder': bordered ? undefined : colors[7].hex()+'99',
    'tab.unfocusedActiveBorderTop': bordered ? colors[7].hex()+'99' : undefined,
    'tab.inactiveBackground': colors[0].hex(),
    'tab.inactiveForeground': colors[7].hex()+'99',
    'tab.unfocusedActiveForeground': colors[7].hex()+'99',
    'tab.unfocusedInactiveForeground': colors[7].hex()+'99',
    
    // EDITOR
    'editor.background': bordered ? colors[0].lighten(0.20).hex() : colors[0].hex(),
    'editor.foreground': colors[7].hex(),
    'editorLineNumber.foreground': colors[8].hex()+'92',
    'editorLineNumber.activeForeground': colors[8].hex(),
    'editorCursor.foreground': colors[1].hex(),
    
    'editor.selectionBackground': colors[8].hex()+'77',
    'editor.inactiveSelectionBackground': colors[8].hex()+'44',
    'editor.selectionHighlightBackground': colors[8].hex()+'44',
    'editor.selectionHighlightBorder': colors[8].hex(),
    
    'editor.wordHighlightBackground': colors[8].hex()+'44',
    'editor.wordHighlightStrongBackground': colors[2].hex()+'77',
    
    'editor.findMatchBackground': colors[1].hex()+'0e',
    'editor.findMatchBorder': colors[1].hex(),
    'editor.findMatchHighlightBackground': colors[1].hex()+'0e',
    'editor.findMatchHighlightBorder': colors[1].hex()+'66',
    'editor.findRangeHighlightBackground': colors[8].hex()+'44',
    'editor.findRangeHighlightBorder': colors[0].hex()+'00',

    // 'editor.hoverHighlightBackground': '',

    'editor.lineHighlightBackground': colors[7].hex()+'22',
    // 'editor.lineHighlightBorder': '',
    
    'editorLink.activeForeground': colors[1].hex(),
    
    'editor.rangeHighlightBackground': colors[8].hex()+'33',
    
    'editorWhitespace.foreground': colors[8].hex()+'66',

    'editorIndentGuide.background': colors[8].hex()+'44',
    'editorIndentGuide.activeBackground': colors[8].hex()+'77',
    
    'editorRuler.foreground': colors[8].hex()+'44',
    'editorCodeLens.foreground': colors[8].hex()+'b0',
    
    'editorBracketMatch.background': colors[8].hex()+'33',
    'editorBracketMatch.border': colors[8].hex()+'55',

    // BRACKET MATCHES
    'editorBracketHighlight.foreground1': colors[6].lighten(0.25).hex(),
    'editorBracketHighlight.foreground2': colors[5].lighten(0.25).hex(),
    'editorBracketHighlight.foreground3': colors[4].lighten(0.25).hex(),
    'editorBracketHighlight.foreground4': colors[3].lighten(0.4).hex(),
    'editorBracketHighlight.foreground5': colors[2].lighten(0.25).hex(),
    'editorBracketHighlight.foreground6': colors[1].lighten(0.25).hex(),
    
    // OVERVIEW RULER
    'editorOverviewRuler.border': colors[8].hex()+'33',
    'editorOverviewRuler.modifiedForeground': colors[3].hex()+'bb',
    'editorOverviewRuler.addedForeground': colors[2].hex()+'bb',
    'editorOverviewRuler.deletedForeground': colors[4].hex()+'bb',
    'editorOverviewRuler.errorForeground': colors[4].hex(),
    'editorOverviewRuler.warningForeground': colors[1].hex(),
    
    // ERRORS AND WARNINGS
    'editorError.foreground': colors[4].hex(),
    'editorWarning.foreground': colors[1].hex(),
    
    // GUTTER
    'editorGutter.modifiedBackground': colors[3].hex()+'bb',
    'editorGutter.addedBackground': colors[2].hex()+'bb',
    'editorGutter.deletedBackground': colors[4].hex()+'bb',
    
    // DIFF EDITOR
    'diffEditor.insertedTextBackground': colors[10].hex()+'33',
    'diffEditor.removedTextBackground': colors[3].hex()+'33',

    // EDITOR WIDGET
    'editorWidget.background': colors[0].lighten(0.20).hex(),
    'editorSuggestWidget.background': colors[0].lighten(0.20).hex(),
    'editorSuggestWidget.border': colors[8].hex()+'22',
    'editorSuggestWidget.highlightForeground': colors[1].hex(),
    'editorSuggestWidget.selectedBackground': colors[8].hex()+'33',
    'editorHoverWidget.background': colors[0].lighten(0.20).hex(),
    'editorHoverWidget.border': colors[8].hex()+'22',

    // DEBUG EXCEPTION
    'debugExceptionWidget.border': colors[8].hex()+'33',
    'debugExceptionWidget.background': colors[0].lighten(0.20).hex(),

    // EDITOR MARKER
    'editorMarkerNavigation.background': colors[0].lighten(0.20).hex(),

    // PEEK VIEW
    'peekView.border': colors[8].hex()+'33',
    'peekViewEditor.background': colors[0].lighten(0.20).hex(),
    'peekViewEditor.matchHighlightBackground': colors[1].hex()+'44',
    'peekViewResult.background': colors[0].lighten(0.20).hex(),
    'peekViewResult.fileForeground': colors[7].hex()+'99',
    'peekViewResult.matchHighlightBackground': colors[1].hex()+'44',
    'peekViewTitle.background': colors[0].lighten(0.20).hex(),
    'peekViewTitleDescription.foreground': colors[7].hex()+'99',
    'peekViewTitleLabel.foreground': colors[7].hex()+'99',

    // Merge Conflicts
    // 'merge.currentHeaderBackground': '?',
    // 'merge.currentContentBackground': '?',
    // 'merge.incomingHeaderBackground': '?',
    // 'merge.incomingContentBackground': '?',
    // 'merge.border': '?',
    // 'merge.commonContentBackground': '?',
    // 'merge.commonHeaderBackground': '?',
    // 'editorOverviewRuler.currentContentForeground': '?',
    // 'editorOverviewRuler.incomingContentForeground': '?',
    // 'editorOverviewRuler.commonContentForeground': '?',

    // Panel
    'panel.background': colors[0].hex(),
    'panel.border': colors[8].hex()+'33',
    'panelTitle.activeBorder': colors[1].hex(),
    'panelTitle.activeForeground': colors[7].hex(),
    'panelTitle.inactiveForeground': colors[7].hex()+'99',

    // STATUS BAR
    'statusBar.background': colors[0].hex(),
    'statusBar.foreground': colors[7].hex(),
    'statusBar.border': bordered ? colors[8].hex()+'33' : colors[0].hex(),
    'statusBar.debuggingBackground': colors[3].hex(),
    'statusBar.debuggingForeground': colors[0].hex()+'dd',
    'statusBar.noFolderBackground': colors[0].lighten(0.20).hex(),
    'statusBarItem.activeBackground': '#00000050',
    'statusBarItem.hoverBackground': '#00000030',
    'statusBarItem.prominentBackground': colors[8].hex()+'33',
    'statusBarItem.prominentHoverBackground': '#00000030',
    
    // TITLE BAR
    'titleBar.activeBackground': colors[0].hex(),
    'titleBar.activeForeground': colors[7].hex(),
    'titleBar.inactiveBackground': colors[0].hex(),
    'titleBar.inactiveForeground': colors[7].hex(),
    'titleBar.border': bordered ? colors[8].hex()+'33' : colors[0].hex(),
    
    // MENU BAR
    // 'menubar.selectionForeground': '?',
    // 'menubar.selectionBackground': '?',
    // 'menubar.selectionBorder': '?',
    // 'menu.foreground': '?',
    // 'menu.background': '?',
    // 'menu.selectionForeground': '?',
    // 'menu.selectionBackground': '?',
    // 'menu.selectionBorder': '?',
    
    // NOTIFICATION
    // 'notificationCenter.border': '?',
    // 'notificationCenterHeader.foreground': '?',
    // 'notificationCenterHeader.background': '?',
    // 'notificationToast.border': '?',
    // 'notifications.foreground': '?',
    // 'notifications.background': '?',
    // 'notifications.border': '?',
    // 'notificationLink.foreground': '?',
    
    // EXTENSIONS
    'extensionButton.prominentForeground': colors[0].hex(),
    'extensionButton.prominentBackground': colors[1].hex(),
    'extensionButton.prominentHoverBackground': colors[1].hex()+'b3',
    
    // QUICK PICKER
    'pickerGroup.border': colors[8].hex()+'33',
    'pickerGroup.foreground': colors[7].hex()+'b3',
    
    // DEBUG
    'debugTokenExpression.value': colors[7].hex()+'b3',
    'debugToolBar.background': colors[0].hex(),
    // 'debugToolBar.border': '',
    
    // WELCOME PAGE
    // 'welcomePage.buttonBackground': '?'
    // 'welcomePage.buttonHoverBackground': '?'
    'walkThrough.embeddedEditorBackground': colors[0].lighten(0.20).hex(),
    
    // GIT
    'gitDecoration.modifiedResourceForeground': colors[3].hex()+'cc',
    'gitDecoration.deletedResourceForeground': colors[4].hex()+'cc',
    'gitDecoration.untrackedResourceForeground': colors[2].hex()+'cc',
    'gitDecoration.ignoredResourceForeground': colors[7].hex()+'66',
    // 'gitDecoration.conflictingResourceForeground': '?',
    'gitDecoration.submoduleResourceForeground': colors[13].hex()+'b0',

    // Settings
    'settings.headerForeground': colors[7].hex(),
    'settings.modifiedItemIndicator': colors[2].hex(),

    // TERMINAL
    'terminal.background': colors[0].hex(),
    'terminal.foreground': colors[7].hex(),
    'terminal.ansiBlack': colors[0].hex(),


    'terminal.ansiRed': colors[1].hex(),
    'terminal.ansiGreen': colors[2].hex(),
    'terminal.ansiYellow': colors[3].hex(),
    'terminal.ansiBlue': colors[4].hex(),
    'terminal.ansiMagenta': colors[5].hex(),
    'terminal.ansiCyan': colors[6].hex(),
    'terminal.ansiWhite': colors[7].hex(),
    'terminal.ansiBrightBlack': colors[8].hex(),
    'terminal.ansiBrightRed': colors[9].hex(),
    'terminal.ansiBrightGreen': colors[10].hex(),
    'terminal.ansiBrightYellow': colors[11].hex(),
    'terminal.ansiBrightBlue': colors[12].hex(),
    'terminal.ansiBrightMagenta': colors[13].hex(),
    'terminal.ansiBrightCyan': colors[14].hex(),
    'terminal.ansiBrightWhite': colors[15].hex()
  },
  'tokenColors': [
    {
      'settings': {
        'background': colors[0].hex(),
        'foreground': colors[7].hex()
      }
    },
    {
      'name': 'Comment',
      'scope': ['comment'],
      'settings': {
        'fontStyle': 'italic',
        'foreground': colors[8].hex()+'b0'
      }
    },
    
    
    {
      'name': 'String',
      'scope': ['string', 'constant.other.symbol'],
      'settings': {
        'foreground': colors[10].hex()
      }
    },
    {
      'name': 'Regular Expressions and Escape Characters',
      'scope': ['string.regexp', 'constant.character', 'constant.other'],
      'settings': {
        'foreground': colors[14].hex()
      }
    },
    
    
    {
      'name': 'Number',
      'scope': ['constant.numeric'],
      'settings': {
        'foreground': colors[5].hex()
      }
    },
    {
      'name': 'Built-in constants',
      'scope': ['constant.language'],
      'settings': {
        'foreground': colors[1].hex()
      }
    },
    
    
    {
      'name': 'Variable',
      'scope': ['variable'],
      'settings': {
        'foreground': colors[7].hex()
      }
    },
    {
      'name': 'Member Variable',
      'scope': ['variable.member'],
      'settings': {
        'foreground': colors[1].hex()
      }
    },
    {
      'name': 'Language variable',
      'scope': ['variable.language'],
      'settings': {
        'fontStyle': 'italic',
        'foreground': colors[2].hex()
      }
    },
    
    
    // ------
    // Keywords
    {
      'name': 'Storage',
      'scope': ['storage'],
      'settings': {
        'foreground': colors[14].hex()
      }
    },
    {
      'name': 'type',
      'scope': ['storage.modifier'],
      'settings': {
        'foreground': colors[11].hex()
      }
    },
    {
      'name': 'type',
      'scope': ['meta.specification.type.fortran'],
      'settings': {
        'foreground': colors[15].hex()
      }
    },
    {
      'name': 'Keyword',
      'scope': ['keyword'],
      'settings': {
        'foreground': colors[1].hex()
      }
    },
    
    
    // ------
    // Operators
    {
      'name': 'Operators',
      'scope': ['keyword.operator', 'keyword.other', 'keyword.control', 'keyword.logical'],
      'settings': {
        'foreground': colors[11].hex()
      }
    },


   // ------
   // Punctuation
   {
     'name': 'Separators like ; or ,',
     'scope': ['punctuation.separator', 'punctuation.terminator'],
     'settings': {
       'foreground': colors[7].hex()+'b0'
      }
    },
    {
      'name': 'Punctuation',
      'scope': ['punctuation.section'],
      'settings': {
        'foreground': colors[7].hex()
      }
    },
    {
      'name': 'Accessor',
      'scope': ['punctuation.accessor'],
      'settings': {
        'foreground': colors[3].hex()
      }
    },
    
    
    // ------
    // Types
    {
      'name': 'Types fixes',
      'scope': [
        'source.java storage.type',
        'source.haskell storage.type',
        'source.c storage.type',
      ],
      'settings': {
        'foreground': colors[12].hex()
      }
    },
    {
      'name': 'Inherited class type',
      'scope': ['entity.other.inherited-class'],
      'settings': {
        'foreground': colors[2].hex()
      }
    },
    // Fixes
    {
      'name': 'Lambda arrow',
      'scope': ['storage.type.function'],
      'settings': {
        'foreground': colors[14].hex()
      }
    },
    {
      'name': 'Java primitive variable types',
      'scope': ['source.java storage.type.primitive'],
      'settings': {
        'foreground': colors[2].hex()
      }
    },
    
    
    // ------
    // Function/method names in definitions
    // and calls
    {
      'name': 'Function name',
      'scope': ['entity.name.function'],
      'settings': {
        'foreground': colors[13].hex()
      }
    },
    {
      'name': 'Function arguments',
      'scope': ['variable.parameter'],
      'settings': {
        'foreground': colors[15].hex()
      }
    },
    {
      'name': 'Function arguments',
      'scope': ['meta.parameter'],
      'settings': {
        'foreground': colors[15].hex()
      }
    },
    {
      'name': 'Function call',
      'scope': [
        'variable.function',
        'variable.annotation',
        'meta.function-call.generic',
        'support.function.go'
      ],
      'settings': {
        'foreground': colors[11].hex()
      }
    },
    {
      'name': 'Library function',
      'scope': ['support.function', 'support.macro'],
      'settings': {
        'foreground': colors[5].hex()
      }
    },
    
    
    // ------
    // Import/export paths
    {
      'name': 'Imports and packages',
      'scope': ['entity.name.import', 'entity.name.package'],
      'settings': {
        'foreground': colors[10].hex()
      }
    },
    {
      'name': 'Entity name',
      'scope': ['entity.name'],
      'settings': {
        'foreground': colors[13].hex()
      }
    },
    
    // Tag and their attributes
    {
      'name': 'Tag',
      'scope': ['entity.name.tag', 'meta.tag.sgml'],
      'settings': {
        'foreground': colors[2].hex()
      }
    },
    {
      'name': 'Tag start/end',
      'scope': [
        'punctuation.definition.tag.end',
        'punctuation.definition.tag.begin',
        'punctuation.definition.tag'
      ],
      'settings': {
        'foreground': colors[2].hex()+'77'
      }
    },
    {
      'name': 'Tag attribute',
      'scope': ['entity.other.attribute-name'],
      'settings': {
        'foreground': colors[11].hex()
      }
    },
    
    
    {
      'name': 'Library constant',
      'scope': ['support.constant'],
      'settings': {
        'fontStyle': 'italic',
        'foreground': colors[3].hex()
      }
    },
    {
      'name': 'Library class/type',
      'scope': ['support.type', 'support.class', 'source.go storage.type'],
      'settings': {
        'foreground': colors[2].hex()
      }
    },
    {
      'name': 'Decorators/annotation',
      'scope': [
        'meta.decorator variable.other',
        'meta.decorator punctuation.decorator',
        'storage.type.annotation'
      ],
      'settings': {
        'foreground': colors[13].hex()
      }
    },
    {
      'name': 'Invalid',
      'scope': ['invalid'],
      'settings': {
        'foreground': colors[4].hex()
      }
    },
    {
      'name': 'diff.header',
      'scope': ['meta.diff', 'meta.diff.header'],
      'settings': {
        'foreground': colors[13].hex()
      }
    },
    {
      'name': 'Ruby class methods',
      'scope': ['source.ruby variable.other.readwrite'],
      'settings': {
        'foreground': colors[11].hex()
      }
    },
    {
      'name': 'CSS tag names',
      'scope': [
        'source.css entity.name.tag',
        'source.sass entity.name.tag',
        'source.scss entity.name.tag',
        'source.less entity.name.tag',
        'source.stylus entity.name.tag'
      ],
      'settings': {
        'foreground': colors[12].hex()
      }
    },
    {
      'name': 'CSS browser prefix',
      'scope': [
        'source.css support.type',
        'source.sass support.type',
        'source.scss support.type',
        'source.less support.type',
        'source.stylus support.type'
      ],
      'settings': {
        'foreground': colors[8].hex()+'b0'
      }
    },
    {
      'name': 'CSS Properties',
      'scope': ['support.type.property-name'],
      'settings': {
        'fontStyle': 'normal',
        'foreground': colors[2].hex()
      }
    },
    {
      'name': 'Search Results Nums',
      'scope': ['constant.numeric.line-number.find-in-files - match'],
      'settings': {
        'foreground': colors[8].hex()+'b0'
      }
    },
    {
      'name': 'Search Results Match Nums',
      'scope': ['constant.numeric.line-number.match'],
      'settings': {
        'foreground': colors[14].hex()
      }
    },
    {
      'name': 'Search Results Lines',
      'scope': ['entity.name.filename.find-in-files'],
      'settings': {
        'foreground': colors[10].hex()
      }
    },
    {
      'scope': ['message.error'],
      'settings': {
        'foreground': colors[4].hex()
      }
    },
    {
      'name': 'Markup heading',
      'scope': ['markup.heading', 'markup.heading entity.name'],
      'settings': {
        'fontStyle': 'bold',
        'foreground': colors[10].hex()
      }
    },
    {
      'name': 'Markup links',
      'scope': ['markup.underline.link', 'string.other.link'],
      'settings': {
        'foreground': colors[2].hex()
      }
    },
    {
      'name': 'Markup Italic',
      'scope': ['markup.italic'],
      'settings': {
        'fontStyle': 'italic',
        'foreground': colors[1].hex()
      }
    },
    {
      'name': 'Markup Bold',
      'scope': ['markup.bold'],
      'settings': {
        'fontStyle': 'bold',
        'foreground': colors[1].hex()
      }
    },
    {
      'name': 'Markup Bold/italic',
      'scope': ['markup.italic markup.bold', 'markup.bold markup.italic'],
      'settings': {
        'fontStyle': 'bold italic'
      }
    },
   {
     'name': 'Markup Code',
     'scope': ['markup.raw'],
     'settings': {
       'background': colors[7].hex()+'06'
      }
    },
    {
      'name': 'Markup Code Inline',
      'scope': ['markup.raw.inline'],
      'settings': {
        'background': colors[7].hex()+'10'
      }
    },
    {
      'name': 'Markdown Separator',
      'scope': ['meta.separator'],
      'settings': {
        'fontStyle': 'bold',
        'background': colors[7].hex()+'10',
        'foreground': colors[8].hex()+'b0'
      }
    },
    {
      'name': 'Markup Blockquote',
      'scope': ['markup.quote'],
      'settings': {
        'foreground': colors[14].hex(),
        'fontStyle': 'italic'
      }
    },
    {
      'name': 'Markup List Bullet',
      'scope': ['markup.list punctuation.definition.list.begin'],
      'settings': {
        'foreground': colors[11].hex()
      }
    },
    {
     'name': 'Markup added',
     'scope': ['markup.inserted'],
     'settings': {
       'foreground': colors[2].hex()
      }
    },
    {
      'name': 'Markup modified',
      'scope': ['markup.changed'],
      'settings': {
        'foreground': colors[3].hex()
      }
    },
    {
      'name': 'Markup removed',
      'scope': ['markup.deleted'],
      'settings': {
        'foreground': colors[4].hex()
      }
    },
    {
      'name': 'Markup Strike',
      'scope': ['markup.strike'],
      'settings': {
        'foreground': colors[13].hex()
      }
    },
    {
     'name': 'Markup Table',
     'scope': ['markup.table'],
     'settings': {
       'background': colors[7].hex()+'10',
       'foreground': colors[2].hex()
      }
    },
    {
      'name': 'Markup Raw Inline',
      'scope': ['text.html.markdown markup.inline.raw'],
      'settings': {
        'foreground': colors[3].hex()
      }
    },
    {
      'name': 'Markdown - Line Break',
      'scope': ['text.html.markdown meta.dummy.line-break'],
      'settings': {
        'background': colors[8].hex()+'b0',
        'foreground': colors[8].hex()+'b0'
      }
    },
    {
      'name': 'Markdown - Raw Block Fenced',
      'scope': ['punctuation.definition.markdown'],
      'settings': {
        'background': colors[7].hex(),
        'foreground': colors[8].hex()+'b0'
      }
    }
  ]
});
