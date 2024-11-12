/*
Language: Luau
Description: Luau (lowercase u, /ˈlu.aʊ/) is a fast, small, safe, gradually typed embeddable scripting language derived from Lua.
Author: Andrew Fedorov <dmmdrs@mail.ru>
Contributors: Robloxian Demo <robloxiandemo@gmail.com>
Category: common, scripting
Website: https://luau-lang.org/
*/

export default function (hljs) {
  const OPENING_LONG_BRACKET = '\\[=*\\[';
  const CLOSING_LONG_BRACKET = '\\]=*\\]';
  const INTERPOLATION_OPEN = '\\`\\{';
  const INTERPOLATION_CLOSE = '\\}\\`';

  const LONG_BRACKETS = {
    begin: OPENING_LONG_BRACKET,
    end: CLOSING_LONG_BRACKET,
    contains: ['self']
  };

  const COMMENTS = [
    hljs.COMMENT('--(?!' + OPENING_LONG_BRACKET + ')', '$'),
    hljs.COMMENT('--' + OPENING_LONG_BRACKET, CLOSING_LONG_BRACKET, {
      contains: [LONG_BRACKETS],
      relevance: 10
    })
  ];

  const BUILT_IN =
    // Lua metatags and globals:
    '_G _VERSION __index __newindex __mode __call __metatable __tostring __len ' +
    '__gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert ' +
    // New in Luau (metatags -> globals)
    '__idiv __iter newproxy rawlen ' +
    // Standard methods and properties:
    'collectgarbage error getfenv getmetatable ipairs loadstring ' +
    'module next pairs pcall print rawequal rawget rawset require select setfenv ' +
    'setmetatable tonumber tostring type unpack xpcall self ' +
    // Library methods and properties (one line per library):
    'coroutine resume yield status wrap create running ' +
    'debug traceback ' +
    'math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan ' +
    'os date difftime time clock ' +
    'string sub upper len rep find match char gmatch reverse byte format gsub lower ' +
    'table insert getn foreachi maxn foreach concat sort remove';

  return {
    name: 'Luau',
    keywords: {
      $pattern: hljs.UNDERSCORE_IDENT_RE,
      literal: 'true false nil',
      keyword:
        'and break do else elseif end for if in local not or repeat return then until while',
      built_in: BUILT_IN
    },
    contains: COMMENTS.concat([
      {
        className: 'function',
        beginKeywords: 'function',
        end: '\\)',
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
          }),
          {
            className: 'params',
            begin: '\\(',
            endsWithParent: true,
            contains: COMMENTS
          }
        ].concat(COMMENTS)
      },
      hljs.C_NUMBER_MODE,
      {
        className: 'string',
        begin: '`',
        end: '`',
        contains: [
          {
            className: 'string-interpolation',
            begin: INTERPOLATION_OPEN,
            end: INTERPOLATION_CLOSE,
            contains: ['subst']
          }
        ]
      }
    ])
  };
}
