function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e = m2[i2];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n2, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
const alarms = {
  onAlarm: {
    type: "event",
    name: "onAlarm",
    parameters: [
      {
        name: "alarm",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  create: {
    type: "function",
    name: "create",
    parameters: [
      {
        name: "name",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "alarmInfo",
        optional: false,
        length: 0
      }
    ]
  },
  get: {
    type: "function",
    name: "get",
    parameters: [
      {
        name: "name",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getAll: {
    type: "function",
    name: "getAll",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  clear: {
    type: "function",
    name: "clear",
    parameters: [
      {
        name: "name",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  clearAll: {
    type: "function",
    name: "clearAll",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  }
};
const bookmarks = {
  onCreated: {
    type: "event",
    name: "onCreated",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "bookmark",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onRemoved: {
    type: "event",
    name: "onRemoved",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "removeInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onChanged: {
    type: "event",
    name: "onChanged",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "changeInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onMoved: {
    type: "event",
    name: "onMoved",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "moveInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onChildrenReordered: {
    type: "event",
    name: "onChildrenReordered",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "reorderInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onImportBegan: {
    type: "event",
    name: "onImportBegan",
    parameters: [],
    rules: false
  },
  onImportEnded: {
    type: "event",
    name: "onImportEnded",
    parameters: [],
    rules: false
  },
  get: {
    type: "function",
    name: "get",
    parameters: [
      {
        name: "idOrIdList",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getChildren: {
    type: "function",
    name: "getChildren",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getRecent: {
    type: "function",
    name: "getRecent",
    parameters: [
      {
        name: "numberOfItems",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getTree: {
    type: "function",
    name: "getTree",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getSubTree: {
    type: "function",
    name: "getSubTree",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  search: {
    type: "function",
    name: "search",
    parameters: [
      {
        name: "query",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  create: {
    type: "function",
    name: "create",
    parameters: [
      {
        name: "bookmark",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  move: {
    type: "function",
    name: "move",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "destination",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  update: {
    type: "function",
    name: "update",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "changes",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  remove: {
    type: "function",
    name: "remove",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeTree: {
    type: "function",
    name: "removeTree",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  "import": {
    type: "function",
    name: "import",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  "export": {
    type: "function",
    name: "export",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: {
    type: "property",
    name: "MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE",
    deprecated: "Bookmark write operations are no longer limited by Chrome.",
    value: 1e6
  },
  MAX_WRITE_OPERATIONS_PER_HOUR: {
    type: "property",
    name: "MAX_WRITE_OPERATIONS_PER_HOUR",
    deprecated: "Bookmark write operations are no longer limited by Chrome.",
    value: 1e6
  }
};
const browserAction = {
  onClicked: {
    type: "event",
    name: "onClicked",
    parameters: [
      {
        name: "tab",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  setTitle: {
    type: "function",
    name: "setTitle",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      }
    ]
  },
  getTitle: {
    type: "function",
    name: "getTitle",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  setIcon: {
    type: "function",
    name: "setIcon",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  setPopup: {
    type: "function",
    name: "setPopup",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      }
    ]
  },
  getPopup: {
    type: "function",
    name: "getPopup",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  setBadgeText: {
    type: "function",
    name: "setBadgeText",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      }
    ]
  },
  getBadgeText: {
    type: "function",
    name: "getBadgeText",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  setBadgeBackgroundColor: {
    type: "function",
    name: "setBadgeBackgroundColor",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      }
    ]
  },
  getBadgeBackgroundColor: {
    type: "function",
    name: "getBadgeBackgroundColor",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  enable: {
    type: "function",
    name: "enable",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      }
    ]
  },
  disable: {
    type: "function",
    name: "disable",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      }
    ]
  },
  openPopup: {
    type: "function",
    name: "openPopup",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const browsingData = {
  settings: {
    type: "function",
    name: "settings",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  remove: {
    type: "function",
    name: "remove",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "dataToRemove",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeAppcache: {
    type: "function",
    name: "removeAppcache",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeCache: {
    type: "function",
    name: "removeCache",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeCookies: {
    type: "function",
    name: "removeCookies",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeDownloads: {
    type: "function",
    name: "removeDownloads",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeFileSystems: {
    type: "function",
    name: "removeFileSystems",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeFormData: {
    type: "function",
    name: "removeFormData",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeHistory: {
    type: "function",
    name: "removeHistory",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeIndexedDB: {
    type: "function",
    name: "removeIndexedDB",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeLocalStorage: {
    type: "function",
    name: "removeLocalStorage",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removePluginData: {
    type: "function",
    name: "removePluginData",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removePasswords: {
    type: "function",
    name: "removePasswords",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeWebSQL: {
    type: "function",
    name: "removeWebSQL",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  }
};
const commands = {
  onCommand: {
    type: "event",
    name: "onCommand",
    parameters: [
      {
        name: "command",
        optional: false,
        parameters: 0,
        type: "string"
      }
    ],
    rules: false
  },
  getAll: {
    type: "function",
    name: "getAll",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  }
};
const contentSettings = {
  automaticDownloads: {
    type: "property",
    name: "automaticDownloads",
    value: [
      "automatic-downloads",
      {
        $ref: "MultipleAutomaticDownloadsContentSetting"
      }
    ]
  },
  camera: {
    type: "property",
    name: "camera",
    value: [
      "media-stream-camera",
      {
        $ref: "CameraContentSetting"
      }
    ]
  },
  cookies: {
    type: "property",
    name: "cookies",
    value: [
      "cookies",
      {
        $ref: "CookiesContentSetting"
      }
    ]
  },
  fullscreen: {
    type: "property",
    name: "fullscreen",
    value: [
      "fullscreen",
      {
        $ref: "FullscreenContentSetting"
      }
    ]
  },
  images: {
    type: "property",
    name: "images",
    value: [
      "images",
      {
        $ref: "ImagesContentSetting"
      }
    ]
  },
  javascript: {
    type: "property",
    name: "javascript",
    value: [
      "javascript",
      {
        $ref: "JavascriptContentSetting"
      }
    ]
  },
  location: {
    type: "property",
    name: "location",
    value: [
      "geolocation",
      {
        $ref: "LocationContentSetting"
      }
    ]
  },
  microphone: {
    type: "property",
    name: "microphone",
    value: [
      "media-stream-mic",
      {
        $ref: "MicrophoneContentSetting"
      }
    ]
  },
  mouselock: {
    type: "property",
    name: "mouselock",
    value: [
      "mouselock",
      {
        $ref: "MouselockContentSetting"
      }
    ]
  },
  notifications: {
    type: "property",
    name: "notifications",
    value: [
      "notifications",
      {
        $ref: "NotificationsContentSetting"
      }
    ]
  },
  plugins: {
    type: "property",
    name: "plugins",
    value: [
      "plugins",
      {
        $ref: "PluginsContentSetting"
      }
    ]
  },
  popups: {
    type: "property",
    name: "popups",
    value: [
      "popups",
      {
        $ref: "PopupsContentSetting"
      }
    ]
  },
  unsandboxedPlugins: {
    type: "property",
    name: "unsandboxedPlugins",
    value: [
      "ppapi-broker",
      {
        $ref: "PpapiBrokerContentSetting"
      }
    ]
  }
};
const contextMenus = {
  onClicked: {
    type: "event",
    name: "onClicked",
    parameters: [],
    rules: false
  },
  create: {
    type: "function",
    name: "create",
    parameters: [
      {
        name: "createProperties",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  update: {
    type: "function",
    name: "update",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0
      },
      {
        name: "updateProperties",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  remove: {
    type: "function",
    name: "remove",
    parameters: [
      {
        name: "menuItemId",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  removeAll: {
    type: "function",
    name: "removeAll",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  ACTION_MENU_TOP_LEVEL_LIMIT: {
    type: "property",
    name: "ACTION_MENU_TOP_LEVEL_LIMIT",
    value: 6
  }
};
const cookies = {
  onChanged: {
    type: "event",
    name: "onChanged",
    parameters: [
      {
        name: "changeInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  get: {
    type: "function",
    name: "get",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getAll: {
    type: "function",
    name: "getAll",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  set: {
    type: "function",
    name: "set",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  remove: {
    type: "function",
    name: "remove",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getAllCookieStores: {
    type: "function",
    name: "getAllCookieStores",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const declarativeContent = {
  onPageChanged: {
    type: "event",
    name: "onPageChanged",
    parameters: [],
    rules: false
  }
};
const desktopCapture = {
  chooseDesktopMedia: {
    type: "function",
    name: "chooseDesktopMedia",
    parameters: [
      {
        name: "sources",
        optional: false,
        length: 0,
        type: "array"
      },
      {
        name: "targetTab",
        optional: true,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  cancelChooseDesktopMedia: {
    type: "function",
    name: "cancelChooseDesktopMedia",
    parameters: [
      {
        name: "desktopMediaRequestId",
        optional: false,
        length: 0,
        type: "integer"
      }
    ]
  }
};
const devtools = {
  inspectedWindow: {
    onResourceAdded: {
      type: "event",
      name: "onResourceAdded",
      parameters: [
        {
          name: "resource",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    onResourceContentCommitted: {
      type: "event",
      name: "onResourceContentCommitted",
      parameters: [
        {
          name: "resource",
          optional: false,
          parameters: 0
        },
        {
          name: "content",
          optional: false,
          parameters: 0,
          type: "string"
        }
      ],
      rules: false
    },
    "eval": {
      type: "function",
      name: "eval",
      parameters: [
        {
          name: "expression",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "options",
          optional: true,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 2,
          type: "function"
        }
      ]
    },
    reload: {
      type: "function",
      name: "reload",
      parameters: [
        {
          name: "reloadOptions",
          optional: true,
          length: 0,
          type: "object"
        }
      ]
    },
    getResources: {
      type: "function",
      name: "getResources",
      parameters: [
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    },
    tabId: {
      type: "property",
      name: "tabId"
    }
  },
  network: {
    onRequestFinished: {
      type: "event",
      name: "onRequestFinished",
      parameters: [
        {
          name: "request",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    onNavigated: {
      type: "event",
      name: "onNavigated",
      parameters: [
        {
          name: "url",
          optional: false,
          parameters: 0,
          type: "string"
        }
      ],
      rules: false
    },
    getHAR: {
      type: "function",
      name: "getHAR",
      parameters: [
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    }
  },
  panels: {
    create: {
      type: "function",
      name: "create",
      parameters: [
        {
          name: "title",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "iconPath",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "pagePath",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    setOpenResourceHandler: {
      type: "function",
      name: "setOpenResourceHandler",
      parameters: [
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    openResource: {
      type: "function",
      name: "openResource",
      parameters: [
        {
          name: "url",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "lineNumber",
          optional: false,
          length: 0,
          type: "integer"
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    elements: {
      type: "property",
      name: "elements"
    },
    sources: {
      type: "property",
      name: "sources"
    }
  }
};
const dial = {
  onDeviceList: {
    type: "event",
    name: "onDeviceList",
    parameters: [
      {
        name: "result",
        optional: false,
        parameters: 0,
        type: "array"
      }
    ],
    rules: false
  },
  onError: {
    type: "event",
    name: "onError",
    parameters: [
      {
        name: "error",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  discoverNow: {
    type: "function",
    name: "discoverNow",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  fetchDeviceDescription: {
    type: "function",
    name: "fetchDeviceDescription",
    parameters: [
      {
        name: "deviceLabel",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const downloads = {
  onCreated: {
    type: "event",
    name: "onCreated",
    parameters: [
      {
        name: "downloadItem",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onErased: {
    type: "event",
    name: "onErased",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        parameters: 0,
        type: "integer"
      }
    ],
    rules: false
  },
  onChanged: {
    type: "event",
    name: "onChanged",
    parameters: [
      {
        name: "downloadDelta",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onDeterminingFilename: {
    type: "event",
    name: "onDeterminingFilename",
    parameters: [
      {
        name: "downloadItem",
        optional: false,
        parameters: 0
      },
      {
        name: "suggest",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  download: {
    type: "function",
    name: "download",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  search: {
    type: "function",
    name: "search",
    parameters: [
      {
        name: "query",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  pause: {
    type: "function",
    name: "pause",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  resume: {
    type: "function",
    name: "resume",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  cancel: {
    type: "function",
    name: "cancel",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getFileIcon: {
    type: "function",
    name: "getFileIcon",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "options",
        optional: true,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  open: {
    type: "function",
    name: "open",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      }
    ]
  },
  show: {
    type: "function",
    name: "show",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      }
    ]
  },
  showDefaultFolder: {
    type: "function",
    name: "showDefaultFolder",
    parameters: []
  },
  erase: {
    type: "function",
    name: "erase",
    parameters: [
      {
        name: "query",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  removeFile: {
    type: "function",
    name: "removeFile",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  acceptDanger: {
    type: "function",
    name: "acceptDanger",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  drag: {
    type: "function",
    name: "drag",
    parameters: [
      {
        name: "downloadId",
        optional: false,
        length: 0,
        type: "integer"
      }
    ]
  },
  setShelfEnabled: {
    type: "function",
    name: "setShelfEnabled",
    parameters: [
      {
        name: "enabled",
        optional: false,
        length: 0,
        type: "boolean"
      }
    ]
  }
};
const events = {};
const extension = {
  onRequest: {
    type: "event",
    name: "onRequest",
    deprecated: "Please use $(ref:runtime.onMessage).",
    parameters: [
      {
        name: "request",
        optional: true,
        parameters: 0,
        type: "any"
      },
      {
        name: "sender",
        optional: false,
        parameters: 0
      },
      {
        name: "sendResponse",
        optional: false,
        parameters: 0,
        type: "function"
      }
    ],
    rules: false
  },
  onRequestExternal: {
    type: "event",
    name: "onRequestExternal",
    deprecated: "Please use $(ref:runtime.onMessageExternal).",
    parameters: [
      {
        name: "request",
        optional: true,
        parameters: 0,
        type: "any"
      },
      {
        name: "sender",
        optional: false,
        parameters: 0
      },
      {
        name: "sendResponse",
        optional: false,
        parameters: 0,
        type: "function"
      }
    ],
    rules: false
  },
  sendRequest: {
    type: "function",
    name: "sendRequest",
    deprecated: "Please use $(ref:runtime.sendMessage).",
    parameters: [
      {
        name: "extensionId",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "request",
        optional: false,
        length: 0,
        type: "any"
      },
      {
        name: "responseCallback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getURL: {
    type: "function",
    name: "getURL",
    parameters: [
      {
        name: "path",
        optional: false,
        length: 0,
        type: "string"
      }
    ]
  },
  getViews: {
    type: "function",
    name: "getViews",
    parameters: [
      {
        name: "fetchProperties",
        optional: true,
        length: 0,
        type: "object"
      }
    ]
  },
  getBackgroundPage: {
    type: "function",
    name: "getBackgroundPage",
    parameters: []
  },
  getExtensionTabs: {
    type: "function",
    name: "getExtensionTabs",
    deprecated: 'Please use $(ref:extension.getViews) <code>{type: "tab"}</code>.',
    parameters: [
      {
        name: "windowId",
        optional: true,
        length: 0,
        type: "integer"
      }
    ]
  },
  isAllowedIncognitoAccess: {
    type: "function",
    name: "isAllowedIncognitoAccess",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  isAllowedFileSchemeAccess: {
    type: "function",
    name: "isAllowedFileSchemeAccess",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  setUpdateUrlData: {
    type: "function",
    name: "setUpdateUrlData",
    parameters: [
      {
        name: "data",
        optional: false,
        length: 0,
        type: "string"
      }
    ]
  },
  inIncognitoContext: {
    type: "property",
    name: "inIncognitoContext"
  },
  lastError: {
    type: "property",
    name: "lastError",
    value: "%lastError%"
  }
};
const extensionTypes = {};
const fontSettings = {
  onFontChanged: {
    type: "event",
    name: "onFontChanged",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onDefaultFontSizeChanged: {
    type: "event",
    name: "onDefaultFontSizeChanged",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onDefaultFixedFontSizeChanged: {
    type: "event",
    name: "onDefaultFixedFontSizeChanged",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onMinimumFontSizeChanged: {
    type: "event",
    name: "onMinimumFontSizeChanged",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  clearFont: {
    type: "function",
    name: "clearFont",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getFont: {
    type: "function",
    name: "getFont",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  setFont: {
    type: "function",
    name: "setFont",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getFontList: {
    type: "function",
    name: "getFontList",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  clearDefaultFontSize: {
    type: "function",
    name: "clearDefaultFontSize",
    parameters: [
      {
        name: "details",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getDefaultFontSize: {
    type: "function",
    name: "getDefaultFontSize",
    parameters: [
      {
        name: "details",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  setDefaultFontSize: {
    type: "function",
    name: "setDefaultFontSize",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  clearDefaultFixedFontSize: {
    type: "function",
    name: "clearDefaultFixedFontSize",
    parameters: [
      {
        name: "details",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getDefaultFixedFontSize: {
    type: "function",
    name: "getDefaultFixedFontSize",
    parameters: [
      {
        name: "details",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  setDefaultFixedFontSize: {
    type: "function",
    name: "setDefaultFixedFontSize",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  clearMinimumFontSize: {
    type: "function",
    name: "clearMinimumFontSize",
    parameters: [
      {
        name: "details",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getMinimumFontSize: {
    type: "function",
    name: "getMinimumFontSize",
    parameters: [
      {
        name: "details",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  setMinimumFontSize: {
    type: "function",
    name: "setMinimumFontSize",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  }
};
const gcm = {
  onMessage: {
    type: "event",
    name: "onMessage",
    parameters: [
      {
        name: "message",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onMessagesDeleted: {
    type: "event",
    name: "onMessagesDeleted",
    parameters: [],
    rules: false
  },
  onSendError: {
    type: "event",
    name: "onSendError",
    parameters: [
      {
        name: "error",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  register: {
    type: "function",
    name: "register",
    parameters: [
      {
        name: "senderIds",
        optional: false,
        length: 0,
        type: "array"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  unregister: {
    type: "function",
    name: "unregister",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 0,
        type: "function"
      }
    ]
  },
  send: {
    type: "function",
    name: "send",
    parameters: [
      {
        name: "message",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  MAX_MESSAGE_SIZE: {
    type: "property",
    name: "MAX_MESSAGE_SIZE",
    value: 4096
  }
};
const history = {
  onVisited: {
    type: "event",
    name: "onVisited",
    parameters: [
      {
        name: "result",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onVisitRemoved: {
    type: "event",
    name: "onVisitRemoved",
    parameters: [
      {
        name: "removed",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  search: {
    type: "function",
    name: "search",
    parameters: [
      {
        name: "query",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getVisits: {
    type: "function",
    name: "getVisits",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  addUrl: {
    type: "function",
    name: "addUrl",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  deleteUrl: {
    type: "function",
    name: "deleteUrl",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  deleteRange: {
    type: "function",
    name: "deleteRange",
    parameters: [
      {
        name: "range",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 0,
        type: "function"
      }
    ]
  },
  deleteAll: {
    type: "function",
    name: "deleteAll",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 0,
        type: "function"
      }
    ]
  }
};
const i18n = {
  getAcceptLanguages: {
    type: "function",
    name: "getAcceptLanguages",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getMessage: {
    type: "function",
    name: "getMessage",
    parameters: [
      {
        name: "messageName",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "substitutions",
        optional: true,
        length: 0,
        type: "any"
      }
    ]
  },
  getUILanguage: {
    type: "function",
    name: "getUILanguage",
    parameters: []
  },
  detectLanguage: {
    type: "function",
    name: "detectLanguage",
    parameters: [
      {
        name: "text",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const identity$3 = {
  onSignInChanged: {
    type: "event",
    name: "onSignInChanged",
    parameters: [
      {
        name: "account",
        optional: false,
        parameters: 0
      },
      {
        name: "signedIn",
        optional: false,
        parameters: 0,
        type: "boolean"
      }
    ],
    rules: false
  },
  getAccounts: {
    type: "function",
    name: "getAccounts",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getAuthToken: {
    type: "function",
    name: "getAuthToken",
    parameters: [
      {
        name: "details",
        optional: true,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getProfileUserInfo: {
    type: "function",
    name: "getProfileUserInfo",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  removeCachedAuthToken: {
    type: "function",
    name: "removeCachedAuthToken",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  launchWebAuthFlow: {
    type: "function",
    name: "launchWebAuthFlow",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getRedirectURL: {
    type: "function",
    name: "getRedirectURL",
    parameters: [
      {
        name: "path",
        optional: true,
        length: 0,
        type: "string"
      }
    ]
  }
};
const idle = {
  onStateChanged: {
    type: "event",
    name: "onStateChanged",
    parameters: [
      {
        name: "newState",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  queryState: {
    type: "function",
    name: "queryState",
    parameters: [
      {
        name: "detectionIntervalInSeconds",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  setDetectionInterval: {
    type: "function",
    name: "setDetectionInterval",
    parameters: [
      {
        name: "intervalInSeconds",
        optional: false,
        length: 0,
        type: "integer"
      }
    ]
  }
};
const instanceID = {
  onTokenRefresh: {
    type: "event",
    name: "onTokenRefresh",
    parameters: [],
    rules: false
  },
  getID: {
    type: "function",
    name: "getID",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getCreationTime: {
    type: "function",
    name: "getCreationTime",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getToken: {
    type: "function",
    name: "getToken",
    parameters: [
      {
        name: "getTokenParams",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  deleteToken: {
    type: "function",
    name: "deleteToken",
    parameters: [
      {
        name: "deleteTokenParams",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 0,
        type: "function"
      }
    ]
  },
  deleteID: {
    type: "function",
    name: "deleteID",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 0,
        type: "function"
      }
    ]
  }
};
const management = {
  onInstalled: {
    type: "event",
    name: "onInstalled",
    parameters: [
      {
        name: "info",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onUninstalled: {
    type: "event",
    name: "onUninstalled",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      }
    ],
    rules: false
  },
  onEnabled: {
    type: "event",
    name: "onEnabled",
    parameters: [
      {
        name: "info",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onDisabled: {
    type: "event",
    name: "onDisabled",
    parameters: [
      {
        name: "info",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  getAll: {
    type: "function",
    name: "getAll",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  get: {
    type: "function",
    name: "get",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getSelf: {
    type: "function",
    name: "getSelf",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getPermissionWarningsById: {
    type: "function",
    name: "getPermissionWarningsById",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getPermissionWarningsByManifest: {
    type: "function",
    name: "getPermissionWarningsByManifest",
    parameters: [
      {
        name: "manifestStr",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  setEnabled: {
    type: "function",
    name: "setEnabled",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "enabled",
        optional: false,
        length: 0,
        type: "boolean"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  uninstall: {
    type: "function",
    name: "uninstall",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "options",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  uninstallSelf: {
    type: "function",
    name: "uninstallSelf",
    parameters: [
      {
        name: "options",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  launchApp: {
    type: "function",
    name: "launchApp",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  createAppShortcut: {
    type: "function",
    name: "createAppShortcut",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  setLaunchType: {
    type: "function",
    name: "setLaunchType",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "launchType",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  generateAppForLink: {
    type: "function",
    name: "generateAppForLink",
    parameters: [
      {
        name: "url",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "title",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  }
};
const notifications = {
  onClosed: {
    type: "event",
    name: "onClosed",
    parameters: [
      {
        name: "notificationId",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "byUser",
        optional: false,
        parameters: 0,
        type: "boolean"
      }
    ],
    rules: false
  },
  onClicked: {
    type: "event",
    name: "onClicked",
    parameters: [
      {
        name: "notificationId",
        optional: false,
        parameters: 0,
        type: "string"
      }
    ],
    rules: false
  },
  onButtonClicked: {
    type: "event",
    name: "onButtonClicked",
    parameters: [
      {
        name: "notificationId",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "buttonIndex",
        optional: false,
        parameters: 0,
        type: "integer"
      }
    ],
    rules: false
  },
  onPermissionLevelChanged: {
    type: "event",
    name: "onPermissionLevelChanged",
    parameters: [
      {
        name: "level",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onShowSettings: {
    type: "event",
    name: "onShowSettings",
    parameters: [],
    rules: false
  },
  create: {
    type: "function",
    name: "create",
    parameters: [
      {
        name: "notificationId",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  update: {
    type: "function",
    name: "update",
    parameters: [
      {
        name: "notificationId",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  clear: {
    type: "function",
    name: "clear",
    parameters: [
      {
        name: "notificationId",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getAll: {
    type: "function",
    name: "getAll",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getPermissionLevel: {
    type: "function",
    name: "getPermissionLevel",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const omnibox = {
  onInputStarted: {
    type: "event",
    name: "onInputStarted",
    parameters: [],
    rules: false
  },
  onInputChanged: {
    type: "event",
    name: "onInputChanged",
    parameters: [
      {
        name: "text",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "suggest",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onInputEntered: {
    type: "event",
    name: "onInputEntered",
    parameters: [
      {
        name: "text",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "disposition",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onInputCancelled: {
    type: "event",
    name: "onInputCancelled",
    parameters: [],
    rules: false
  },
  sendSuggestions: {
    type: "function",
    name: "sendSuggestions",
    parameters: [
      {
        name: "requestId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "suggestResults",
        optional: false,
        length: 0,
        type: "array"
      }
    ]
  },
  setDefaultSuggestion: {
    type: "function",
    name: "setDefaultSuggestion",
    parameters: [
      {
        name: "suggestion",
        optional: false,
        length: 0
      }
    ]
  }
};
const pageAction = {
  onClicked: {
    type: "event",
    name: "onClicked",
    parameters: [
      {
        name: "tab",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  show: {
    type: "function",
    name: "show",
    parameters: [
      {
        name: "tabId",
        optional: false,
        length: 0,
        type: "integer"
      }
    ]
  },
  hide: {
    type: "function",
    name: "hide",
    parameters: [
      {
        name: "tabId",
        optional: false,
        length: 0,
        type: "integer"
      }
    ]
  },
  setTitle: {
    type: "function",
    name: "setTitle",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      }
    ]
  },
  getTitle: {
    type: "function",
    name: "getTitle",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  setIcon: {
    type: "function",
    name: "setIcon",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  setPopup: {
    type: "function",
    name: "setPopup",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      }
    ]
  },
  getPopup: {
    type: "function",
    name: "getPopup",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const pageCapture = {
  saveAsMHTML: {
    type: "function",
    name: "saveAsMHTML",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const permissions = {
  onAdded: {
    type: "event",
    name: "onAdded",
    parameters: [
      {
        name: "permissions",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onRemoved: {
    type: "event",
    name: "onRemoved",
    parameters: [
      {
        name: "permissions",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  getAll: {
    type: "function",
    name: "getAll",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  contains: {
    type: "function",
    name: "contains",
    parameters: [
      {
        name: "permissions",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  request: {
    type: "function",
    name: "request",
    parameters: [
      {
        name: "permissions",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  remove: {
    type: "function",
    name: "remove",
    parameters: [
      {
        name: "permissions",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  }
};
const power = {
  requestKeepAwake: {
    type: "function",
    name: "requestKeepAwake",
    parameters: [
      {
        name: "level",
        optional: false,
        length: 0
      }
    ]
  },
  releaseKeepAwake: {
    type: "function",
    name: "releaseKeepAwake",
    parameters: []
  }
};
const printerProvider = {
  onGetPrintersRequested: {
    type: "event",
    name: "onGetPrintersRequested",
    parameters: [
      {
        name: "resultCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onGetUsbPrinterInfoRequested: {
    type: "event",
    name: "onGetUsbPrinterInfoRequested",
    parameters: [
      {
        name: "device",
        optional: false,
        parameters: 0
      },
      {
        name: "resultCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onGetCapabilityRequested: {
    type: "event",
    name: "onGetCapabilityRequested",
    parameters: [
      {
        name: "printerId",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "resultCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onPrintRequested: {
    type: "event",
    name: "onPrintRequested",
    parameters: [
      {
        name: "printJob",
        optional: false,
        parameters: 0
      },
      {
        name: "resultCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  }
};
const privacy = {
  network: {
    type: "property",
    name: "network",
    value: {}
  },
  services: {
    type: "property",
    name: "services",
    value: {}
  },
  websites: {
    type: "property",
    name: "websites",
    value: {}
  }
};
const proxy = {
  onProxyError: {
    type: "event",
    name: "onProxyError",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  settings: {
    type: "property",
    name: "settings",
    value: [
      "proxy",
      {
        $ref: "ProxyConfig"
      }
    ]
  }
};
const runtime = {
  onStartup: {
    type: "event",
    name: "onStartup",
    parameters: [],
    rules: false
  },
  onInstalled: {
    type: "event",
    name: "onInstalled",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onSuspend: {
    type: "event",
    name: "onSuspend",
    parameters: [],
    rules: false
  },
  onSuspendCanceled: {
    type: "event",
    name: "onSuspendCanceled",
    parameters: [],
    rules: false
  },
  onUpdateAvailable: {
    type: "event",
    name: "onUpdateAvailable",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onBrowserUpdateAvailable: {
    type: "event",
    name: "onBrowserUpdateAvailable",
    deprecated: "Please use $(ref:runtime.onRestartRequired).",
    parameters: [],
    rules: false
  },
  onConnect: {
    type: "event",
    name: "onConnect",
    parameters: [
      {
        name: "port",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onConnectExternal: {
    type: "event",
    name: "onConnectExternal",
    parameters: [
      {
        name: "port",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onMessage: {
    type: "event",
    name: "onMessage",
    parameters: [
      {
        name: "message",
        optional: true,
        parameters: 0,
        type: "any"
      },
      {
        name: "sender",
        optional: false,
        parameters: 0
      },
      {
        name: "sendResponse",
        optional: false,
        parameters: 0,
        type: "function"
      }
    ],
    rules: false
  },
  onMessageExternal: {
    type: "event",
    name: "onMessageExternal",
    parameters: [
      {
        name: "message",
        optional: true,
        parameters: 0,
        type: "any"
      },
      {
        name: "sender",
        optional: false,
        parameters: 0
      },
      {
        name: "sendResponse",
        optional: false,
        parameters: 0,
        type: "function"
      }
    ],
    rules: false
  },
  onRestartRequired: {
    type: "event",
    name: "onRestartRequired",
    parameters: [
      {
        name: "reason",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  getBackgroundPage: {
    type: "function",
    name: "getBackgroundPage",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  openOptionsPage: {
    type: "function",
    name: "openOptionsPage",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getManifest: {
    type: "function",
    name: "getManifest",
    parameters: []
  },
  getURL: {
    type: "function",
    name: "getURL",
    parameters: [
      {
        name: "path",
        optional: false,
        length: 0,
        type: "string"
      }
    ]
  },
  setUninstallURL: {
    type: "function",
    name: "setUninstallURL",
    parameters: [
      {
        name: "url",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  reload: {
    type: "function",
    name: "reload",
    parameters: []
  },
  requestUpdateCheck: {
    type: "function",
    name: "requestUpdateCheck",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 2,
        type: "function"
      }
    ]
  },
  restart: {
    type: "function",
    name: "restart",
    parameters: []
  },
  restartAfterDelay: {
    type: "function",
    name: "restartAfterDelay",
    parameters: [
      {
        name: "seconds",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  connect: {
    type: "function",
    name: "connect",
    parameters: [
      {
        name: "extensionId",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "connectInfo",
        optional: true,
        length: 0,
        type: "object"
      }
    ]
  },
  connectNative: {
    type: "function",
    name: "connectNative",
    parameters: [
      {
        name: "application",
        optional: false,
        length: 0,
        type: "string"
      }
    ]
  },
  sendMessage: {
    type: "function",
    name: "sendMessage",
    parameters: [
      {
        name: "extensionId",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "message",
        optional: false,
        length: 0,
        type: "any"
      },
      {
        name: "options",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "responseCallback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  sendNativeMessage: {
    type: "function",
    name: "sendNativeMessage",
    parameters: [
      {
        name: "application",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "message",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "responseCallback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getPlatformInfo: {
    type: "function",
    name: "getPlatformInfo",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getPackageDirectoryEntry: {
    type: "function",
    name: "getPackageDirectoryEntry",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  id: {
    type: "property",
    name: "id"
  },
  lastError: {
    type: "property",
    name: "lastError"
  }
};
const sessions = {
  onChanged: {
    type: "event",
    name: "onChanged",
    parameters: [],
    rules: false
  },
  getRecentlyClosed: {
    type: "function",
    name: "getRecentlyClosed",
    parameters: [
      {
        name: "filter",
        optional: true,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getDevices: {
    type: "function",
    name: "getDevices",
    parameters: [
      {
        name: "filter",
        optional: true,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  restore: {
    type: "function",
    name: "restore",
    parameters: [
      {
        name: "sessionId",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  MAX_SESSION_RESULTS: {
    type: "property",
    name: "MAX_SESSION_RESULTS",
    value: 25
  }
};
const storage = {
  onChanged: {
    type: "event",
    name: "onChanged",
    parameters: [
      {
        name: "changes",
        optional: false,
        parameters: 0,
        type: "object"
      },
      {
        name: "areaName",
        optional: false,
        parameters: 0,
        type: "string"
      }
    ],
    rules: false
  },
  local: {
    type: "property",
    name: "local",
    value: "%storage%"
  },
  managed: {
    type: "property",
    name: "managed",
    value: "%storage%"
  },
  sync: {
    type: "property",
    name: "sync",
    value: "%storage%"
  }
};
const system = {
  cpu: {
    getInfo: {
      type: "function",
      name: "getInfo",
      parameters: [
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    }
  },
  memory: {
    getInfo: {
      type: "function",
      name: "getInfo",
      parameters: [
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    }
  },
  storage: {
    onAttached: {
      type: "event",
      name: "onAttached",
      parameters: [
        {
          name: "info",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    onDetached: {
      type: "event",
      name: "onDetached",
      parameters: [
        {
          name: "id",
          optional: false,
          parameters: 0,
          type: "string"
        }
      ],
      rules: false
    },
    getInfo: {
      type: "function",
      name: "getInfo",
      parameters: [
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    },
    ejectDevice: {
      type: "function",
      name: "ejectDevice",
      parameters: [
        {
          name: "id",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    },
    getAvailableCapacity: {
      type: "function",
      name: "getAvailableCapacity",
      parameters: [
        {
          name: "id",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    }
  }
};
const tabCapture = {
  onStatusChanged: {
    type: "event",
    name: "onStatusChanged",
    parameters: [
      {
        name: "info",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  capture: {
    type: "function",
    name: "capture",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getCapturedTabs: {
    type: "function",
    name: "getCapturedTabs",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  captureOffscreenTab: {
    type: "function",
    name: "captureOffscreenTab",
    parameters: [
      {
        name: "startUrl",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const tabs = {
  onCreated: {
    type: "event",
    name: "onCreated",
    parameters: [
      {
        name: "tab",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onUpdated: {
    type: "event",
    name: "onUpdated",
    parameters: [
      {
        name: "tabId",
        optional: false,
        parameters: 0,
        type: "integer"
      },
      {
        name: "changeInfo",
        optional: false,
        parameters: 0,
        type: "object"
      },
      {
        name: "tab",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onMoved: {
    type: "event",
    name: "onMoved",
    parameters: [
      {
        name: "tabId",
        optional: false,
        parameters: 0,
        type: "integer"
      },
      {
        name: "moveInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onSelectionChanged: {
    type: "event",
    name: "onSelectionChanged",
    deprecated: "Please use $(ref:tabs.onActivated).",
    parameters: [
      {
        name: "tabId",
        optional: false,
        parameters: 0,
        type: "integer"
      },
      {
        name: "selectInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onActiveChanged: {
    type: "event",
    name: "onActiveChanged",
    deprecated: "Please use $(ref:tabs.onActivated).",
    parameters: [
      {
        name: "tabId",
        optional: false,
        parameters: 0,
        type: "integer"
      },
      {
        name: "selectInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onActivated: {
    type: "event",
    name: "onActivated",
    parameters: [
      {
        name: "activeInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onHighlightChanged: {
    type: "event",
    name: "onHighlightChanged",
    deprecated: "Please use $(ref:tabs.onHighlighted).",
    parameters: [
      {
        name: "selectInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onHighlighted: {
    type: "event",
    name: "onHighlighted",
    parameters: [
      {
        name: "highlightInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onDetached: {
    type: "event",
    name: "onDetached",
    parameters: [
      {
        name: "tabId",
        optional: false,
        parameters: 0,
        type: "integer"
      },
      {
        name: "detachInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onAttached: {
    type: "event",
    name: "onAttached",
    parameters: [
      {
        name: "tabId",
        optional: false,
        parameters: 0,
        type: "integer"
      },
      {
        name: "attachInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onRemoved: {
    type: "event",
    name: "onRemoved",
    parameters: [
      {
        name: "tabId",
        optional: false,
        parameters: 0,
        type: "integer"
      },
      {
        name: "removeInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onReplaced: {
    type: "event",
    name: "onReplaced",
    parameters: [
      {
        name: "addedTabId",
        optional: false,
        parameters: 0,
        type: "integer"
      },
      {
        name: "removedTabId",
        optional: false,
        parameters: 0,
        type: "integer"
      }
    ],
    rules: false
  },
  onZoomChange: {
    type: "event",
    name: "onZoomChange",
    parameters: [
      {
        name: "ZoomChangeInfo",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  get: {
    type: "function",
    name: "get",
    parameters: [
      {
        name: "tabId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getCurrent: {
    type: "function",
    name: "getCurrent",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  connect: {
    type: "function",
    name: "connect",
    parameters: [
      {
        name: "tabId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "connectInfo",
        optional: true,
        length: 0,
        type: "object"
      }
    ]
  },
  sendRequest: {
    type: "function",
    name: "sendRequest",
    deprecated: "Please use $(ref:runtime.sendMessage).",
    parameters: [
      {
        name: "tabId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "request",
        optional: false,
        length: 0,
        type: "any"
      },
      {
        name: "responseCallback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  sendMessage: {
    type: "function",
    name: "sendMessage",
    parameters: [
      {
        name: "tabId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "message",
        optional: false,
        length: 0,
        type: "any"
      },
      {
        name: "options",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "responseCallback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getSelected: {
    type: "function",
    name: "getSelected",
    deprecated: "Please use $(ref:tabs.query) <code>{active: true}</code>.",
    parameters: [
      {
        name: "windowId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getAllInWindow: {
    type: "function",
    name: "getAllInWindow",
    deprecated: "Please use $(ref:tabs.query) <code>{windowId: windowId}</code>.",
    parameters: [
      {
        name: "windowId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  create: {
    type: "function",
    name: "create",
    parameters: [
      {
        name: "createProperties",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  duplicate: {
    type: "function",
    name: "duplicate",
    parameters: [
      {
        name: "tabId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  query: {
    type: "function",
    name: "query",
    parameters: [
      {
        name: "queryInfo",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  highlight: {
    type: "function",
    name: "highlight",
    parameters: [
      {
        name: "highlightInfo",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  update: {
    type: "function",
    name: "update",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "updateProperties",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  move: {
    type: "function",
    name: "move",
    parameters: [
      {
        name: "tabIds",
        optional: false,
        length: 0
      },
      {
        name: "moveProperties",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  reload: {
    type: "function",
    name: "reload",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "reloadProperties",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  remove: {
    type: "function",
    name: "remove",
    parameters: [
      {
        name: "tabIds",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  detectLanguage: {
    type: "function",
    name: "detectLanguage",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  captureVisibleTab: {
    type: "function",
    name: "captureVisibleTab",
    parameters: [
      {
        name: "windowId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "options",
        optional: true,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  executeScript: {
    type: "function",
    name: "executeScript",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "details",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  insertCSS: {
    type: "function",
    name: "insertCSS",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "details",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  setZoom: {
    type: "function",
    name: "setZoom",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "zoomFactor",
        optional: false,
        length: 0,
        type: "number"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getZoom: {
    type: "function",
    name: "getZoom",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  setZoomSettings: {
    type: "function",
    name: "setZoomSettings",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "zoomSettings",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getZoomSettings: {
    type: "function",
    name: "getZoomSettings",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  discard: {
    type: "function",
    name: "discard",
    parameters: [
      {
        name: "tabId",
        optional: true,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  TAB_ID_NONE: {
    type: "property",
    name: "TAB_ID_NONE",
    value: -1
  }
};
const topSites = {
  get: {
    type: "function",
    name: "get",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const tts = {
  onEvent: {
    type: "event",
    name: "onEvent",
    parameters: [
      {
        name: "event",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  speak: {
    type: "function",
    name: "speak",
    parameters: [
      {
        name: "utterance",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "options",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  stop: {
    type: "function",
    name: "stop",
    parameters: []
  },
  pause: {
    type: "function",
    name: "pause",
    parameters: []
  },
  resume: {
    type: "function",
    name: "resume",
    parameters: []
  },
  isSpeaking: {
    type: "function",
    name: "isSpeaking",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  getVoices: {
    type: "function",
    name: "getVoices",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  }
};
const ttsEngine = {
  onSpeak: {
    type: "event",
    name: "onSpeak",
    parameters: [
      {
        name: "utterance",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "options",
        optional: false,
        parameters: 0,
        type: "object"
      },
      {
        name: "sendTtsEvent",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onStop: {
    type: "event",
    name: "onStop",
    parameters: [],
    rules: false
  },
  onPause: {
    type: "event",
    name: "onPause",
    parameters: [],
    rules: false
  },
  onResume: {
    type: "event",
    name: "onResume",
    parameters: [],
    rules: false
  },
  sendTtsEvent: {
    type: "function",
    name: "sendTtsEvent",
    parameters: [
      {
        name: "requestId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "event",
        optional: false,
        length: 0
      }
    ]
  }
};
const types$1 = {};
const webNavigation = {
  onBeforeNavigate: {
    type: "event",
    name: "onBeforeNavigate",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onCommitted: {
    type: "event",
    name: "onCommitted",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onDOMContentLoaded: {
    type: "event",
    name: "onDOMContentLoaded",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onCompleted: {
    type: "event",
    name: "onCompleted",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onErrorOccurred: {
    type: "event",
    name: "onErrorOccurred",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onCreatedNavigationTarget: {
    type: "event",
    name: "onCreatedNavigationTarget",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onReferenceFragmentUpdated: {
    type: "event",
    name: "onReferenceFragmentUpdated",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onTabReplaced: {
    type: "event",
    name: "onTabReplaced",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onHistoryStateUpdated: {
    type: "event",
    name: "onHistoryStateUpdated",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  getFrame: {
    type: "function",
    name: "getFrame",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getAllFrames: {
    type: "function",
    name: "getAllFrames",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const webRequest = {
  onBeforeRequest: {
    type: "event",
    name: "onBeforeRequest",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onBeforeSendHeaders: {
    type: "event",
    name: "onBeforeSendHeaders",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onSendHeaders: {
    type: "event",
    name: "onSendHeaders",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onHeadersReceived: {
    type: "event",
    name: "onHeadersReceived",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onAuthRequired: {
    type: "event",
    name: "onAuthRequired",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onResponseStarted: {
    type: "event",
    name: "onResponseStarted",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onBeforeRedirect: {
    type: "event",
    name: "onBeforeRedirect",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onCompleted: {
    type: "event",
    name: "onCompleted",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onErrorOccurred: {
    type: "event",
    name: "onErrorOccurred",
    parameters: [
      {
        name: "details",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  handlerBehaviorChanged: {
    type: "function",
    name: "handlerBehaviorChanged",
    parameters: [
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: {
    type: "property",
    name: "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES",
    value: 20
  }
};
const webstore = {
  onInstallStageChanged: {
    type: "event",
    name: "onInstallStageChanged",
    parameters: [
      {
        name: "stage",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onDownloadProgress: {
    type: "event",
    name: "onDownloadProgress",
    parameters: [
      {
        name: "percentDownloaded",
        optional: false,
        parameters: 0,
        type: "number"
      }
    ],
    rules: false
  },
  install: {
    type: "function",
    name: "install",
    parameters: [
      {
        name: "url",
        optional: true,
        length: 0,
        type: "string"
      },
      {
        name: "successCallback",
        optional: true,
        length: 0,
        type: "function"
      },
      {
        name: "failureCallback",
        optional: true,
        length: 2,
        type: "function"
      }
    ]
  }
};
const windows = {
  onCreated: {
    type: "event",
    name: "onCreated",
    parameters: [
      {
        name: "window",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onRemoved: {
    type: "event",
    name: "onRemoved",
    parameters: [
      {
        name: "windowId",
        optional: false,
        parameters: 0,
        type: "integer"
      }
    ],
    rules: false
  },
  onFocusChanged: {
    type: "event",
    name: "onFocusChanged",
    parameters: [
      {
        name: "windowId",
        optional: false,
        parameters: 0,
        type: "integer"
      }
    ],
    rules: false
  },
  get: {
    type: "function",
    name: "get",
    parameters: [
      {
        name: "windowId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "getInfo",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getCurrent: {
    type: "function",
    name: "getCurrent",
    parameters: [
      {
        name: "getInfo",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getLastFocused: {
    type: "function",
    name: "getLastFocused",
    parameters: [
      {
        name: "getInfo",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getAll: {
    type: "function",
    name: "getAll",
    parameters: [
      {
        name: "getInfo",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  create: {
    type: "function",
    name: "create",
    parameters: [
      {
        name: "createData",
        optional: true,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  update: {
    type: "function",
    name: "update",
    parameters: [
      {
        name: "windowId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "updateInfo",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: true,
        length: 1,
        type: "function"
      }
    ]
  },
  remove: {
    type: "function",
    name: "remove",
    parameters: [
      {
        name: "windowId",
        optional: false,
        length: 0,
        type: "integer"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  WINDOW_ID_CURRENT: {
    type: "property",
    name: "WINDOW_ID_CURRENT",
    value: -2
  },
  WINDOW_ID_NONE: {
    type: "property",
    name: "WINDOW_ID_NONE",
    value: -1
  }
};
const accessibilityFeatures = {
  animationPolicy: {
    type: "property",
    name: "animationPolicy",
    value: [
      "animationPolicy",
      {
        "enum": [
          {
            description: "Images are allowed to animate.",
            name: "allowed"
          },
          {
            description: "Images are animated once.",
            name: "once"
          },
          {
            description: "Images are not animated.",
            name: "none"
          }
        ],
        type: "string"
      }
    ]
  },
  autoclick: {
    type: "property",
    name: "autoclick",
    value: [
      "autoclick",
      {
        type: "boolean"
      }
    ]
  },
  caretHighlight: {
    type: "property",
    name: "caretHighlight",
    value: [
      "caretHighlight",
      {
        type: "boolean"
      }
    ]
  },
  cursorHighlight: {
    type: "property",
    name: "cursorHighlight",
    value: [
      "cursorHighlight",
      {
        type: "boolean"
      }
    ]
  },
  focusHighlight: {
    type: "property",
    name: "focusHighlight",
    value: [
      "focusHighlight",
      {
        type: "boolean"
      }
    ]
  },
  highContrast: {
    type: "property",
    name: "highContrast",
    value: [
      "highContrast",
      {
        type: "boolean"
      }
    ]
  },
  largeCursor: {
    type: "property",
    name: "largeCursor",
    value: [
      "largeCursor",
      {
        type: "boolean"
      }
    ]
  },
  screenMagnifier: {
    type: "property",
    name: "screenMagnifier",
    value: [
      "screenMagnifier",
      {
        type: "boolean"
      }
    ]
  },
  selectToSpeak: {
    type: "property",
    name: "selectToSpeak",
    value: [
      "selectToSpeak",
      {
        type: "boolean"
      }
    ]
  },
  spokenFeedback: {
    type: "property",
    name: "spokenFeedback",
    value: [
      "spokenFeedback",
      {
        type: "boolean"
      }
    ]
  },
  stickyKeys: {
    type: "property",
    name: "stickyKeys",
    value: [
      "stickyKeys",
      {
        type: "boolean"
      }
    ]
  },
  switchAccess: {
    type: "property",
    name: "switchAccess",
    value: [
      "switchAccess",
      {
        type: "boolean"
      }
    ]
  },
  virtualKeyboard: {
    type: "property",
    name: "virtualKeyboard",
    value: [
      "virtualKeyboard",
      {
        type: "boolean"
      }
    ]
  }
};
const certificateProvider = {
  onCertificatesRequested: {
    type: "event",
    name: "onCertificatesRequested",
    parameters: [
      {
        name: "reportCallback",
        optional: false,
        parameters: 2,
        type: "function"
      }
    ],
    rules: false
  },
  onSignDigestRequested: {
    type: "event",
    name: "onSignDigestRequested",
    parameters: [
      {
        name: "request",
        optional: false,
        parameters: 0
      },
      {
        name: "reportCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  }
};
const documentScan = {
  scan: {
    type: "function",
    name: "scan",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const enterprise = {
  deviceAttributes: {
    getDirectoryDeviceId: {
      type: "function",
      name: "getDirectoryDeviceId",
      parameters: [
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    }
  },
  platformKeys: {
    getTokens: {
      type: "function",
      name: "getTokens",
      parameters: [
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    },
    getCertificates: {
      type: "function",
      name: "getCertificates",
      parameters: [
        {
          name: "tokenId",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    },
    importCertificate: {
      type: "function",
      name: "importCertificate",
      parameters: [
        {
          name: "tokenId",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "certificate",
          optional: false,
          length: 0
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    removeCertificate: {
      type: "function",
      name: "removeCertificate",
      parameters: [
        {
          name: "tokenId",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "certificate",
          optional: false,
          length: 0
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    challengeMachineKey: {
      type: "function",
      name: "challengeMachineKey",
      parameters: [
        {
          name: "challenge",
          optional: false,
          length: 0
        },
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    },
    challengeUserKey: {
      type: "function",
      name: "challengeUserKey",
      parameters: [
        {
          name: "challenge",
          optional: false,
          length: 0
        },
        {
          name: "registerKey",
          optional: false,
          length: 0,
          type: "boolean"
        },
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    }
  }
};
const fileBrowserHandler = {
  onExecute: {
    type: "event",
    name: "onExecute",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "details",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  selectFile: {
    type: "function",
    name: "selectFile",
    parameters: [
      {
        name: "selectionParams",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const fileSystemProvider = {
  onUnmountRequested: {
    type: "event",
    name: "onUnmountRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onGetMetadataRequested: {
    type: "event",
    name: "onGetMetadataRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 1,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onGetActionsRequested: {
    type: "event",
    name: "onGetActionsRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 1,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onReadDirectoryRequested: {
    type: "event",
    name: "onReadDirectoryRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 2,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onOpenFileRequested: {
    type: "event",
    name: "onOpenFileRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onCloseFileRequested: {
    type: "event",
    name: "onCloseFileRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onReadFileRequested: {
    type: "event",
    name: "onReadFileRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 2,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onCreateDirectoryRequested: {
    type: "event",
    name: "onCreateDirectoryRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onDeleteEntryRequested: {
    type: "event",
    name: "onDeleteEntryRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onCreateFileRequested: {
    type: "event",
    name: "onCreateFileRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onCopyEntryRequested: {
    type: "event",
    name: "onCopyEntryRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onMoveEntryRequested: {
    type: "event",
    name: "onMoveEntryRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onTruncateRequested: {
    type: "event",
    name: "onTruncateRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onWriteFileRequested: {
    type: "event",
    name: "onWriteFileRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onAbortRequested: {
    type: "event",
    name: "onAbortRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onConfigureRequested: {
    type: "event",
    name: "onConfigureRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onMountRequested: {
    type: "event",
    name: "onMountRequested",
    parameters: [
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onAddWatcherRequested: {
    type: "event",
    name: "onAddWatcherRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onRemoveWatcherRequested: {
    type: "event",
    name: "onRemoveWatcherRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  onExecuteActionRequested: {
    type: "event",
    name: "onExecuteActionRequested",
    parameters: [
      {
        name: "options",
        optional: false,
        parameters: 0
      },
      {
        name: "successCallback",
        optional: false,
        parameters: 0,
        type: "function"
      },
      {
        name: "errorCallback",
        optional: false,
        parameters: 1,
        type: "function"
      }
    ],
    rules: false
  },
  mount: {
    type: "function",
    name: "mount",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  unmount: {
    type: "function",
    name: "unmount",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  getAll: {
    type: "function",
    name: "getAll",
    parameters: [
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  get: {
    type: "function",
    name: "get",
    parameters: [
      {
        name: "fileSystemId",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  notify: {
    type: "function",
    name: "notify",
    parameters: [
      {
        name: "options",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  }
};
const input = {
  ime: {
    onActivate: {
      type: "event",
      name: "onActivate",
      parameters: [
        {
          name: "engineID",
          optional: false,
          parameters: 0,
          type: "string"
        },
        {
          name: "screen",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    onDeactivated: {
      type: "event",
      name: "onDeactivated",
      parameters: [
        {
          name: "engineID",
          optional: false,
          parameters: 0,
          type: "string"
        }
      ],
      rules: false
    },
    onFocus: {
      type: "event",
      name: "onFocus",
      parameters: [
        {
          name: "context",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    onBlur: {
      type: "event",
      name: "onBlur",
      parameters: [
        {
          name: "contextID",
          optional: false,
          parameters: 0,
          type: "integer"
        }
      ],
      rules: false
    },
    onInputContextUpdate: {
      type: "event",
      name: "onInputContextUpdate",
      parameters: [
        {
          name: "context",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    onKeyEvent: {
      type: "event",
      name: "onKeyEvent",
      parameters: [
        {
          name: "engineID",
          optional: false,
          parameters: 0,
          type: "string"
        },
        {
          name: "keyData",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    onCandidateClicked: {
      type: "event",
      name: "onCandidateClicked",
      parameters: [
        {
          name: "engineID",
          optional: false,
          parameters: 0,
          type: "string"
        },
        {
          name: "candidateID",
          optional: false,
          parameters: 0,
          type: "integer"
        },
        {
          name: "button",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    onMenuItemActivated: {
      type: "event",
      name: "onMenuItemActivated",
      parameters: [
        {
          name: "engineID",
          optional: false,
          parameters: 0,
          type: "string"
        },
        {
          name: "name",
          optional: false,
          parameters: 0,
          type: "string"
        }
      ],
      rules: false
    },
    onSurroundingTextChanged: {
      type: "event",
      name: "onSurroundingTextChanged",
      parameters: [
        {
          name: "engineID",
          optional: false,
          parameters: 0,
          type: "string"
        },
        {
          name: "surroundingInfo",
          optional: false,
          parameters: 0,
          type: "object"
        }
      ],
      rules: false
    },
    onReset: {
      type: "event",
      name: "onReset",
      parameters: [
        {
          name: "engineID",
          optional: false,
          parameters: 0,
          type: "string"
        }
      ],
      rules: false
    },
    onCompositionBoundsChanged: {
      type: "event",
      name: "onCompositionBoundsChanged",
      parameters: [
        {
          name: "boundsList",
          optional: false,
          parameters: 0,
          type: "array"
        }
      ],
      rules: false
    },
    setComposition: {
      type: "function",
      name: "setComposition",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    clearComposition: {
      type: "function",
      name: "clearComposition",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    commitText: {
      type: "function",
      name: "commitText",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    sendKeyEvents: {
      type: "function",
      name: "sendKeyEvents",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    hideInputView: {
      type: "function",
      name: "hideInputView",
      parameters: []
    },
    setCandidateWindowProperties: {
      type: "function",
      name: "setCandidateWindowProperties",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    setCandidates: {
      type: "function",
      name: "setCandidates",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    setCursorPosition: {
      type: "function",
      name: "setCursorPosition",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    setMenuItems: {
      type: "function",
      name: "setMenuItems",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    updateMenuItems: {
      type: "function",
      name: "updateMenuItems",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    deleteSurroundingText: {
      type: "function",
      name: "deleteSurroundingText",
      parameters: [
        {
          name: "parameters",
          optional: false,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    keyEventHandled: {
      type: "function",
      name: "keyEventHandled",
      parameters: [
        {
          name: "requestId",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "response",
          optional: false,
          length: 0,
          type: "boolean"
        }
      ]
    },
    createWindow: {
      type: "function",
      name: "createWindow",
      parameters: [
        {
          name: "options",
          optional: false,
          length: 0
        },
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    },
    showWindow: {
      type: "function",
      name: "showWindow",
      parameters: [
        {
          name: "windowId",
          optional: false,
          length: 0,
          type: "integer"
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    hideWindow: {
      type: "function",
      name: "hideWindow",
      parameters: [
        {
          name: "windowId",
          optional: false,
          length: 0,
          type: "integer"
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    activate: {
      type: "function",
      name: "activate",
      parameters: [
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    deactivate: {
      type: "function",
      name: "deactivate",
      parameters: [
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    }
  }
};
const networking = {
  config: {
    onCaptivePortalDetected: {
      type: "event",
      name: "onCaptivePortalDetected",
      parameters: [
        {
          name: "networkInfo",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    setNetworkFilter: {
      type: "function",
      name: "setNetworkFilter",
      parameters: [
        {
          name: "networks",
          optional: false,
          length: 0,
          type: "array"
        },
        {
          name: "callback",
          optional: false,
          length: 0,
          type: "function"
        }
      ]
    },
    finishAuthentication: {
      type: "function",
      name: "finishAuthentication",
      parameters: [
        {
          name: "GUID",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "result",
          optional: false,
          length: 0
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    }
  }
};
const platformKeys = {
  selectClientCertificates: {
    type: "function",
    name: "selectClientCertificates",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  getKeyPair: {
    type: "function",
    name: "getKeyPair",
    parameters: [
      {
        name: "certificate",
        optional: false,
        length: 0
      },
      {
        name: "parameters",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 2,
        type: "function"
      }
    ]
  },
  subtleCrypto: {
    type: "function",
    name: "subtleCrypto",
    parameters: []
  },
  verifyTLSServerCertificate: {
    type: "function",
    name: "verifyTLSServerCertificate",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const vpnProvider = {
  onPlatformMessage: {
    type: "event",
    name: "onPlatformMessage",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "message",
        optional: false,
        parameters: 0
      },
      {
        name: "error",
        optional: false,
        parameters: 0,
        type: "string"
      }
    ],
    rules: false
  },
  onPacketReceived: {
    type: "event",
    name: "onPacketReceived",
    parameters: [
      {
        name: "data",
        optional: false,
        parameters: 0
      }
    ],
    rules: false
  },
  onConfigRemoved: {
    type: "event",
    name: "onConfigRemoved",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      }
    ],
    rules: false
  },
  onConfigCreated: {
    type: "event",
    name: "onConfigCreated",
    parameters: [
      {
        name: "id",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "name",
        optional: false,
        parameters: 0,
        type: "string"
      },
      {
        name: "data",
        optional: false,
        parameters: 0,
        type: "object"
      }
    ],
    rules: false
  },
  onUIEvent: {
    type: "event",
    name: "onUIEvent",
    parameters: [
      {
        name: "event",
        optional: false,
        parameters: 0
      },
      {
        name: "id",
        optional: true,
        parameters: 0,
        type: "string"
      }
    ],
    rules: false
  },
  createConfig: {
    type: "function",
    name: "createConfig",
    parameters: [
      {
        name: "name",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  },
  destroyConfig: {
    type: "function",
    name: "destroyConfig",
    parameters: [
      {
        name: "id",
        optional: false,
        length: 0,
        type: "string"
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  setParameters: {
    type: "function",
    name: "setParameters",
    parameters: [
      {
        name: "parameters",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: false,
        length: 0,
        type: "function"
      }
    ]
  },
  sendPacket: {
    type: "function",
    name: "sendPacket",
    parameters: [
      {
        name: "data",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  },
  notifyConnectionStateChanged: {
    type: "function",
    name: "notifyConnectionStateChanged",
    parameters: [
      {
        name: "state",
        optional: false,
        length: 0
      },
      {
        name: "callback",
        optional: true,
        length: 0,
        type: "function"
      }
    ]
  }
};
const wallpaper = {
  setWallpaper: {
    type: "function",
    name: "setWallpaper",
    parameters: [
      {
        name: "details",
        optional: false,
        length: 0,
        type: "object"
      },
      {
        name: "callback",
        optional: false,
        length: 1,
        type: "function"
      }
    ]
  }
};
const jestChromeSchema = {
  alarms,
  bookmarks,
  browserAction,
  browsingData,
  commands,
  contentSettings,
  contextMenus,
  cookies,
  "debugger": {
    onEvent: {
      type: "event",
      name: "onEvent",
      parameters: [
        {
          name: "source",
          optional: false,
          parameters: 0
        },
        {
          name: "method",
          optional: false,
          parameters: 0,
          type: "string"
        },
        {
          name: "params",
          optional: true,
          parameters: 0,
          type: "object"
        }
      ],
      rules: false
    },
    onDetach: {
      type: "event",
      name: "onDetach",
      parameters: [
        {
          name: "source",
          optional: false,
          parameters: 0
        },
        {
          name: "reason",
          optional: false,
          parameters: 0
        }
      ],
      rules: false
    },
    attach: {
      type: "function",
      name: "attach",
      parameters: [
        {
          name: "target",
          optional: false,
          length: 0
        },
        {
          name: "requiredVersion",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    detach: {
      type: "function",
      name: "detach",
      parameters: [
        {
          name: "target",
          optional: false,
          length: 0
        },
        {
          name: "callback",
          optional: true,
          length: 0,
          type: "function"
        }
      ]
    },
    sendCommand: {
      type: "function",
      name: "sendCommand",
      parameters: [
        {
          name: "target",
          optional: false,
          length: 0
        },
        {
          name: "method",
          optional: false,
          length: 0,
          type: "string"
        },
        {
          name: "commandParams",
          optional: true,
          length: 0,
          type: "object"
        },
        {
          name: "callback",
          optional: true,
          length: 1,
          type: "function"
        }
      ]
    },
    getTargets: {
      type: "function",
      name: "getTargets",
      parameters: [
        {
          name: "callback",
          optional: false,
          length: 1,
          type: "function"
        }
      ]
    }
  },
  declarativeContent,
  desktopCapture,
  devtools,
  dial,
  downloads,
  events,
  extension,
  extensionTypes,
  fontSettings,
  gcm,
  history,
  i18n,
  identity: identity$3,
  idle,
  instanceID,
  management,
  notifications,
  omnibox,
  pageAction,
  pageCapture,
  permissions,
  power,
  printerProvider,
  privacy,
  proxy,
  runtime,
  sessions,
  storage,
  system,
  tabCapture,
  tabs,
  topSites,
  tts,
  ttsEngine,
  types: types$1,
  webNavigation,
  webRequest,
  webstore,
  windows,
  accessibilityFeatures,
  certificateProvider,
  documentScan,
  enterprise,
  fileBrowserHandler,
  fileSystemProvider,
  input,
  networking,
  platformKeys,
  vpnProvider,
  wallpaper
};
function assertTypes(value, name2, types2) {
  const receivedType = typeof value;
  const pass = types2.includes(receivedType);
  if (!pass)
    throw new TypeError(`${name2} value must be ${types2.join(" or ")}, received "${receivedType}"`);
}
function isObject$b(item2) {
  return item2 != null && typeof item2 === "object" && !Array.isArray(item2);
}
function noop() {
}
function objectAttr(source, path, defaultValue = void 0) {
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = source;
  for (const p of paths) {
    result = Object(result)[p];
    if (result === void 0)
      return defaultValue;
  }
  return result;
}
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var f = n2.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f, args);
        return new Ctor();
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n2, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n2[k];
      }
    });
  });
  return a;
}
var build = {};
var ansiStyles = { exports: {} };
ansiStyles.exports;
(function(module) {
  const ANSI_BACKGROUND_OFFSET = 10;
  const wrapAnsi256 = (offset = 0) => (code2) => `\x1B[${38 + offset};5;${code2}m`;
  const wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
  function assembleStyles() {
    const codes = /* @__PURE__ */ new Map();
    const styles = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `\x1B[${style[0]}m`,
          close: `\x1B[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "\x1B[39m";
    styles.bgColor.close = "\x1B[49m";
    styles.color.ansi256 = wrapAnsi256();
    styles.color.ansi16m = wrapAnsi16m();
    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
    Object.defineProperties(styles, {
      rgbToAnsi256: {
        value: (red, green, blue) => {
          if (red === green && green === blue) {
            if (red < 8) {
              return 16;
            }
            if (red > 248) {
              return 231;
            }
            return Math.round((red - 8) / 247 * 24) + 232;
          }
          return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
        },
        enumerable: false
      },
      hexToRgb: {
        value: (hex) => {
          const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
          if (!matches) {
            return [0, 0, 0];
          }
          let { colorString } = matches.groups;
          if (colorString.length === 3) {
            colorString = colorString.split("").map((character) => character + character).join("");
          }
          const integer = Number.parseInt(colorString, 16);
          return [
            integer >> 16 & 255,
            integer >> 8 & 255,
            integer & 255
          ];
        },
        enumerable: false
      },
      hexToAnsi256: {
        value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
        enumerable: false
      }
    });
    return styles;
  }
  Object.defineProperty(module, "exports", {
    enumerable: true,
    get: assembleStyles
  });
})(ansiStyles);
var ansiStylesExports = ansiStyles.exports;
var collections = {};
Object.defineProperty(collections, "__esModule", {
  value: true
});
collections.printIteratorEntries = printIteratorEntries;
collections.printIteratorValues = printIteratorValues;
collections.printListItems = printListItems;
collections.printObjectProperties = printObjectProperties;
const getKeysOfEnumerableProperties = (object2, compareKeys) => {
  const keys2 = Object.keys(object2).sort(compareKeys);
  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(object2).forEach((symbol2) => {
      if (Object.getOwnPropertyDescriptor(object2, symbol2).enumerable) {
        keys2.push(symbol2);
      }
    });
  }
  return keys2;
};
function printIteratorEntries(iterator2, config2, indentation, depth, refs, printer2, separator = ": ") {
  let result = "";
  let current = iterator2.next();
  if (!current.done) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    while (!current.done) {
      const name2 = printer2(
        current.value[0],
        config2,
        indentationNext,
        depth,
        refs
      );
      const value = printer2(
        current.value[1],
        config2,
        indentationNext,
        depth,
        refs
      );
      result += indentationNext + name2 + separator + value;
      current = iterator2.next();
      if (!current.done) {
        result += "," + config2.spacingInner;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printIteratorValues(iterator2, config2, indentation, depth, refs, printer2) {
  let result = "";
  let current = iterator2.next();
  if (!current.done) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    while (!current.done) {
      result += indentationNext + printer2(current.value, config2, indentationNext, depth, refs);
      current = iterator2.next();
      if (!current.done) {
        result += "," + config2.spacingInner;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printListItems(list, config2, indentation, depth, refs, printer2) {
  let result = "";
  if (list.length) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    for (let i2 = 0; i2 < list.length; i2++) {
      result += indentationNext;
      if (i2 in list) {
        result += printer2(list[i2], config2, indentationNext, depth, refs);
      }
      if (i2 < list.length - 1) {
        result += "," + config2.spacingInner;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printObjectProperties(val, config2, indentation, depth, refs, printer2) {
  let result = "";
  const keys2 = getKeysOfEnumerableProperties(val, config2.compareKeys);
  if (keys2.length) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    for (let i2 = 0; i2 < keys2.length; i2++) {
      const key = keys2[i2];
      const name2 = printer2(key, config2, indentationNext, depth, refs);
      const value = printer2(val[key], config2, indentationNext, depth, refs);
      result += indentationNext + name2 + ": " + value;
      if (i2 < keys2.length - 1) {
        result += "," + config2.spacingInner;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
var AsymmetricMatcher$3 = {};
Object.defineProperty(AsymmetricMatcher$3, "__esModule", {
  value: true
});
AsymmetricMatcher$3.test = AsymmetricMatcher$3.serialize = AsymmetricMatcher$3.default = void 0;
var _collections$3 = collections;
var global$4 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  } else if (typeof global$4 !== "undefined") {
    return global$4;
  } else if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
}();
var Symbol$7 = global$4["jest-symbol-do-not-touch"] || global$4.Symbol;
const asymmetricMatcher = typeof Symbol$7 === "function" && Symbol$7.for ? Symbol$7.for("jest.asymmetricMatcher") : 1267621;
const SPACE$2 = " ";
const serialize$b = (val, config2, indentation, depth, refs, printer2) => {
  const stringedValue = val.toString();
  if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
    if (++depth > config2.maxDepth) {
      return "[" + stringedValue + "]";
    }
    return stringedValue + SPACE$2 + "[" + (0, _collections$3.printListItems)(
      val.sample,
      config2,
      indentation,
      depth,
      refs,
      printer2
    ) + "]";
  }
  if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
    if (++depth > config2.maxDepth) {
      return "[" + stringedValue + "]";
    }
    return stringedValue + SPACE$2 + "{" + (0, _collections$3.printObjectProperties)(
      val.sample,
      config2,
      indentation,
      depth,
      refs,
      printer2
    ) + "}";
  }
  if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
    return stringedValue + SPACE$2 + printer2(val.sample, config2, indentation, depth, refs);
  }
  if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
    return stringedValue + SPACE$2 + printer2(val.sample, config2, indentation, depth, refs);
  }
  return val.toAsymmetricMatcher();
};
AsymmetricMatcher$3.serialize = serialize$b;
const test$a = (val) => val && val.$$typeof === asymmetricMatcher;
AsymmetricMatcher$3.test = test$a;
const plugin$7 = {
  serialize: serialize$b,
  test: test$a
};
var _default$7 = plugin$7;
AsymmetricMatcher$3.default = _default$7;
var ConvertAnsi = {};
var ansiRegex = ({ onlyFirst = false } = {}) => {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
};
Object.defineProperty(ConvertAnsi, "__esModule", {
  value: true
});
ConvertAnsi.test = ConvertAnsi.serialize = ConvertAnsi.default = void 0;
var _ansiRegex = _interopRequireDefault$2(ansiRegex);
var _ansiStyles$1 = _interopRequireDefault$2(ansiStylesExports);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const toHumanReadableAnsi = (text) => text.replace((0, _ansiRegex.default)(), (match) => {
  switch (match) {
    case _ansiStyles$1.default.red.close:
    case _ansiStyles$1.default.green.close:
    case _ansiStyles$1.default.cyan.close:
    case _ansiStyles$1.default.gray.close:
    case _ansiStyles$1.default.white.close:
    case _ansiStyles$1.default.yellow.close:
    case _ansiStyles$1.default.bgRed.close:
    case _ansiStyles$1.default.bgGreen.close:
    case _ansiStyles$1.default.bgYellow.close:
    case _ansiStyles$1.default.inverse.close:
    case _ansiStyles$1.default.dim.close:
    case _ansiStyles$1.default.bold.close:
    case _ansiStyles$1.default.reset.open:
    case _ansiStyles$1.default.reset.close:
      return "</>";
    case _ansiStyles$1.default.red.open:
      return "<red>";
    case _ansiStyles$1.default.green.open:
      return "<green>";
    case _ansiStyles$1.default.cyan.open:
      return "<cyan>";
    case _ansiStyles$1.default.gray.open:
      return "<gray>";
    case _ansiStyles$1.default.white.open:
      return "<white>";
    case _ansiStyles$1.default.yellow.open:
      return "<yellow>";
    case _ansiStyles$1.default.bgRed.open:
      return "<bgRed>";
    case _ansiStyles$1.default.bgGreen.open:
      return "<bgGreen>";
    case _ansiStyles$1.default.bgYellow.open:
      return "<bgYellow>";
    case _ansiStyles$1.default.inverse.open:
      return "<inverse>";
    case _ansiStyles$1.default.dim.open:
      return "<dim>";
    case _ansiStyles$1.default.bold.open:
      return "<bold>";
    default:
      return "";
  }
});
const test$9 = (val) => typeof val === "string" && !!val.match((0, _ansiRegex.default)());
ConvertAnsi.test = test$9;
const serialize$a = (val, config2, indentation, depth, refs, printer2) => printer2(toHumanReadableAnsi(val), config2, indentation, depth, refs);
ConvertAnsi.serialize = serialize$a;
const plugin$6 = {
  serialize: serialize$a,
  test: test$9
};
var _default$6 = plugin$6;
ConvertAnsi.default = _default$6;
var DOMCollection$2 = {};
Object.defineProperty(DOMCollection$2, "__esModule", {
  value: true
});
DOMCollection$2.test = DOMCollection$2.serialize = DOMCollection$2.default = void 0;
var _collections$2 = collections;
const SPACE$1 = " ";
const OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
const ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
const testName = (name2) => OBJECT_NAMES.indexOf(name2) !== -1 || ARRAY_REGEXP.test(name2);
const test$8 = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
DOMCollection$2.test = test$8;
const isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
const serialize$9 = (collection, config2, indentation, depth, refs, printer2) => {
  const name2 = collection.constructor.name;
  if (++depth > config2.maxDepth) {
    return "[" + name2 + "]";
  }
  return (config2.min ? "" : name2 + SPACE$1) + (OBJECT_NAMES.indexOf(name2) !== -1 ? "{" + (0, _collections$2.printObjectProperties)(
    isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
      props[attribute.name] = attribute.value;
      return props;
    }, {}) : { ...collection },
    config2,
    indentation,
    depth,
    refs,
    printer2
  ) + "}" : "[" + (0, _collections$2.printListItems)(
    Array.from(collection),
    config2,
    indentation,
    depth,
    refs,
    printer2
  ) + "]");
};
DOMCollection$2.serialize = serialize$9;
const plugin$5 = {
  serialize: serialize$9,
  test: test$8
};
var _default$5 = plugin$5;
DOMCollection$2.default = _default$5;
var DOMElement$2 = {};
var markup = {};
var escapeHTML$1 = {};
Object.defineProperty(escapeHTML$1, "__esModule", {
  value: true
});
escapeHTML$1.default = escapeHTML;
function escapeHTML(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(markup, "__esModule", {
  value: true
});
markup.printText = markup.printProps = markup.printElementAsLeaf = markup.printElement = markup.printComment = markup.printChildren = void 0;
var _escapeHTML = _interopRequireDefault$1(escapeHTML$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const printProps = (keys2, props, config2, indentation, depth, refs, printer2) => {
  const indentationNext = indentation + config2.indent;
  const colors = config2.colors;
  return keys2.map((key) => {
    const value = props[key];
    let printed = printer2(value, config2, indentationNext, depth, refs);
    if (typeof value !== "string") {
      if (printed.indexOf("\n") !== -1) {
        printed = config2.spacingOuter + indentationNext + printed + config2.spacingOuter + indentation;
      }
      printed = "{" + printed + "}";
    }
    return config2.spacingInner + indentation + colors.prop.open + key + colors.prop.close + "=" + colors.value.open + printed + colors.value.close;
  }).join("");
};
markup.printProps = printProps;
const printChildren = (children, config2, indentation, depth, refs, printer2) => children.map(
  (child) => config2.spacingOuter + indentation + (typeof child === "string" ? printText(child, config2) : printer2(child, config2, indentation, depth, refs))
).join("");
markup.printChildren = printChildren;
const printText = (text, config2) => {
  const contentColor = config2.colors.content;
  return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
};
markup.printText = printText;
const printComment = (comment, config2) => {
  const commentColor = config2.colors.comment;
  return commentColor.open + "<!--" + (0, _escapeHTML.default)(comment) + "-->" + commentColor.close;
};
markup.printComment = printComment;
const printElement = (type2, printedProps, printedChildren, config2, indentation) => {
  const tagColor = config2.colors.tag;
  return tagColor.open + "<" + type2 + (printedProps && tagColor.close + printedProps + config2.spacingOuter + indentation + tagColor.open) + (printedChildren ? ">" + tagColor.close + printedChildren + config2.spacingOuter + indentation + tagColor.open + "</" + type2 : (printedProps && !config2.min ? "" : " ") + "/") + ">" + tagColor.close;
};
markup.printElement = printElement;
const printElementAsLeaf = (type2, config2) => {
  const tagColor = config2.colors.tag;
  return tagColor.open + "<" + type2 + tagColor.close + " …" + tagColor.open + " />" + tagColor.close;
};
markup.printElementAsLeaf = printElementAsLeaf;
Object.defineProperty(DOMElement$2, "__esModule", {
  value: true
});
DOMElement$2.test = DOMElement$2.serialize = DOMElement$2.default = void 0;
var _markup$2 = markup;
const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const FRAGMENT_NODE = 11;
const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
const testHasAttribute = (val) => {
  try {
    return typeof val.hasAttribute === "function" && val.hasAttribute("is");
  } catch {
    return false;
  }
};
const testNode = (val) => {
  const constructorName = val.constructor.name;
  const { nodeType, tagName } = val;
  const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
  return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
};
const test$7 = (val) => {
  var _val$constructor;
  return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
};
DOMElement$2.test = test$7;
function nodeIsText(node) {
  return node.nodeType === TEXT_NODE;
}
function nodeIsComment(node) {
  return node.nodeType === COMMENT_NODE;
}
function nodeIsFragment(node) {
  return node.nodeType === FRAGMENT_NODE;
}
const serialize$8 = (node, config2, indentation, depth, refs, printer2) => {
  if (nodeIsText(node)) {
    return (0, _markup$2.printText)(node.data, config2);
  }
  if (nodeIsComment(node)) {
    return (0, _markup$2.printComment)(node.data, config2);
  }
  const type2 = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
  if (++depth > config2.maxDepth) {
    return (0, _markup$2.printElementAsLeaf)(type2, config2);
  }
  return (0, _markup$2.printElement)(
    type2,
    (0, _markup$2.printProps)(
      nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr) => attr.name).sort(),
      nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
        props[attribute.name] = attribute.value;
        return props;
      }, {}),
      config2,
      indentation + config2.indent,
      depth,
      refs,
      printer2
    ),
    (0, _markup$2.printChildren)(
      Array.prototype.slice.call(node.childNodes || node.children),
      config2,
      indentation + config2.indent,
      depth,
      refs,
      printer2
    ),
    config2,
    indentation
  );
};
DOMElement$2.serialize = serialize$8;
const plugin$4 = {
  serialize: serialize$8,
  test: test$7
};
var _default$4 = plugin$4;
DOMElement$2.default = _default$4;
var Immutable$2 = {};
Object.defineProperty(Immutable$2, "__esModule", {
  value: true
});
Immutable$2.test = Immutable$2.serialize = Immutable$2.default = void 0;
var _collections$1 = collections;
const IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
const IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
const IS_KEYED_SENTINEL$1 = "@@__IMMUTABLE_KEYED__@@";
const IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
const IS_ORDERED_SENTINEL$1 = "@@__IMMUTABLE_ORDERED__@@";
const IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
const IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
const IS_SET_SENTINEL$1 = "@@__IMMUTABLE_SET__@@";
const IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
const getImmutableName = (name2) => "Immutable." + name2;
const printAsLeaf = (name2) => "[" + name2 + "]";
const SPACE = " ";
const LAZY = "…";
const printImmutableEntries = (val, config2, indentation, depth, refs, printer2, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : getImmutableName(type2) + SPACE + "{" + (0, _collections$1.printIteratorEntries)(
  val.entries(),
  config2,
  indentation,
  depth,
  refs,
  printer2
) + "}";
function getRecordEntries(val) {
  let i2 = 0;
  return {
    next() {
      if (i2 < val._keys.length) {
        const key = val._keys[i2++];
        return {
          done: false,
          value: [key, val.get(key)]
        };
      }
      return {
        done: true,
        value: void 0
      };
    }
  };
}
const printImmutableRecord = (val, config2, indentation, depth, refs, printer2) => {
  const name2 = getImmutableName(val._name || "Record");
  return ++depth > config2.maxDepth ? printAsLeaf(name2) : name2 + SPACE + "{" + (0, _collections$1.printIteratorEntries)(
    getRecordEntries(val),
    config2,
    indentation,
    depth,
    refs,
    printer2
  ) + "}";
};
const printImmutableSeq = (val, config2, indentation, depth, refs, printer2) => {
  const name2 = getImmutableName("Seq");
  if (++depth > config2.maxDepth) {
    return printAsLeaf(name2);
  }
  if (val[IS_KEYED_SENTINEL$1]) {
    return name2 + SPACE + "{" + // from Immutable collection of entries or from ECMAScript object
    (val._iter || val._object ? (0, _collections$1.printIteratorEntries)(
      val.entries(),
      config2,
      indentation,
      depth,
      refs,
      printer2
    ) : LAZY) + "}";
  }
  return name2 + SPACE + "[" + (val._iter || // from Immutable collection of values
  val._array || // from ECMAScript array
  val._collection || // from ECMAScript collection in immutable v4
  val._iterable ? (0, _collections$1.printIteratorValues)(
    val.values(),
    config2,
    indentation,
    depth,
    refs,
    printer2
  ) : LAZY) + "]";
};
const printImmutableValues = (val, config2, indentation, depth, refs, printer2, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : getImmutableName(type2) + SPACE + "[" + (0, _collections$1.printIteratorValues)(
  val.values(),
  config2,
  indentation,
  depth,
  refs,
  printer2
) + "]";
const serialize$7 = (val, config2, indentation, depth, refs, printer2) => {
  if (val[IS_MAP_SENTINEL]) {
    return printImmutableEntries(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer2,
      val[IS_ORDERED_SENTINEL$1] ? "OrderedMap" : "Map"
    );
  }
  if (val[IS_LIST_SENTINEL]) {
    return printImmutableValues(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer2,
      "List"
    );
  }
  if (val[IS_SET_SENTINEL$1]) {
    return printImmutableValues(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer2,
      val[IS_ORDERED_SENTINEL$1] ? "OrderedSet" : "Set"
    );
  }
  if (val[IS_STACK_SENTINEL]) {
    return printImmutableValues(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer2,
      "Stack"
    );
  }
  if (val[IS_SEQ_SENTINEL]) {
    return printImmutableSeq(val, config2, indentation, depth, refs, printer2);
  }
  return printImmutableRecord(val, config2, indentation, depth, refs, printer2);
};
Immutable$2.serialize = serialize$7;
const test$6 = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
Immutable$2.test = test$6;
const plugin$3 = {
  serialize: serialize$7,
  test: test$6
};
var _default$3 = plugin$3;
Immutable$2.default = _default$3;
var ReactElement$2 = {};
var reactIs = { exports: {} };
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min)
    return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b2 = 60103, c = 60106, d = 60107, e = 60108, f = 60114, g2 = 60109, h = 60110, k = 60112, l2 = 60113, m2 = 60120, n2 = 60115, p = 60116, q = 60121, r = 60122, u = 60117, v = 60129, w = 60131;
  if ("function" === typeof Symbol && Symbol.for) {
    var x = Symbol.for;
    b2 = x("react.element");
    c = x("react.portal");
    d = x("react.fragment");
    e = x("react.strict_mode");
    f = x("react.profiler");
    g2 = x("react.provider");
    h = x("react.context");
    k = x("react.forward_ref");
    l2 = x("react.suspense");
    m2 = x("react.suspense_list");
    n2 = x("react.memo");
    p = x("react.lazy");
    q = x("react.block");
    r = x("react.server.block");
    u = x("react.fundamental");
    v = x("react.debug_trace_mode");
    w = x("react.legacy_hidden");
  }
  function y2(a) {
    if ("object" === typeof a && null !== a) {
      var t2 = a.$$typeof;
      switch (t2) {
        case b2:
          switch (a = a.type, a) {
            case d:
            case f:
            case e:
            case l2:
            case m2:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case h:
                case k:
                case p:
                case n2:
                case g2:
                  return a;
                default:
                  return t2;
              }
          }
        case c:
          return t2;
      }
    }
  }
  var z = g2, A2 = b2, B = k, C2 = d, D = p, E2 = n2, F = c, G = f, H = e, I2 = l2;
  reactIs_production_min.ContextConsumer = h;
  reactIs_production_min.ContextProvider = z;
  reactIs_production_min.Element = A2;
  reactIs_production_min.ForwardRef = B;
  reactIs_production_min.Fragment = C2;
  reactIs_production_min.Lazy = D;
  reactIs_production_min.Memo = E2;
  reactIs_production_min.Portal = F;
  reactIs_production_min.Profiler = G;
  reactIs_production_min.StrictMode = H;
  reactIs_production_min.Suspense = I2;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a) {
    return y2(a) === h;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return y2(a) === g2;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === b2;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return y2(a) === k;
  };
  reactIs_production_min.isFragment = function(a) {
    return y2(a) === d;
  };
  reactIs_production_min.isLazy = function(a) {
    return y2(a) === p;
  };
  reactIs_production_min.isMemo = function(a) {
    return y2(a) === n2;
  };
  reactIs_production_min.isPortal = function(a) {
    return y2(a) === c;
  };
  reactIs_production_min.isProfiler = function(a) {
    return y2(a) === f;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return y2(a) === e;
  };
  reactIs_production_min.isSuspense = function(a) {
    return y2(a) === l2;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l2 || a === m2 || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n2 || a.$$typeof === g2 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? true : false;
  };
  reactIs_production_min.typeOf = y2;
  return reactIs_production_min;
}
var reactIs_development = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development)
    return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var REACT_ELEMENT_TYPE = 60103;
      var REACT_PORTAL_TYPE = 60106;
      var REACT_FRAGMENT_TYPE = 60107;
      var REACT_STRICT_MODE_TYPE = 60108;
      var REACT_PROFILER_TYPE = 60114;
      var REACT_PROVIDER_TYPE = 60109;
      var REACT_CONTEXT_TYPE = 60110;
      var REACT_FORWARD_REF_TYPE = 60112;
      var REACT_SUSPENSE_TYPE = 60113;
      var REACT_SUSPENSE_LIST_TYPE = 60120;
      var REACT_MEMO_TYPE = 60115;
      var REACT_LAZY_TYPE = 60116;
      var REACT_BLOCK_TYPE = 60121;
      var REACT_SERVER_BLOCK_TYPE = 60122;
      var REACT_FUNDAMENTAL_TYPE = 60117;
      var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
      var REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        symbolFor("react.scope");
        symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }
      var enableScopeAPI = false;
      function isValidElementType(type2) {
        if (typeof type2 === "string" || typeof type2 === "function") {
          return true;
        }
        if (type2 === REACT_FRAGMENT_TYPE || type2 === REACT_PROFILER_TYPE || type2 === REACT_DEBUG_TRACING_MODE_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || type2 === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
          return true;
        }
        if (typeof type2 === "object" && type2 !== null) {
          if (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_BLOCK_TYPE || type2[0] === REACT_SERVER_BLOCK_TYPE) {
            return true;
          }
        }
        return false;
      }
      function typeOf3(object2) {
        if (typeof object2 === "object" && object2 !== null) {
          var $$typeof = object2.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type2 = object2.type;
              switch (type2) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type2;
                default:
                  var $$typeofType = type2 && type2.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      var hasWarnedAboutDeprecatedIsConcurrentMode = false;
      function isAsyncMode(object2) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isConcurrentMode(object2) {
        {
          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true;
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isContextConsumer(object2) {
        return typeOf3(object2) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object2) {
        return typeOf3(object2) === REACT_PROVIDER_TYPE;
      }
      function isElement(object2) {
        return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object2) {
        return typeOf3(object2) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object2) {
        return typeOf3(object2) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object2) {
        return typeOf3(object2) === REACT_LAZY_TYPE;
      }
      function isMemo(object2) {
        return typeOf3(object2) === REACT_MEMO_TYPE;
      }
      function isPortal(object2) {
        return typeOf3(object2) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object2) {
        return typeOf3(object2) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object2) {
        return typeOf3(object2) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object2) {
        return typeOf3(object2) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf3;
    })();
  }
  return reactIs_development;
}
if (process.env.NODE_ENV === "production") {
  reactIs.exports = requireReactIs_production_min();
} else {
  reactIs.exports = requireReactIs_development();
}
var reactIsExports = reactIs.exports;
Object.defineProperty(ReactElement$2, "__esModule", {
  value: true
});
ReactElement$2.test = ReactElement$2.serialize = ReactElement$2.default = void 0;
var ReactIs = _interopRequireWildcard(reactIsExports);
var _markup$1 = markup;
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const getChildren = (arg, children = []) => {
  if (Array.isArray(arg)) {
    arg.forEach((item2) => {
      getChildren(item2, children);
    });
  } else if (arg != null && arg !== false) {
    children.push(arg);
  }
  return children;
};
const getType = (element) => {
  const type2 = element.type;
  if (typeof type2 === "string") {
    return type2;
  }
  if (typeof type2 === "function") {
    return type2.displayName || type2.name || "Unknown";
  }
  if (ReactIs.isFragment(element)) {
    return "React.Fragment";
  }
  if (ReactIs.isSuspense(element)) {
    return "React.Suspense";
  }
  if (typeof type2 === "object" && type2 !== null) {
    if (ReactIs.isContextProvider(element)) {
      return "Context.Provider";
    }
    if (ReactIs.isContextConsumer(element)) {
      return "Context.Consumer";
    }
    if (ReactIs.isForwardRef(element)) {
      if (type2.displayName) {
        return type2.displayName;
      }
      const functionName3 = type2.render.displayName || type2.render.name || "";
      return functionName3 !== "" ? "ForwardRef(" + functionName3 + ")" : "ForwardRef";
    }
    if (ReactIs.isMemo(element)) {
      const functionName3 = type2.displayName || type2.type.displayName || type2.type.name || "";
      return functionName3 !== "" ? "Memo(" + functionName3 + ")" : "Memo";
    }
  }
  return "UNDEFINED";
};
const getPropKeys$1 = (element) => {
  const { props } = element;
  return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
};
const serialize$6 = (element, config2, indentation, depth, refs, printer2) => ++depth > config2.maxDepth ? (0, _markup$1.printElementAsLeaf)(getType(element), config2) : (0, _markup$1.printElement)(
  getType(element),
  (0, _markup$1.printProps)(
    getPropKeys$1(element),
    element.props,
    config2,
    indentation + config2.indent,
    depth,
    refs,
    printer2
  ),
  (0, _markup$1.printChildren)(
    getChildren(element.props.children),
    config2,
    indentation + config2.indent,
    depth,
    refs,
    printer2
  ),
  config2,
  indentation
);
ReactElement$2.serialize = serialize$6;
const test$5 = (val) => val != null && ReactIs.isElement(val);
ReactElement$2.test = test$5;
const plugin$2 = {
  serialize: serialize$6,
  test: test$5
};
var _default$2 = plugin$2;
ReactElement$2.default = _default$2;
var ReactTestComponent$2 = {};
Object.defineProperty(ReactTestComponent$2, "__esModule", {
  value: true
});
ReactTestComponent$2.test = ReactTestComponent$2.serialize = ReactTestComponent$2.default = void 0;
var _markup = markup;
var global$3 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  } else if (typeof global$3 !== "undefined") {
    return global$3;
  } else if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
}();
var Symbol$6 = global$3["jest-symbol-do-not-touch"] || global$3.Symbol;
const testSymbol = typeof Symbol$6 === "function" && Symbol$6.for ? Symbol$6.for("react.test.json") : 245830487;
const getPropKeys = (object2) => {
  const { props } = object2;
  return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
};
const serialize$5 = (object2, config2, indentation, depth, refs, printer2) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(object2.type, config2) : (0, _markup.printElement)(
  object2.type,
  object2.props ? (0, _markup.printProps)(
    getPropKeys(object2),
    object2.props,
    config2,
    indentation + config2.indent,
    depth,
    refs,
    printer2
  ) : "",
  object2.children ? (0, _markup.printChildren)(
    object2.children,
    config2,
    indentation + config2.indent,
    depth,
    refs,
    printer2
  ) : "",
  config2,
  indentation
);
ReactTestComponent$2.serialize = serialize$5;
const test$4 = (val) => val && val.$$typeof === testSymbol;
ReactTestComponent$2.test = test$4;
const plugin$1 = {
  serialize: serialize$5,
  test: test$4
};
var _default$1 = plugin$1;
ReactTestComponent$2.default = _default$1;
Object.defineProperty(build, "__esModule", {
  value: true
});
build.default = build.DEFAULT_OPTIONS = void 0;
var format_1$1 = build.format = format$4;
var plugins_1 = build.plugins = void 0;
var _ansiStyles = _interopRequireDefault(ansiStylesExports);
var _collections = collections;
var _AsymmetricMatcher = _interopRequireDefault(
  AsymmetricMatcher$3
);
var _ConvertAnsi = _interopRequireDefault(ConvertAnsi);
var _DOMCollection = _interopRequireDefault(DOMCollection$2);
var _DOMElement = _interopRequireDefault(DOMElement$2);
var _Immutable = _interopRequireDefault(Immutable$2);
var _ReactElement = _interopRequireDefault(ReactElement$2);
var _ReactTestComponent = _interopRequireDefault(
  ReactTestComponent$2
);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const toString$2 = Object.prototype.toString;
const toISOString = Date.prototype.toISOString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const getConstructorName$1 = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
const isWindow = (val) => typeof window !== "undefined" && val === window;
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
const NEWLINE_REGEXP = /\n/gi;
class PrettyFormatPluginError extends Error {
  constructor(message, stack) {
    super(message);
    this.stack = stack;
    this.name = this.constructor.name;
  }
}
function isToStringedArrayType(toStringed) {
  return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
}
function printNumber(val) {
  return Object.is(val, -0) ? "-0" : String(val);
}
function printBigInt(val) {
  return String(`${val}n`);
}
function printFunction(val, printFunctionName2) {
  if (!printFunctionName2) {
    return "[Function]";
  }
  return "[Function " + (val.name || "anonymous") + "]";
}
function printSymbol(val) {
  return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
}
function printError(val) {
  return "[" + errorToString.call(val) + "]";
}
function printBasicValue(val, printFunctionName2, escapeRegex2, escapeString) {
  if (val === true || val === false) {
    return "" + val;
  }
  if (val === void 0) {
    return "undefined";
  }
  if (val === null) {
    return "null";
  }
  const typeOf3 = typeof val;
  if (typeOf3 === "number") {
    return printNumber(val);
  }
  if (typeOf3 === "bigint") {
    return printBigInt(val);
  }
  if (typeOf3 === "string") {
    if (escapeString) {
      return '"' + val.replace(/"|\\/g, "\\$&") + '"';
    }
    return '"' + val + '"';
  }
  if (typeOf3 === "function") {
    return printFunction(val, printFunctionName2);
  }
  if (typeOf3 === "symbol") {
    return printSymbol(val);
  }
  const toStringed = toString$2.call(val);
  if (toStringed === "[object WeakMap]") {
    return "WeakMap {}";
  }
  if (toStringed === "[object WeakSet]") {
    return "WeakSet {}";
  }
  if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
    return printFunction(val, printFunctionName2);
  }
  if (toStringed === "[object Symbol]") {
    return printSymbol(val);
  }
  if (toStringed === "[object Date]") {
    return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
  }
  if (toStringed === "[object Error]") {
    return printError(val);
  }
  if (toStringed === "[object RegExp]") {
    if (escapeRegex2) {
      return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    return regExpToString.call(val);
  }
  if (val instanceof Error) {
    return printError(val);
  }
  return null;
}
function printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON) {
  if (refs.indexOf(val) !== -1) {
    return "[Circular]";
  }
  refs = refs.slice();
  refs.push(val);
  const hitMaxDepth = ++depth > config2.maxDepth;
  const min = config2.min;
  if (config2.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
    return printer(val.toJSON(), config2, indentation, depth, refs, true);
  }
  const toStringed = toString$2.call(val);
  if (toStringed === "[object Arguments]") {
    return hitMaxDepth ? "[Arguments]" : (min ? "" : "Arguments ") + "[" + (0, _collections.printListItems)(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer
    ) + "]";
  }
  if (isToStringedArrayType(toStringed)) {
    return hitMaxDepth ? "[" + val.constructor.name + "]" : (min ? "" : !config2.printBasicPrototype && val.constructor.name === "Array" ? "" : val.constructor.name + " ") + "[" + (0, _collections.printListItems)(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer
    ) + "]";
  }
  if (toStringed === "[object Map]") {
    return hitMaxDepth ? "[Map]" : "Map {" + (0, _collections.printIteratorEntries)(
      val.entries(),
      config2,
      indentation,
      depth,
      refs,
      printer,
      " => "
    ) + "}";
  }
  if (toStringed === "[object Set]") {
    return hitMaxDepth ? "[Set]" : "Set {" + (0, _collections.printIteratorValues)(
      val.values(),
      config2,
      indentation,
      depth,
      refs,
      printer
    ) + "}";
  }
  return hitMaxDepth || isWindow(val) ? "[" + getConstructorName$1(val) + "]" : (min ? "" : !config2.printBasicPrototype && getConstructorName$1(val) === "Object" ? "" : getConstructorName$1(val) + " ") + "{" + (0, _collections.printObjectProperties)(
    val,
    config2,
    indentation,
    depth,
    refs,
    printer
  ) + "}";
}
function isNewPlugin(plugin2) {
  return plugin2.serialize != null;
}
function printPlugin(plugin2, val, config2, indentation, depth, refs) {
  let printed;
  try {
    printed = isNewPlugin(plugin2) ? plugin2.serialize(val, config2, indentation, depth, refs, printer) : plugin2.print(
      val,
      (valChild) => printer(valChild, config2, indentation, depth, refs),
      (str) => {
        const indentationNext = indentation + config2.indent;
        return indentationNext + str.replace(NEWLINE_REGEXP, "\n" + indentationNext);
      },
      {
        edgeSpacing: config2.spacingOuter,
        min: config2.min,
        spacing: config2.spacingInner
      },
      config2.colors
    );
  } catch (error2) {
    throw new PrettyFormatPluginError(error2.message, error2.stack);
  }
  if (typeof printed !== "string") {
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
    );
  }
  return printed;
}
function findPlugin(plugins2, val) {
  for (let p = 0; p < plugins2.length; p++) {
    try {
      if (plugins2[p].test(val)) {
        return plugins2[p];
      }
    } catch (error2) {
      throw new PrettyFormatPluginError(error2.message, error2.stack);
    }
  }
  return null;
}
function printer(val, config2, indentation, depth, refs, hasCalledToJSON) {
  const plugin2 = findPlugin(config2.plugins, val);
  if (plugin2 !== null) {
    return printPlugin(plugin2, val, config2, indentation, depth, refs);
  }
  const basicResult = printBasicValue(
    val,
    config2.printFunctionName,
    config2.escapeRegex,
    config2.escapeString
  );
  if (basicResult !== null) {
    return basicResult;
  }
  return printComplexValue(
    val,
    config2,
    indentation,
    depth,
    refs,
    hasCalledToJSON
  );
}
const DEFAULT_THEME = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
};
const DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
const DEFAULT_OPTIONS = {
  callToJSON: true,
  compareKeys: void 0,
  escapeRegex: false,
  escapeString: true,
  highlight: false,
  indent: 2,
  maxDepth: Infinity,
  min: false,
  plugins: [],
  printBasicPrototype: true,
  printFunctionName: true,
  theme: DEFAULT_THEME
};
build.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
function validateOptions(options) {
  Object.keys(options).forEach((key) => {
    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
      throw new Error(`pretty-format: Unknown option "${key}".`);
    }
  });
  if (options.min && options.indent !== void 0 && options.indent !== 0) {
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  }
  if (options.theme !== void 0) {
    if (options.theme === null) {
      throw new Error('pretty-format: Option "theme" must not be null.');
    }
    if (typeof options.theme !== "object") {
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
      );
    }
  }
}
const getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
  const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
  const color = value && _ansiStyles.default[value];
  if (color && typeof color.close === "string" && typeof color.open === "string") {
    colors[key] = color;
  } else {
    throw new Error(
      `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
    );
  }
  return colors;
}, /* @__PURE__ */ Object.create(null));
const getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
  colors[key] = {
    close: "",
    open: ""
  };
  return colors;
}, /* @__PURE__ */ Object.create(null));
const getPrintFunctionName = (options) => options && options.printFunctionName !== void 0 ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
const getEscapeRegex = (options) => options && options.escapeRegex !== void 0 ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
const getEscapeString = (options) => options && options.escapeString !== void 0 ? options.escapeString : DEFAULT_OPTIONS.escapeString;
const getConfig = (options) => {
  var _options$printBasicPr;
  return {
    callToJSON: options && options.callToJSON !== void 0 ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
    colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
    compareKeys: options && typeof options.compareKeys === "function" ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
    escapeRegex: getEscapeRegex(options),
    escapeString: getEscapeString(options),
    indent: options && options.min ? "" : createIndent(
      options && options.indent !== void 0 ? options.indent : DEFAULT_OPTIONS.indent
    ),
    maxDepth: options && options.maxDepth !== void 0 ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
    min: options && options.min !== void 0 ? options.min : DEFAULT_OPTIONS.min,
    plugins: options && options.plugins !== void 0 ? options.plugins : DEFAULT_OPTIONS.plugins,
    printBasicPrototype: (_options$printBasicPr = options === null || options === void 0 ? void 0 : options.printBasicPrototype) !== null && _options$printBasicPr !== void 0 ? _options$printBasicPr : true,
    printFunctionName: getPrintFunctionName(options),
    spacingInner: options && options.min ? " " : "\n",
    spacingOuter: options && options.min ? "" : "\n"
  };
};
function createIndent(indent) {
  return new Array(indent + 1).join(" ");
}
function format$4(val, options) {
  if (options) {
    validateOptions(options);
    if (options.plugins) {
      const plugin2 = findPlugin(options.plugins, val);
      if (plugin2 !== null) {
        return printPlugin(plugin2, val, getConfig(options), "", 0, []);
      }
    }
  }
  const basicResult = printBasicValue(
    val,
    getPrintFunctionName(options),
    getEscapeRegex(options),
    getEscapeString(options)
  );
  if (basicResult !== null) {
    return basicResult;
  }
  return printComplexValue(val, getConfig(options), "", 0, []);
}
const plugins = {
  AsymmetricMatcher: _AsymmetricMatcher.default,
  ConvertAnsi: _ConvertAnsi.default,
  DOMCollection: _DOMCollection.default,
  DOMElement: _DOMElement.default,
  Immutable: _Immutable.default,
  ReactElement: _ReactElement.default,
  ReactTestComponent: _ReactTestComponent.default
};
plugins_1 = build.plugins = plugins;
var _default = format$4;
build.default = _default;
const SAFE_TIMERS_SYMBOL = Symbol("vitest:SAFE_TIMERS");
const SAFE_COLORS_SYMBOL = Symbol("vitest:SAFE_COLORS");
const colorsMap = {
  bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"],
  dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"],
  italic: ["\x1B[3m", "\x1B[23m"],
  underline: ["\x1B[4m", "\x1B[24m"],
  inverse: ["\x1B[7m", "\x1B[27m"],
  hidden: ["\x1B[8m", "\x1B[28m"],
  strikethrough: ["\x1B[9m", "\x1B[29m"],
  black: ["\x1B[30m", "\x1B[39m"],
  red: ["\x1B[31m", "\x1B[39m"],
  green: ["\x1B[32m", "\x1B[39m"],
  yellow: ["\x1B[33m", "\x1B[39m"],
  blue: ["\x1B[34m", "\x1B[39m"],
  magenta: ["\x1B[35m", "\x1B[39m"],
  cyan: ["\x1B[36m", "\x1B[39m"],
  white: ["\x1B[37m", "\x1B[39m"],
  gray: ["\x1B[90m", "\x1B[39m"],
  bgBlack: ["\x1B[40m", "\x1B[49m"],
  bgRed: ["\x1B[41m", "\x1B[49m"],
  bgGreen: ["\x1B[42m", "\x1B[49m"],
  bgYellow: ["\x1B[43m", "\x1B[49m"],
  bgBlue: ["\x1B[44m", "\x1B[49m"],
  bgMagenta: ["\x1B[45m", "\x1B[49m"],
  bgCyan: ["\x1B[46m", "\x1B[49m"],
  bgWhite: ["\x1B[47m", "\x1B[49m"]
};
const colorsEntries = Object.entries(colorsMap);
function string$2(str) {
  return String(str);
}
string$2.open = "";
string$2.close = "";
const defaultColors = /* @__PURE__ */ colorsEntries.reduce((acc, [key]) => {
  acc[key] = string$2;
  return acc;
}, { isColorSupported: false });
function getColors() {
  return globalThis[SAFE_COLORS_SYMBOL] || defaultColors;
}
var util$1 = {};
var types = {};
var shams$1 = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var hasSymbols$2 = shams$1;
var shams = function hasToStringTagShams() {
  return hasSymbols$2() && !!Symbol.toStringTag;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams$1;
var hasSymbols$1 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var test$3 = {
  foo: {}
};
var $Object = Object;
var hasProto$1 = function hasProto() {
  return { __proto__: test$3 }.foo === test$3.foo && !({ __proto__: null } instanceof $Object);
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice$1 = Array.prototype.slice;
var toStr$3 = Object.prototype.toString;
var funcType = "[object Function]";
var implementation$1 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr$3.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice$1.call(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(
        this,
        args.concat(slice$1.call(arguments))
      );
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(
        that,
        args.concat(slice$1.call(arguments))
      );
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i2 = 0; i2 < boundLength; i2++) {
    boundArgs.push("$" + i2);
  }
  bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
  try {
    $gOPD$1({}, "");
  } catch (e) {
    $gOPD$1 = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError();
};
var ThrowTypeError = $gOPD$1 ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD$1(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols2 = hasSymbols$1();
var hasProto2 = hasProto$1();
var getProto$1 = Object.getPrototypeOf || (hasProto2 ? function(x) {
  return x.__proto__;
} : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto$1 ? undefined$1 : getProto$1(Uint8Array);
var INTRINSICS = {
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols2 && getProto$1 ? getProto$1([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols2 && getProto$1 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto$1 ? undefined$1 : getProto$1((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto$1 ? undefined$1 : getProto$1((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols2 && getProto$1 ? getProto$1(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
if (getProto$1) {
  try {
    null.error;
  } catch (e) {
    var errorProto = getProto$1(getProto$1(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
  }
}
var doEval = function doEval2(name2) {
  var value;
  if (name2 === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name2 === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name2 === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name2 === "%AsyncGenerator%") {
    var fn2 = doEval2("%AsyncGeneratorFunction%");
    if (fn2) {
      value = fn2.prototype;
    }
  } else if (name2 === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen && getProto$1) {
      value = getProto$1(gen.prototype);
    }
  }
  INTRINSICS[name2] = value;
  return value;
};
var LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind2 = functionBind;
var hasOwn = src;
var $concat = bind2.call(Function.call, Array.prototype.concat);
var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
var $replace = bind2.call(Function.call, String.prototype.replace);
var $strSlice = bind2.call(Function.call, String.prototype.slice);
var $exec = bind2.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string2) {
  var first = $strSlice(string2, 0, 1);
  var last = $strSlice(string2, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace(string2, rePropName, function(match, number2, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number2 || match;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
  var intrinsicName = name2;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name2, allowMissing) {
  if (typeof name2 !== "string" || name2.length === 0) {
    throw new $TypeError("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name2) === null) {
    throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name2);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
    var part = parts[i2];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD$1 && i2 + 1 >= parts.length) {
        var desc = $gOPD$1(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var callBind$1 = { exports: {} };
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
  var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
  var $max = GetIntrinsic3("%Math.max%");
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = null;
    }
  }
  module.exports = function callBind2(originalFunction) {
    var func = $reflectApply(bind3, $call, arguments);
    if ($gOPD2 && $defineProperty) {
      var desc = $gOPD2(func, "length");
      if (desc.configurable) {
        $defineProperty(
          func,
          "length",
          { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
        );
      }
    }
    return func;
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var callBindExports = callBind$1.exports;
var GetIntrinsic$1 = getIntrinsic;
var callBind = callBindExports;
var $indexOf$1 = callBind(GetIntrinsic$1("String.prototype.indexOf"));
var callBound$3 = function callBoundIntrinsic(name2, allowMissing) {
  var intrinsic = GetIntrinsic$1(name2, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf$1(name2, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
var hasToStringTag$4 = shams();
var callBound$2 = callBound$3;
var $toString$2 = callBound$2("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
  if (hasToStringTag$4 && value && typeof value === "object" && Symbol.toStringTag in value) {
    return false;
  }
  return $toString$2(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments2(value) {
  if (isStandardArguments(value)) {
    return true;
  }
  return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString$2(value) !== "[object Array]" && $toString$2(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
  return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments;
var isArguments$4 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
var toStr$2 = Object.prototype.toString;
var fnToStr$1 = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag$3 = shams();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
  if (!hasToStringTag$3) {
    return false;
  }
  try {
    return Function("return function*() {}")();
  } catch (e) {
  }
};
var GeneratorFunction;
var isGeneratorFunction = function isGeneratorFunction2(fn2) {
  if (typeof fn2 !== "function") {
    return false;
  }
  if (isFnRegex.test(fnToStr$1.call(fn2))) {
    return true;
  }
  if (!hasToStringTag$3) {
    var str = toStr$2.call(fn2);
    return str === "[object GeneratorFunction]";
  }
  if (!getProto) {
    return false;
  }
  if (typeof GeneratorFunction === "undefined") {
    var generatorFunc = getGeneratorFunc();
    GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
  }
  return getProto(fn2) === GeneratorFunction;
};
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
  try {
    badArrayLike = Object.defineProperty({}, "length", {
      get: function() {
        throw isCallableMarker;
      }
    });
    isCallableMarker = {};
    reflectApply(function() {
      throw 42;
    }, null, badArrayLike);
  } catch (_) {
    if (_ !== isCallableMarker) {
      reflectApply = null;
    }
  }
} else {
  reflectApply = null;
}
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e) {
    return false;
  }
};
var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }
    fnToStr.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr$1 = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]";
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]";
var hasToStringTag$2 = typeof Symbol === "function" && !!Symbol.toStringTag;
var isIE68 = !(0 in [,]);
var isDDA = function isDocumentDotAll() {
  return false;
};
if (typeof document === "object") {
  var all = document.all;
  if (toStr$1.call(all) === toStr$1.call(document.all)) {
    isDDA = function isDocumentDotAll2(value) {
      if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
        try {
          var str = toStr$1.call(value);
          return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
        } catch (e) {
        }
      }
      return false;
    };
  }
}
var isCallable$1 = reflectApply ? function isCallable(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  try {
    reflectApply(value, null, badArrayLike);
  } catch (e) {
    if (e !== isCallableMarker) {
      return false;
    }
  }
  return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable2(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  if (hasToStringTag$2) {
    return tryFunctionObject(value);
  }
  if (isES6ClassFn(value)) {
    return false;
  }
  var strClass = toStr$1.call(value);
  if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
    return false;
  }
  return tryFunctionObject(value);
};
var isCallable3 = isCallable$1;
var toStr = Object.prototype.toString;
var hasOwnProperty$b = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray2(array2, iterator2, receiver) {
  for (var i2 = 0, len = array2.length; i2 < len; i2++) {
    if (hasOwnProperty$b.call(array2, i2)) {
      if (receiver == null) {
        iterator2(array2[i2], i2, array2);
      } else {
        iterator2.call(receiver, array2[i2], i2, array2);
      }
    }
  }
};
var forEachString = function forEachString2(string2, iterator2, receiver) {
  for (var i2 = 0, len = string2.length; i2 < len; i2++) {
    if (receiver == null) {
      iterator2(string2.charAt(i2), i2, string2);
    } else {
      iterator2.call(receiver, string2.charAt(i2), i2, string2);
    }
  }
};
var forEachObject = function forEachObject2(object2, iterator2, receiver) {
  for (var k in object2) {
    if (hasOwnProperty$b.call(object2, k)) {
      if (receiver == null) {
        iterator2(object2[k], k, object2);
      } else {
        iterator2.call(receiver, object2[k], k, object2);
      }
    }
  }
};
var forEach$2 = function forEach(list, iterator2, thisArg) {
  if (!isCallable3(iterator2)) {
    throw new TypeError("iterator must be a function");
  }
  var receiver;
  if (arguments.length >= 3) {
    receiver = thisArg;
  }
  if (toStr.call(list) === "[object Array]") {
    forEachArray(list, iterator2, receiver);
  } else if (typeof list === "string") {
    forEachString(list, iterator2, receiver);
  } else {
    forEachObject(list, iterator2, receiver);
  }
};
var forEach_1 = forEach$2;
var possibleNames = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
];
var g$3 = typeof globalThis === "undefined" ? commonjsGlobal$1 : globalThis;
var availableTypedArrays$2 = function availableTypedArrays() {
  var out = [];
  for (var i2 = 0; i2 < possibleNames.length; i2++) {
    if (typeof g$3[possibleNames[i2]] === "function") {
      out[out.length] = possibleNames[i2];
    }
  }
  return out;
};
var GetIntrinsic2 = getIntrinsic;
var $gOPD = GetIntrinsic2("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) {
  try {
    $gOPD([], "length");
  } catch (e) {
    $gOPD = null;
  }
}
var gopd = $gOPD;
var forEach$1 = forEach_1;
var availableTypedArrays$1 = availableTypedArrays$2;
var callBound$1 = callBound$3;
var $toString$1 = callBound$1("Object.prototype.toString");
var hasToStringTag$1 = shams();
var gOPD$1 = gopd;
var g$2 = typeof globalThis === "undefined" ? commonjsGlobal$1 : globalThis;
var typedArrays$1 = availableTypedArrays$1();
var $indexOf = callBound$1("Array.prototype.indexOf", true) || function indexOf(array2, value) {
  for (var i2 = 0; i2 < array2.length; i2 += 1) {
    if (array2[i2] === value) {
      return i2;
    }
  }
  return -1;
};
var $slice$1 = callBound$1("String.prototype.slice");
var toStrTags$1 = {};
var getPrototypeOf$1 = Object.getPrototypeOf;
if (hasToStringTag$1 && gOPD$1 && getPrototypeOf$1) {
  forEach$1(typedArrays$1, function(typedArray2) {
    var arr = new g$2[typedArray2]();
    if (Symbol.toStringTag in arr) {
      var proto = getPrototypeOf$1(arr);
      var descriptor = gOPD$1(proto, Symbol.toStringTag);
      if (!descriptor) {
        var superProto = getPrototypeOf$1(proto);
        descriptor = gOPD$1(superProto, Symbol.toStringTag);
      }
      toStrTags$1[typedArray2] = descriptor.get;
    }
  });
}
var tryTypedArrays$1 = function tryAllTypedArrays(value) {
  var anyTrue = false;
  forEach$1(toStrTags$1, function(getter, typedArray2) {
    if (!anyTrue) {
      try {
        anyTrue = getter.call(value) === typedArray2;
      } catch (e) {
      }
    }
  });
  return anyTrue;
};
var isTypedArray$4 = function isTypedArray(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (!hasToStringTag$1 || !(Symbol.toStringTag in value)) {
    var tag2 = $slice$1($toString$1(value), 8, -1);
    return $indexOf(typedArrays$1, tag2) > -1;
  }
  if (!gOPD$1) {
    return false;
  }
  return tryTypedArrays$1(value);
};
var forEach2 = forEach_1;
var availableTypedArrays2 = availableTypedArrays$2;
var callBound = callBound$3;
var gOPD = gopd;
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = shams();
var g$1 = typeof globalThis === "undefined" ? commonjsGlobal$1 : globalThis;
var typedArrays = availableTypedArrays2();
var $slice = callBound("String.prototype.slice");
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf;
if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach2(typedArrays, function(typedArray2) {
    if (typeof g$1[typedArray2] === "function") {
      var arr = new g$1[typedArray2]();
      if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf(proto);
          descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray2] = descriptor.get;
      }
    }
  });
}
var tryTypedArrays = function tryAllTypedArrays2(value) {
  var foundName = false;
  forEach2(toStrTags, function(getter, typedArray2) {
    if (!foundName) {
      try {
        var name2 = getter.call(value);
        if (name2 === typedArray2) {
          foundName = name2;
        }
      } catch (e) {
      }
    }
  });
  return foundName;
};
var isTypedArray$3 = isTypedArray$4;
var whichTypedArray = function whichTypedArray2(value) {
  if (!isTypedArray$3(value)) {
    return false;
  }
  if (!hasToStringTag || !(Symbol.toStringTag in value)) {
    return $slice($toString(value), 8, -1);
  }
  return tryTypedArrays(value);
};
(function(exports) {
  var isArgumentsObject = isArguments$4;
  var isGeneratorFunction$1 = isGeneratorFunction;
  var whichTypedArray$1 = whichTypedArray;
  var isTypedArray3 = isTypedArray$4;
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  var BigIntSupported = typeof BigInt !== "undefined";
  var SymbolSupported = typeof Symbol !== "undefined";
  var ObjectToString = uncurryThis(Object.prototype.toString);
  var numberValue2 = uncurryThis(Number.prototype.valueOf);
  var stringValue2 = uncurryThis(String.prototype.valueOf);
  var booleanValue2 = uncurryThis(Boolean.prototype.valueOf);
  if (BigIntSupported) {
    var bigIntValue2 = uncurryThis(BigInt.prototype.valueOf);
  }
  if (SymbolSupported) {
    var symbolValue2 = uncurryThis(Symbol.prototype.valueOf);
  }
  function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") {
      return false;
    }
    try {
      prototypeValueOf(value);
      return true;
    } catch (e) {
      return false;
    }
  }
  exports.isArgumentsObject = isArgumentsObject;
  exports.isGeneratorFunction = isGeneratorFunction$1;
  exports.isTypedArray = isTypedArray3;
  function isPromise2(input2) {
    return typeof Promise !== "undefined" && input2 instanceof Promise || input2 !== null && typeof input2 === "object" && typeof input2.then === "function" && typeof input2.catch === "function";
  }
  exports.isPromise = isPromise2;
  function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(value);
    }
    return isTypedArray3(value) || isDataView(value);
  }
  exports.isArrayBufferView = isArrayBufferView;
  function isUint8Array(value) {
    return whichTypedArray$1(value) === "Uint8Array";
  }
  exports.isUint8Array = isUint8Array;
  function isUint8ClampedArray(value) {
    return whichTypedArray$1(value) === "Uint8ClampedArray";
  }
  exports.isUint8ClampedArray = isUint8ClampedArray;
  function isUint16Array(value) {
    return whichTypedArray$1(value) === "Uint16Array";
  }
  exports.isUint16Array = isUint16Array;
  function isUint32Array(value) {
    return whichTypedArray$1(value) === "Uint32Array";
  }
  exports.isUint32Array = isUint32Array;
  function isInt8Array(value) {
    return whichTypedArray$1(value) === "Int8Array";
  }
  exports.isInt8Array = isInt8Array;
  function isInt16Array(value) {
    return whichTypedArray$1(value) === "Int16Array";
  }
  exports.isInt16Array = isInt16Array;
  function isInt32Array(value) {
    return whichTypedArray$1(value) === "Int32Array";
  }
  exports.isInt32Array = isInt32Array;
  function isFloat32Array(value) {
    return whichTypedArray$1(value) === "Float32Array";
  }
  exports.isFloat32Array = isFloat32Array;
  function isFloat64Array(value) {
    return whichTypedArray$1(value) === "Float64Array";
  }
  exports.isFloat64Array = isFloat64Array;
  function isBigInt64Array(value) {
    return whichTypedArray$1(value) === "BigInt64Array";
  }
  exports.isBigInt64Array = isBigInt64Array;
  function isBigUint64Array(value) {
    return whichTypedArray$1(value) === "BigUint64Array";
  }
  exports.isBigUint64Array = isBigUint64Array;
  function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
  }
  isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
  function isMap2(value) {
    if (typeof Map === "undefined") {
      return false;
    }
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
  }
  exports.isMap = isMap2;
  function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
  }
  isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
  function isSet2(value) {
    if (typeof Set === "undefined") {
      return false;
    }
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
  }
  exports.isSet = isSet2;
  function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
  }
  isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
  function isWeakMap(value) {
    if (typeof WeakMap === "undefined") {
      return false;
    }
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
  }
  exports.isWeakMap = isWeakMap;
  function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
  }
  isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
  function isWeakSet(value) {
    return isWeakSetToString(value);
  }
  exports.isWeakSet = isWeakSet;
  function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
  }
  isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
  function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") {
      return false;
    }
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
  }
  exports.isArrayBuffer = isArrayBuffer;
  function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
  }
  isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
  function isDataView(value) {
    if (typeof DataView === "undefined") {
      return false;
    }
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
  }
  exports.isDataView = isDataView;
  var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
  function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
  }
  function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") {
      return false;
    }
    if (typeof isSharedArrayBufferToString.working === "undefined") {
      isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    }
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
  }
  exports.isSharedArrayBuffer = isSharedArrayBuffer;
  function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
  }
  exports.isAsyncFunction = isAsyncFunction;
  function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
  }
  exports.isMapIterator = isMapIterator;
  function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
  }
  exports.isSetIterator = isSetIterator;
  function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
  }
  exports.isGeneratorObject = isGeneratorObject;
  function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
  }
  exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
  function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue2);
  }
  exports.isNumberObject = isNumberObject;
  function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue2);
  }
  exports.isStringObject = isStringObject;
  function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue2);
  }
  exports.isBooleanObject = isBooleanObject;
  function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue2);
  }
  exports.isBigIntObject = isBigIntObject;
  function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue2);
  }
  exports.isSymbolObject = isSymbolObject;
  function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
  }
  exports.isBoxedPrimitive = isBoxedPrimitive;
  function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
  }
  exports.isAnyArrayBuffer = isAnyArrayBuffer;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
    Object.defineProperty(exports, method, {
      enumerable: false,
      value: function() {
        throw new Error(method + " is not supported in userland");
      }
    });
  });
})(types);
var isBufferBrowser = function isBuffer(arg) {
  return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};
var inherits_browser = { exports: {} };
if (typeof Object.create === "function") {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
var inherits_browserExports = inherits_browser.exports;
(function(exports) {
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
    var keys2 = Object.keys(obj);
    var descriptors = {};
    for (var i2 = 0; i2 < keys2.length; i2++) {
      descriptors[keys2[i2]] = Object.getOwnPropertyDescriptor(obj, keys2[i2]);
    }
    return descriptors;
  };
  var formatRegExp = /%[sdj%]/g;
  exports.format = function(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        objects.push(inspect2(arguments[i2]));
      }
      return objects.join(" ");
    }
    var i2 = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x2) {
      if (x2 === "%%")
        return "%";
      if (i2 >= len)
        return x2;
      switch (x2) {
        case "%s":
          return String(args[i2++]);
        case "%d":
          return Number(args[i2++]);
        case "%j":
          try {
            return JSON.stringify(args[i2++]);
          } catch (_) {
            return "[Circular]";
          }
        default:
          return x2;
      }
    });
    for (var x = args[i2]; i2 < len; x = args[++i2]) {
      if (isNull(x) || !isObject2(x)) {
        str += " " + x;
      } else {
        str += " " + inspect2(x);
      }
    }
    return str;
  };
  exports.deprecate = function(fn2, msg) {
    if (typeof process !== "undefined" && process.noDeprecation === true) {
      return fn2;
    }
    if (typeof process === "undefined") {
      return function() {
        return exports.deprecate(fn2, msg).apply(this, arguments);
      };
    }
    var warned2 = false;
    function deprecated2() {
      if (!warned2) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned2 = true;
      }
      return fn2.apply(this, arguments);
    }
    return deprecated2;
  };
  var debugs = {};
  var debugEnvRegex = /^$/;
  if (process.env.NODE_DEBUG) {
    var debugEnv = process.env.NODE_DEBUG;
    debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
    debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
  }
  exports.debuglog = function(set3) {
    set3 = set3.toUpperCase();
    if (!debugs[set3]) {
      if (debugEnvRegex.test(set3)) {
        var pid = process.pid;
        debugs[set3] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error("%s %d: %s", set3, pid, msg);
        };
      } else {
        debugs[set3] = function() {
        };
      }
    }
    return debugs[set3];
  };
  function inspect2(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3)
      ctx.depth = arguments[2];
    if (arguments.length >= 4)
      ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports._extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden))
      ctx.showHidden = false;
    if (isUndefined(ctx.depth))
      ctx.depth = 2;
    if (isUndefined(ctx.colors))
      ctx.colors = false;
    if (isUndefined(ctx.customInspect))
      ctx.customInspect = true;
    if (ctx.colors)
      ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  exports.inspect = inspect2;
  inspect2.colors = {
    "bold": [1, 22],
    "italic": [3, 23],
    "underline": [4, 24],
    "inverse": [7, 27],
    "white": [37, 39],
    "grey": [90, 39],
    "black": [30, 39],
    "blue": [34, 39],
    "cyan": [36, 39],
    "green": [32, 39],
    "magenta": [35, 39],
    "red": [31, 39],
    "yellow": [33, 39]
  };
  inspect2.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
  };
  function stylizeWithColor(str, styleType) {
    var style = inspect2.styles[styleType];
    if (style) {
      return "\x1B[" + inspect2.colors[style][0] + "m" + str + "\x1B[" + inspect2.colors[style][1] + "m";
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array2) {
    var hash = {};
    array2.forEach(function(val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction2(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys2 = Object.keys(value);
    var visibleKeys = arrayToHash(keys2);
    if (ctx.showHidden) {
      keys2 = Object.getOwnPropertyNames(value);
    }
    if (isError(value) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0)) {
      return formatError(value);
    }
    if (keys2.length === 0) {
      if (isFunction2(value)) {
        var name2 = value.name ? ": " + value.name : "";
        return ctx.stylize("[Function" + name2 + "]", "special");
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), "date");
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
    var base = "", array2 = false, braces = ["{", "}"];
    if (isArray2(value)) {
      array2 = true;
      braces = ["[", "]"];
    }
    if (isFunction2(value)) {
      var n2 = value.name ? ": " + value.name : "";
      base = " [Function" + n2 + "]";
    }
    if (isRegExp(value)) {
      base = " " + RegExp.prototype.toString.call(value);
    }
    if (isDate(value)) {
      base = " " + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
      base = " " + formatError(value);
    }
    if (keys2.length === 0 && (!array2 || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      } else {
        return ctx.stylize("[Object]", "special");
      }
    }
    ctx.seen.push(value);
    var output;
    if (array2) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys2);
    } else {
      output = keys2.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array2);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
      var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return ctx.stylize(simple, "string");
    }
    if (isNumber(value))
      return ctx.stylize("" + value, "number");
    if (isBoolean(value))
      return ctx.stylize("" + value, "boolean");
    if (isNull(value))
      return ctx.stylize("null", "null");
  }
  function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys2) {
    var output = [];
    for (var i2 = 0, l2 = value.length; i2 < l2; ++i2) {
      if (hasOwnProperty2(value, String(i2))) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          String(i2),
          true
        ));
      } else {
        output.push("");
      }
    }
    keys2.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          key,
          true
        ));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array2) {
    var name2, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize("[Getter/Setter]", "special");
      } else {
        str = ctx.stylize("[Getter]", "special");
      }
    } else {
      if (desc.set) {
        str = ctx.stylize("[Setter]", "special");
      }
    }
    if (!hasOwnProperty2(visibleKeys, key)) {
      name2 = "[" + key + "]";
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf("\n") > -1) {
          if (array2) {
            str = str.split("\n").map(function(line) {
              return "  " + line;
            }).join("\n").slice(2);
          } else {
            str = "\n" + str.split("\n").map(function(line) {
              return "   " + line;
            }).join("\n");
          }
        }
      } else {
        str = ctx.stylize("[Circular]", "special");
      }
    }
    if (isUndefined(name2)) {
      if (array2 && key.match(/^\d+$/)) {
        return str;
      }
      name2 = JSON.stringify("" + key);
      if (name2.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name2 = name2.slice(1, -1);
        name2 = ctx.stylize(name2, "name");
      } else {
        name2 = name2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name2 = ctx.stylize(name2, "string");
      }
    }
    return name2 + ": " + str;
  }
  function reduceToSingleString(output, base, braces) {
    var length2 = output.reduce(function(prev, cur) {
      if (cur.indexOf("\n") >= 0)
        ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length2 > 60) {
      return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    }
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
  }
  exports.types = types;
  function isArray2(ar) {
    return Array.isArray(ar);
  }
  exports.isArray = isArray2;
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  exports.isBoolean = isBoolean;
  function isNull(arg) {
    return arg === null;
  }
  exports.isNull = isNull;
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports.isNullOrUndefined = isNullOrUndefined;
  function isNumber(arg) {
    return typeof arg === "number";
  }
  exports.isNumber = isNumber;
  function isString(arg) {
    return typeof arg === "string";
  }
  exports.isString = isString;
  function isSymbol(arg) {
    return typeof arg === "symbol";
  }
  exports.isSymbol = isSymbol;
  function isUndefined(arg) {
    return arg === void 0;
  }
  exports.isUndefined = isUndefined;
  function isRegExp(re2) {
    return isObject2(re2) && objectToString2(re2) === "[object RegExp]";
  }
  exports.isRegExp = isRegExp;
  exports.types.isRegExp = isRegExp;
  function isObject2(arg) {
    return typeof arg === "object" && arg !== null;
  }
  exports.isObject = isObject2;
  function isDate(d) {
    return isObject2(d) && objectToString2(d) === "[object Date]";
  }
  exports.isDate = isDate;
  exports.types.isDate = isDate;
  function isError(e) {
    return isObject2(e) && (objectToString2(e) === "[object Error]" || e instanceof Error);
  }
  exports.isError = isError;
  exports.types.isNativeError = isError;
  function isFunction2(arg) {
    return typeof arg === "function";
  }
  exports.isFunction = isFunction2;
  function isPrimitive2(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
  }
  exports.isPrimitive = isPrimitive2;
  exports.isBuffer = isBufferBrowser;
  function objectToString2(o) {
    return Object.prototype.toString.call(o);
  }
  function pad(n2) {
    return n2 < 10 ? "0" + n2.toString(10) : n2.toString(10);
  }
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function timestamp() {
    var d = /* @__PURE__ */ new Date();
    var time = [
      pad(d.getHours()),
      pad(d.getMinutes()),
      pad(d.getSeconds())
    ].join(":");
    return [d.getDate(), months[d.getMonth()], time].join(" ");
  }
  exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
  };
  exports.inherits = inherits_browserExports;
  exports._extend = function(origin, add) {
    if (!add || !isObject2(add))
      return origin;
    var keys2 = Object.keys(add);
    var i2 = keys2.length;
    while (i2--) {
      origin[keys2[i2]] = add[keys2[i2]];
    }
    return origin;
  };
  function hasOwnProperty2(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
  exports.promisify = function promisify(original) {
    if (typeof original !== "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
      var fn2 = original[kCustomPromisifiedSymbol];
      if (typeof fn2 !== "function") {
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      }
      Object.defineProperty(fn2, kCustomPromisifiedSymbol, {
        value: fn2,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return fn2;
    }
    function fn2() {
      var promiseResolve, promiseReject;
      var promise2 = new Promise(function(resolve2, reject) {
        promiseResolve = resolve2;
        promiseReject = reject;
      });
      var args = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        args.push(arguments[i2]);
      }
      args.push(function(err, value) {
        if (err) {
          promiseReject(err);
        } else {
          promiseResolve(value);
        }
      });
      try {
        original.apply(this, args);
      } catch (err) {
        promiseReject(err);
      }
      return promise2;
    }
    Object.setPrototypeOf(fn2, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol)
      Object.defineProperty(fn2, kCustomPromisifiedSymbol, {
        value: fn2,
        enumerable: false,
        writable: false,
        configurable: true
      });
    return Object.defineProperties(
      fn2,
      getOwnPropertyDescriptors(original)
    );
  };
  exports.promisify.custom = kCustomPromisifiedSymbol;
  function callbackifyOnRejected(reason, cb) {
    if (!reason) {
      var newReason = new Error("Promise was rejected with a falsy value");
      newReason.reason = reason;
      reason = newReason;
    }
    return cb(reason);
  }
  function callbackify(original) {
    if (typeof original !== "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function callbackified() {
      var args = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        args.push(arguments[i2]);
      }
      var maybeCb = args.pop();
      if (typeof maybeCb !== "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var self2 = this;
      var cb = function() {
        return maybeCb.apply(self2, arguments);
      };
      original.apply(this, args).then(
        function(ret) {
          process.nextTick(cb.bind(null, null, ret));
        },
        function(rej) {
          process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        }
      );
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(
      callbackified,
      getOwnPropertyDescriptors(original)
    );
    return callbackified;
  }
  exports.callbackify = callbackify;
})(util$1);
const require$$0$1 = /* @__PURE__ */ getDefaultExportFromCjs(util$1);
var loupe$2 = { exports: {} };
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module, exports) {
  (function(global2, factory) {
    factory(exports);
  })(commonjsGlobal$1, function(exports2) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _slicedToArray(arr, i2) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArrayLimit(arr, i2) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor)
        n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ansiColors = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      // 5 & 6 are blinking
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      // 10-20 are fonts
      // 21-29 are resets for 1-9
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    };
    var styles = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    };
    var truncator = "…";
    function colorise(value, styleType) {
      var color = ansiColors[styles[styleType]] || ansiColors[styleType];
      if (!color) {
        return String(value);
      }
      return "\x1B[".concat(color[0], "m").concat(String(value), "\x1B[").concat(color[1], "m");
    }
    function normaliseOptions() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$showHidden = _ref.showHidden, showHidden = _ref$showHidden === void 0 ? false : _ref$showHidden, _ref$depth = _ref.depth, depth = _ref$depth === void 0 ? 2 : _ref$depth, _ref$colors = _ref.colors, colors = _ref$colors === void 0 ? false : _ref$colors, _ref$customInspect = _ref.customInspect, customInspect = _ref$customInspect === void 0 ? true : _ref$customInspect, _ref$showProxy = _ref.showProxy, showProxy = _ref$showProxy === void 0 ? false : _ref$showProxy, _ref$maxArrayLength = _ref.maxArrayLength, maxArrayLength = _ref$maxArrayLength === void 0 ? Infinity : _ref$maxArrayLength, _ref$breakLength = _ref.breakLength, breakLength = _ref$breakLength === void 0 ? Infinity : _ref$breakLength, _ref$seen = _ref.seen, seen = _ref$seen === void 0 ? [] : _ref$seen, _ref$truncate = _ref.truncate, truncate2 = _ref$truncate === void 0 ? Infinity : _ref$truncate, _ref$stylize = _ref.stylize, stylize = _ref$stylize === void 0 ? String : _ref$stylize;
      var options = {
        showHidden: Boolean(showHidden),
        depth: Number(depth),
        colors: Boolean(colors),
        customInspect: Boolean(customInspect),
        showProxy: Boolean(showProxy),
        maxArrayLength: Number(maxArrayLength),
        breakLength: Number(breakLength),
        truncate: Number(truncate2),
        seen,
        stylize
      };
      if (options.colors) {
        options.stylize = colorise;
      }
      return options;
    }
    function truncate(string2, length2) {
      var tail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : truncator;
      string2 = String(string2);
      var tailLength = tail.length;
      var stringLength = string2.length;
      if (tailLength > length2 && stringLength > tailLength) {
        return tail;
      }
      if (stringLength > length2 && stringLength > tailLength) {
        return "".concat(string2.slice(0, length2 - tailLength)).concat(tail);
      }
      return string2;
    }
    function inspectList(list, options, inspectItem) {
      var separator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
      inspectItem = inspectItem || options.inspect;
      var size = list.length;
      if (size === 0)
        return "";
      var originalLength = options.truncate;
      var output = "";
      var peek = "";
      var truncated = "";
      for (var i2 = 0; i2 < size; i2 += 1) {
        var last = i2 + 1 === list.length;
        var secondToLast = i2 + 2 === list.length;
        truncated = "".concat(truncator, "(").concat(list.length - i2, ")");
        var value = list[i2];
        options.truncate = originalLength - output.length - (last ? 0 : separator.length);
        var string2 = peek || inspectItem(value, options) + (last ? "" : separator);
        var nextLength = output.length + string2.length;
        var truncatedLength = nextLength + truncated.length;
        if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
          break;
        }
        if (!last && !secondToLast && truncatedLength > originalLength) {
          break;
        }
        peek = last ? "" : inspectItem(list[i2 + 1], options) + (secondToLast ? "" : separator);
        if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
          break;
        }
        output += string2;
        if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
          truncated = "".concat(truncator, "(").concat(list.length - i2 - 1, ")");
          break;
        }
        truncated = "";
      }
      return "".concat(output).concat(truncated);
    }
    function quoteComplexKey(key) {
      if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
        return key;
      }
      return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
    }
    function inspectProperty(_ref2, options) {
      var _ref3 = _slicedToArray(_ref2, 2), key = _ref3[0], value = _ref3[1];
      options.truncate -= 2;
      if (typeof key === "string") {
        key = quoteComplexKey(key);
      } else if (typeof key !== "number") {
        key = "[".concat(options.inspect(key, options), "]");
      }
      options.truncate -= key.length;
      value = options.inspect(value, options);
      return "".concat(key, ": ").concat(value);
    }
    function inspectArray(array2, options) {
      var nonIndexProperties = Object.keys(array2).slice(array2.length);
      if (!array2.length && !nonIndexProperties.length)
        return "[]";
      options.truncate -= 4;
      var listContents = inspectList(array2, options);
      options.truncate -= listContents.length;
      var propertyContents = "";
      if (nonIndexProperties.length) {
        propertyContents = inspectList(nonIndexProperties.map(function(key) {
          return [key, array2[key]];
        }), options, inspectProperty);
      }
      return "[ ".concat(listContents).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
    }
    var toString2 = Function.prototype.toString;
    var functionNameMatch2 = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
    function getFuncName2(aFunc) {
      if (typeof aFunc !== "function") {
        return null;
      }
      var name2 = "";
      if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
        var match = toString2.call(aFunc).match(functionNameMatch2);
        if (match) {
          name2 = match[1];
        }
      } else {
        name2 = aFunc.name;
      }
      return name2;
    }
    var getFuncName_12 = getFuncName2;
    var getArrayName = function getArrayName2(array2) {
      if (typeof Buffer === "function" && array2 instanceof Buffer) {
        return "Buffer";
      }
      if (array2[Symbol.toStringTag]) {
        return array2[Symbol.toStringTag];
      }
      return getFuncName_12(array2.constructor);
    };
    function inspectTypedArray(array2, options) {
      var name2 = getArrayName(array2);
      options.truncate -= name2.length + 4;
      var nonIndexProperties = Object.keys(array2).slice(array2.length);
      if (!array2.length && !nonIndexProperties.length)
        return "".concat(name2, "[]");
      var output = "";
      for (var i2 = 0; i2 < array2.length; i2++) {
        var string2 = "".concat(options.stylize(truncate(array2[i2], options.truncate), "number")).concat(i2 === array2.length - 1 ? "" : ", ");
        options.truncate -= string2.length;
        if (array2[i2] !== array2.length && options.truncate <= 3) {
          output += "".concat(truncator, "(").concat(array2.length - array2[i2] + 1, ")");
          break;
        }
        output += string2;
      }
      var propertyContents = "";
      if (nonIndexProperties.length) {
        propertyContents = inspectList(nonIndexProperties.map(function(key) {
          return [key, array2[key]];
        }), options, inspectProperty);
      }
      return "".concat(name2, "[ ").concat(output).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
    }
    function inspectDate(dateObject, options) {
      var stringRepresentation = dateObject.toJSON();
      if (stringRepresentation === null) {
        return "Invalid Date";
      }
      var split = stringRepresentation.split("T");
      var date2 = split[0];
      return options.stylize("".concat(date2, "T").concat(truncate(split[1], options.truncate - date2.length - 1)), "date");
    }
    function inspectFunction(func, options) {
      var name2 = getFuncName_12(func);
      if (!name2) {
        return options.stylize("[Function]", "special");
      }
      return options.stylize("[Function ".concat(truncate(name2, options.truncate - 11), "]"), "special");
    }
    function inspectMapEntry(_ref, options) {
      var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
      options.truncate -= 4;
      key = options.inspect(key, options);
      options.truncate -= key.length;
      value = options.inspect(value, options);
      return "".concat(key, " => ").concat(value);
    }
    function mapToEntries(map2) {
      var entries = [];
      map2.forEach(function(value, key) {
        entries.push([key, value]);
      });
      return entries;
    }
    function inspectMap(map2, options) {
      var size = map2.size - 1;
      if (size <= 0) {
        return "Map{}";
      }
      options.truncate -= 7;
      return "Map{ ".concat(inspectList(mapToEntries(map2), options, inspectMapEntry), " }");
    }
    var isNaN2 = Number.isNaN || function(i2) {
      return i2 !== i2;
    };
    function inspectNumber(number2, options) {
      if (isNaN2(number2)) {
        return options.stylize("NaN", "number");
      }
      if (number2 === Infinity) {
        return options.stylize("Infinity", "number");
      }
      if (number2 === -Infinity) {
        return options.stylize("-Infinity", "number");
      }
      if (number2 === 0) {
        return options.stylize(1 / number2 === Infinity ? "+0" : "-0", "number");
      }
      return options.stylize(truncate(number2, options.truncate), "number");
    }
    function inspectBigInt(number2, options) {
      var nums = truncate(number2.toString(), options.truncate - 1);
      if (nums !== truncator)
        nums += "n";
      return options.stylize(nums, "bigint");
    }
    function inspectRegExp(value, options) {
      var flags = value.toString().split("/")[2];
      var sourceLength = options.truncate - (2 + flags.length);
      var source = value.source;
      return options.stylize("/".concat(truncate(source, sourceLength), "/").concat(flags), "regexp");
    }
    function arrayFromSet(set3) {
      var values = [];
      set3.forEach(function(value) {
        values.push(value);
      });
      return values;
    }
    function inspectSet(set3, options) {
      if (set3.size === 0)
        return "Set{}";
      options.truncate -= 7;
      return "Set{ ".concat(inspectList(arrayFromSet(set3), options), " }");
    }
    var stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g");
    var escapeCharacters = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    };
    var hex = 16;
    var unicodeLength = 4;
    function escape(char) {
      return escapeCharacters[char] || "\\u".concat("0000".concat(char.charCodeAt(0).toString(hex)).slice(-unicodeLength));
    }
    function inspectString(string2, options) {
      if (stringEscapeChars.test(string2)) {
        string2 = string2.replace(stringEscapeChars, escape);
      }
      return options.stylize("'".concat(truncate(string2, options.truncate - 2), "'"), "string");
    }
    function inspectSymbol(value) {
      if ("description" in Symbol.prototype) {
        return value.description ? "Symbol(".concat(value.description, ")") : "Symbol()";
      }
      return value.toString();
    }
    var getPromiseValue2 = function getPromiseValue3() {
      return "Promise{…}";
    };
    try {
      var _process$binding = process.binding("util"), getPromiseDetails = _process$binding.getPromiseDetails, kPending = _process$binding.kPending, kRejected = _process$binding.kRejected;
      if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
        getPromiseValue2 = function getPromiseValue3(value, options) {
          var _getPromiseDetails = getPromiseDetails(value), _getPromiseDetails2 = _slicedToArray(_getPromiseDetails, 2), state = _getPromiseDetails2[0], innerValue = _getPromiseDetails2[1];
          if (state === kPending) {
            return "Promise{<pending>}";
          }
          return "Promise".concat(state === kRejected ? "!" : "", "{").concat(options.inspect(innerValue, options), "}");
        };
      }
    } catch (notNode) {
    }
    var inspectPromise = getPromiseValue2;
    function inspectObject(object2, options) {
      var properties = Object.getOwnPropertyNames(object2);
      var symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object2) : [];
      if (properties.length === 0 && symbols.length === 0) {
        return "{}";
      }
      options.truncate -= 4;
      options.seen = options.seen || [];
      if (options.seen.indexOf(object2) >= 0) {
        return "[Circular]";
      }
      options.seen.push(object2);
      var propertyContents = inspectList(properties.map(function(key) {
        return [key, object2[key]];
      }), options, inspectProperty);
      var symbolContents = inspectList(symbols.map(function(key) {
        return [key, object2[key]];
      }), options, inspectProperty);
      options.seen.pop();
      var sep = "";
      if (propertyContents && symbolContents) {
        sep = ", ";
      }
      return "{ ".concat(propertyContents).concat(sep).concat(symbolContents, " }");
    }
    var toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
    function inspectClass(value, options) {
      var name2 = "";
      if (toStringTag && toStringTag in value) {
        name2 = value[toStringTag];
      }
      name2 = name2 || getFuncName_12(value.constructor);
      if (!name2 || name2 === "_class") {
        name2 = "<Anonymous Class>";
      }
      options.truncate -= name2.length;
      return "".concat(name2).concat(inspectObject(value, options));
    }
    function inspectArguments(args, options) {
      if (args.length === 0)
        return "Arguments[]";
      options.truncate -= 13;
      return "Arguments[ ".concat(inspectList(args, options), " ]");
    }
    var errorKeys = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
    function inspectObject$1(error2, options) {
      var properties = Object.getOwnPropertyNames(error2).filter(function(key) {
        return errorKeys.indexOf(key) === -1;
      });
      var name2 = error2.name;
      options.truncate -= name2.length;
      var message = "";
      if (typeof error2.message === "string") {
        message = truncate(error2.message, options.truncate);
      } else {
        properties.unshift("message");
      }
      message = message ? ": ".concat(message) : "";
      options.truncate -= message.length + 5;
      var propertyContents = inspectList(properties.map(function(key) {
        return [key, error2[key]];
      }), options, inspectProperty);
      return "".concat(name2).concat(message).concat(propertyContents ? " { ".concat(propertyContents, " }") : "");
    }
    function inspectAttribute(_ref, options) {
      var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
      options.truncate -= 3;
      if (!value) {
        return "".concat(options.stylize(key, "yellow"));
      }
      return "".concat(options.stylize(key, "yellow"), "=").concat(options.stylize('"'.concat(value, '"'), "string"));
    }
    function inspectHTMLCollection(collection, options) {
      return inspectList(collection, options, inspectHTML, "\n");
    }
    function inspectHTML(element, options) {
      var properties = element.getAttributeNames();
      var name2 = element.tagName.toLowerCase();
      var head = options.stylize("<".concat(name2), "special");
      var headClose = options.stylize(">", "special");
      var tail = options.stylize("</".concat(name2, ">"), "special");
      options.truncate -= name2.length * 2 + 5;
      var propertyContents = "";
      if (properties.length > 0) {
        propertyContents += " ";
        propertyContents += inspectList(properties.map(function(key) {
          return [key, element.getAttribute(key)];
        }), options, inspectAttribute, " ");
      }
      options.truncate -= propertyContents.length;
      var truncate2 = options.truncate;
      var children = inspectHTMLCollection(element.children, options);
      if (children && children.length > truncate2) {
        children = "".concat(truncator, "(").concat(element.children.length, ")");
      }
      return "".concat(head).concat(propertyContents).concat(headClose).concat(children).concat(tail);
    }
    var symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
    var chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
    var nodeInspect2 = false;
    try {
      var nodeUtil2 = require$$0;
      nodeInspect2 = nodeUtil2.inspect ? nodeUtil2.inspect.custom : false;
    } catch (noNodeInspect) {
      nodeInspect2 = false;
    }
    function FakeMap2() {
      this.key = "chai/loupe__" + Math.random() + Date.now();
    }
    FakeMap2.prototype = {
      // eslint-disable-next-line object-shorthand
      get: function get3(key) {
        return key[this.key];
      },
      // eslint-disable-next-line object-shorthand
      has: function has(key) {
        return this.key in key;
      },
      // eslint-disable-next-line object-shorthand
      set: function set3(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this.key, {
            // eslint-disable-next-line object-shorthand
            value,
            configurable: true
          });
        }
      }
    };
    var constructorMap = new (typeof WeakMap === "function" ? WeakMap : FakeMap2)();
    var stringTagMap = {};
    var baseTypesMap = {
      undefined: function undefined$12(value, options) {
        return options.stylize("undefined", "undefined");
      },
      null: function _null2(value, options) {
        return options.stylize(null, "null");
      },
      boolean: function boolean2(value, options) {
        return options.stylize(value, "boolean");
      },
      Boolean: function Boolean2(value, options) {
        return options.stylize(value, "boolean");
      },
      number: inspectNumber,
      Number: inspectNumber,
      bigint: inspectBigInt,
      BigInt: inspectBigInt,
      string: inspectString,
      String: inspectString,
      function: inspectFunction,
      Function: inspectFunction,
      symbol: inspectSymbol,
      // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
      Symbol: inspectSymbol,
      Array: inspectArray,
      Date: inspectDate,
      Map: inspectMap,
      Set: inspectSet,
      RegExp: inspectRegExp,
      Promise: inspectPromise,
      // WeakSet, WeakMap are totally opaque to us
      WeakSet: function WeakSet2(value, options) {
        return options.stylize("WeakSet{…}", "special");
      },
      WeakMap: function WeakMap2(value, options) {
        return options.stylize("WeakMap{…}", "special");
      },
      Arguments: inspectArguments,
      Int8Array: inspectTypedArray,
      Uint8Array: inspectTypedArray,
      Uint8ClampedArray: inspectTypedArray,
      Int16Array: inspectTypedArray,
      Uint16Array: inspectTypedArray,
      Int32Array: inspectTypedArray,
      Uint32Array: inspectTypedArray,
      Float32Array: inspectTypedArray,
      Float64Array: inspectTypedArray,
      Generator: function Generator() {
        return "";
      },
      DataView: function DataView2() {
        return "";
      },
      ArrayBuffer: function ArrayBuffer2() {
        return "";
      },
      Error: inspectObject$1,
      HTMLCollection: inspectHTMLCollection,
      NodeList: inspectHTMLCollection
    };
    var inspectCustom = function inspectCustom2(value, options, type2) {
      if (chaiInspect in value && typeof value[chaiInspect] === "function") {
        return value[chaiInspect](options);
      }
      if (nodeInspect2 && nodeInspect2 in value && typeof value[nodeInspect2] === "function") {
        return value[nodeInspect2](options.depth, options);
      }
      if ("inspect" in value && typeof value.inspect === "function") {
        return value.inspect(options.depth, options);
      }
      if ("constructor" in value && constructorMap.has(value.constructor)) {
        return constructorMap.get(value.constructor)(value, options);
      }
      if (stringTagMap[type2]) {
        return stringTagMap[type2](value, options);
      }
      return "";
    };
    var toString$12 = Object.prototype.toString;
    function inspect2(value, options) {
      options = normaliseOptions(options);
      options.inspect = inspect2;
      var _options = options, customInspect = _options.customInspect;
      var type2 = value === null ? "null" : _typeof(value);
      if (type2 === "object") {
        type2 = toString$12.call(value).slice(8, -1);
      }
      if (baseTypesMap[type2]) {
        return baseTypesMap[type2](value, options);
      }
      if (customInspect && value) {
        var output = inspectCustom(value, options, type2);
        if (output) {
          if (typeof output === "string")
            return output;
          return inspect2(output, options);
        }
      }
      var proto = value ? Object.getPrototypeOf(value) : false;
      if (proto === Object.prototype || proto === null) {
        return inspectObject(value, options);
      }
      if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
        return inspectHTML(value, options);
      }
      if ("constructor" in value) {
        if (value.constructor !== Object) {
          return inspectClass(value, options);
        }
        return inspectObject(value, options);
      }
      if (value === Object(value)) {
        return inspectObject(value, options);
      }
      return options.stylize(String(value), type2);
    }
    function registerConstructor(constructor, inspector) {
      if (constructorMap.has(constructor)) {
        return false;
      }
      constructorMap.set(constructor, inspector);
      return true;
    }
    function registerStringTag(stringTag2, inspector) {
      if (stringTag2 in stringTagMap) {
        return false;
      }
      stringTagMap[stringTag2] = inspector;
      return true;
    }
    var custom = chaiInspect;
    exports2.custom = custom;
    exports2.default = inspect2;
    exports2.inspect = inspect2;
    exports2.registerConstructor = registerConstructor;
    exports2.registerStringTag = registerStringTag;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
})(loupe$2, loupe$2.exports);
var loupeExports = loupe$2.exports;
const loupeImport = /* @__PURE__ */ getDefaultExportFromCjs(loupeExports);
const {
  AsymmetricMatcher: AsymmetricMatcher$2,
  DOMCollection: DOMCollection$1,
  DOMElement: DOMElement$1,
  Immutable: Immutable$1,
  ReactElement: ReactElement$1,
  ReactTestComponent: ReactTestComponent$1
} = plugins_1;
const PLUGINS$1 = [
  ReactTestComponent$1,
  ReactElement$1,
  DOMElement$1,
  DOMCollection$1,
  Immutable$1,
  AsymmetricMatcher$2
];
function stringify(object2, maxDepth = 10, { maxLength, ...options } = {}) {
  const MAX_LENGTH2 = maxLength ?? 1e4;
  let result;
  try {
    result = format_1$1(object2, {
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS$1,
      ...options
    });
  } catch {
    result = format_1$1(object2, {
      callToJSON: false,
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS$1,
      ...options
    });
  }
  return result.length >= MAX_LENGTH2 && maxDepth > 1 ? stringify(object2, Math.floor(maxDepth / 2)) : result;
}
function getSafeTimers() {
  const {
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate
  } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis;
  const {
    nextTick: safeNextTick
  } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis.process || { nextTick: (cb) => cb() };
  return {
    nextTick: safeNextTick,
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate
  };
}
const loupe$1 = typeof loupeImport.default === "function" ? loupeImport.default : loupeImport;
function format$3(...args) {
  return require$$0$1.format(...args);
}
function loupeInspect(obj, options = {}) {
  return loupe$1(obj, {
    depth: 2,
    truncate: options.truncateThreshold === 0 ? Infinity : options.truncateThreshold ?? 40
  });
}
function objDisplay$2(obj, options = {}) {
  const truncateThreshold = options.truncateThreshold ?? 40;
  const str = loupeInspect(obj, options);
  const type2 = Object.prototype.toString.call(obj);
  if (truncateThreshold && str.length >= truncateThreshold) {
    if (type2 === "[object Function]") {
      const fn2 = obj;
      return !fn2.name || fn2.name === "" ? "[Function]" : `[Function: ${fn2.name}]`;
    } else if (type2 === "[object Array]") {
      return `[ Array(${obj.length}) ]`;
    } else if (type2 === "[object Object]") {
      const keys2 = Object.keys(obj);
      const kstr = keys2.length > 2 ? `${keys2.splice(0, 2).join(", ")}, ...` : keys2.join(", ");
      return `{ Object (${kstr}) }`;
    } else {
      return str;
    }
  }
  return str;
}
function createSimpleStackTrace(options) {
  const { message = "error", stackTraceLimit = 1 } = options || {};
  const limit = Error.stackTraceLimit;
  const prepareStackTrace = Error.prepareStackTrace;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = (e) => e.stack;
  const err = new Error(message);
  const stackTrace = err.stack || "";
  Error.prepareStackTrace = prepareStackTrace;
  Error.stackTraceLimit = limit;
  return stackTrace;
}
function normalizeWindowsPath$2(input2 = "") {
  if (!input2 || !input2.includes("\\")) {
    return input2;
  }
  return input2.replace(/\\/g, "/");
}
const _IS_ABSOLUTE_RE$2 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd$1() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve$1 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath$2(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd$1();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute$2(path);
  }
  resolvedPath = normalizeString$2(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute$2(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString$2(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute$2 = function(p) {
  return _IS_ABSOLUTE_RE$2.test(p);
};
function extractLocation$1(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts)
    return [urlLike];
  return [parts[1], parts[2] || void 0, parts[3] || void 0];
}
function parseSingleStack$1(raw) {
  let line = raw.trim();
  if (line.includes("(eval "))
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation$1(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber)
    return null;
  if (method.startsWith("async "))
    method = method.slice(6);
  if (file.startsWith("file://"))
    file = file.slice(7);
  file = resolve$1(file);
  return {
    method,
    file,
    line: parseInt(lineNumber),
    column: parseInt(columnNumber)
  };
}
var concordance$1 = {};
var compare$e = {};
let Circular$3 = class Circular {
  constructor() {
    this.stack = /* @__PURE__ */ new Map();
  }
  add(descriptor) {
    if (this.stack.has(descriptor))
      throw new Error("Already in stack");
    if (descriptor.isItem !== true && descriptor.isMapEntry !== true && descriptor.isProperty !== true) {
      this.stack.set(descriptor, this.stack.size + 1);
    }
    return this;
  }
  delete(descriptor) {
    if (this.stack.has(descriptor)) {
      if (this.stack.get(descriptor) !== this.stack.size)
        throw new Error("Not on top of stack");
      this.stack.delete(descriptor);
    }
    return this;
  }
  has(descriptor) {
    return this.stack.has(descriptor);
  }
  get(descriptor) {
    return this.stack.has(descriptor) ? this.stack.get(descriptor) : 0;
  }
};
var Circular_1 = Circular$3;
const AMBIGUOUS$5 = Symbol("AMBIGUOUS");
const DEEP_EQUAL$i = Symbol("DEEP_EQUAL");
const SHALLOW_EQUAL$9 = Symbol("SHALLOW_EQUAL");
const UNEQUAL$q = Symbol("UNEQUAL");
var constants$s = {
  AMBIGUOUS: AMBIGUOUS$5,
  DEEP_EQUAL: DEEP_EQUAL$i,
  SHALLOW_EQUAL: SHALLOW_EQUAL$9,
  UNEQUAL: UNEQUAL$q
};
let Registry$1 = class Registry {
  constructor() {
    this.counter = 0;
    this.map = /* @__PURE__ */ new WeakMap();
  }
  has(value) {
    return this.map.has(value);
  }
  get(value) {
    return this.map.get(value).descriptor;
  }
  alloc(value) {
    const index = ++this.counter;
    const pointer2 = { descriptor: null, index };
    this.map.set(value, pointer2);
    return pointer2;
  }
};
var Registry_1 = Registry$1;
var _arguments = {};
var object$b = {};
var formatUtils$f = {};
const ACTUAL = Symbol("lineBuilder.gutters.ACTUAL");
const EXPECTED = Symbol("lineBuilder.gutters.EXPECTED");
function translateGutter(theme, invert, gutter) {
  if (invert) {
    if (gutter === ACTUAL)
      return theme.diffGutters.expected;
    if (gutter === EXPECTED)
      return theme.diffGutters.actual;
  } else {
    if (gutter === ACTUAL)
      return theme.diffGutters.actual;
    if (gutter === EXPECTED)
      return theme.diffGutters.expected;
  }
  return theme.diffGutters.padding;
}
class Line {
  constructor(isFirst, isLast, gutter, stringValue2) {
    this.isFirst = isFirst;
    this.isLast = isLast;
    this.gutter = gutter;
    this.stringValue = stringValue2;
  }
  *[Symbol.iterator]() {
    yield this;
  }
  get isEmpty() {
    return false;
  }
  get hasGutter() {
    return this.gutter !== null;
  }
  get isSingle() {
    return this.isFirst && this.isLast;
  }
  append(other) {
    return this.concat(other);
  }
  concat(other) {
    return new Collection().append(this).append(other);
  }
  toString(options) {
    if (options.diff === false)
      return this.stringValue;
    return translateGutter(options.theme, options.invert, this.gutter) + this.stringValue;
  }
  mergeWithInfix(infix, other) {
    if (other.isLine !== true) {
      return new Collection().append(this).mergeWithInfix(infix, other);
    }
    return new Line(this.isFirst, other.isLast, other.gutter, this.stringValue + infix + other.stringValue);
  }
  withFirstPrefixed(prefix) {
    if (!this.isFirst)
      return this;
    return new Line(true, this.isLast, this.gutter, prefix + this.stringValue);
  }
  withLastPostfixed(postfix) {
    if (!this.isLast)
      return this;
    return new Line(this.isFirst, true, this.gutter, this.stringValue + postfix);
  }
  stripFlags() {
    return new Line(false, false, this.gutter, this.stringValue);
  }
  decompose() {
    return new Collection().append(this).decompose();
  }
}
Object.defineProperty(Line.prototype, "isLine", { value: true });
class Collection {
  constructor() {
    this.buffer = [];
  }
  *[Symbol.iterator]() {
    for (const appended of this.buffer) {
      for (const line of appended)
        yield line;
    }
  }
  get isEmpty() {
    return this.buffer.length === 0;
  }
  get hasGutter() {
    for (const line of this) {
      if (line.hasGutter)
        return true;
    }
    return false;
  }
  get isSingle() {
    const iterator2 = this[Symbol.iterator]();
    iterator2.next();
    return iterator2.next().done === true;
  }
  append(lineOrLines) {
    if (!lineOrLines.isEmpty)
      this.buffer.push(lineOrLines);
    return this;
  }
  concat(other) {
    return new Collection().append(this).append(other);
  }
  toString(options) {
    let lines = this;
    if (options.invert) {
      lines = new Collection();
      let buffer = new Collection();
      let prev = null;
      for (const line of this) {
        if (line.gutter === ACTUAL) {
          if (prev !== null && prev.gutter !== ACTUAL && !buffer.isEmpty) {
            lines.append(buffer);
            buffer = new Collection();
          }
          buffer.append(line);
        } else if (line.gutter === EXPECTED) {
          lines.append(line);
        } else {
          if (!buffer.isEmpty) {
            lines.append(buffer);
            buffer = new Collection();
          }
          lines.append(line);
        }
        prev = line;
      }
      lines.append(buffer);
    }
    return Array.from(lines, (line) => line.toString(options)).join("\n");
  }
  mergeWithInfix(infix, from) {
    if (from.isEmpty)
      throw new Error("Cannot merge, `from` is empty.");
    const otherLines = Array.from(from);
    if (!otherLines[0].isFirst)
      throw new Error("Cannot merge, `from` has no first line.");
    const merged = new Collection();
    let seenLast = false;
    for (const line of this) {
      if (seenLast)
        throw new Error("Cannot merge line, the last line has already been seen.");
      if (!line.isLast) {
        merged.append(line);
        continue;
      }
      seenLast = true;
      for (const other of otherLines) {
        if (other.isFirst) {
          merged.append(line.mergeWithInfix(infix, other));
        } else {
          merged.append(other);
        }
      }
    }
    return merged;
  }
  withFirstPrefixed(prefix) {
    return new Collection().append(Array.from(this, (line) => line.withFirstPrefixed(prefix)));
  }
  withLastPostfixed(postfix) {
    return new Collection().append(Array.from(this, (line) => line.withLastPostfixed(postfix)));
  }
  stripFlags() {
    return new Collection().append(Array.from(this, (line) => line.stripFlags()));
  }
  decompose() {
    const first = { actual: new Collection(), expected: new Collection() };
    const last = { actual: new Collection(), expected: new Collection() };
    const remaining = new Collection();
    for (const line of this) {
      if (line.isFirst && line.gutter === ACTUAL) {
        first.actual.append(line);
      } else if (line.isFirst && line.gutter === EXPECTED) {
        first.expected.append(line);
      } else if (line.isLast && line.gutter === ACTUAL) {
        last.actual.append(line);
      } else if (line.isLast && line.gutter === EXPECTED) {
        last.expected.append(line);
      } else {
        remaining.append(line);
      }
    }
    return { first, last, remaining };
  }
}
Object.defineProperty(Collection.prototype, "isCollection", { value: true });
function setDefaultGutter(iterable, gutter) {
  return new Collection().append(Array.from(iterable, (line) => {
    return line.gutter === null ? new Line(line.isFirst, line.isLast, gutter, line.stringValue) : line;
  }));
}
var lineBuilder$i = {
  buffer() {
    return new Collection();
  },
  first(stringValue2) {
    return new Line(true, false, null, stringValue2);
  },
  last(stringValue2) {
    return new Line(false, true, null, stringValue2);
  },
  line(stringValue2) {
    return new Line(false, false, null, stringValue2);
  },
  single(stringValue2) {
    return new Line(true, true, null, stringValue2);
  },
  setDefaultGutter(lineOrCollection) {
    return lineOrCollection;
  },
  actual: {
    first(stringValue2) {
      return new Line(true, false, ACTUAL, stringValue2);
    },
    last(stringValue2) {
      return new Line(false, true, ACTUAL, stringValue2);
    },
    line(stringValue2) {
      return new Line(false, false, ACTUAL, stringValue2);
    },
    single(stringValue2) {
      return new Line(true, true, ACTUAL, stringValue2);
    },
    setDefaultGutter(lineOrCollection) {
      return setDefaultGutter(lineOrCollection, ACTUAL);
    }
  },
  expected: {
    first(stringValue2) {
      return new Line(true, false, EXPECTED, stringValue2);
    },
    last(stringValue2) {
      return new Line(false, true, EXPECTED, stringValue2);
    },
    line(stringValue2) {
      return new Line(false, false, EXPECTED, stringValue2);
    },
    single(stringValue2) {
      return new Line(true, true, EXPECTED, stringValue2);
    },
    setDefaultGutter(lineOrCollection) {
      return setDefaultGutter(lineOrCollection, EXPECTED);
    }
  }
};
const lineBuilder$h = lineBuilder$i;
function wrap(fromTheme, value) {
  return fromTheme.open + value + fromTheme.close;
}
formatUtils$f.wrap = wrap;
function formatCtorAndStringTag(theme, object2) {
  if (!object2.ctor)
    return wrap(theme.object.stringTag, object2.stringTag);
  let retval = wrap(theme.object.ctor, object2.ctor);
  if (object2.stringTag && object2.stringTag !== object2.ctor && object2.stringTag !== "Object") {
    retval += " " + wrap(theme.object.secondaryStringTag, object2.stringTag);
  }
  return retval;
}
formatUtils$f.formatCtorAndStringTag = formatCtorAndStringTag;
let ObjectFormatter$1 = class ObjectFormatter {
  constructor(object2, theme, indent) {
    this.object = object2;
    this.theme = theme;
    this.indent = indent;
    this.increaseIndent = true;
    this.innerLines = lineBuilder$h.buffer();
    this.pendingStats = null;
  }
  append(formatted, origin) {
    if (origin.isStats === true) {
      this.pendingStats = formatted;
    } else {
      if (this.pendingStats !== null) {
        if (!this.innerLines.isEmpty) {
          this.innerLines.append(this.pendingStats);
        }
        this.pendingStats = null;
      }
      this.innerLines.append(formatted);
    }
  }
  finalize() {
    const variant = this.object.isList ? this.theme.list : this.theme.object;
    const ctor = this.object.ctor;
    const stringTag2 = this.object.stringTag;
    const prefix = (ctor === "Array" || ctor === "Object") && ctor === stringTag2 ? "" : formatCtorAndStringTag(this.theme, this.object) + " ";
    if (this.innerLines.isEmpty) {
      return lineBuilder$h.single(prefix + variant.openBracket + variant.closeBracket);
    }
    return lineBuilder$h.first(prefix + variant.openBracket).concat(this.innerLines.withFirstPrefixed(this.indent.increase()).stripFlags()).append(lineBuilder$h.last(this.indent + variant.closeBracket));
  }
  maxDepth() {
    const variant = this.object.isList ? this.theme.list : this.theme.object;
    return lineBuilder$h.single(
      formatCtorAndStringTag(this.theme, this.object) + " " + variant.openBracket + " " + this.theme.maxDepth + " " + variant.closeBracket
    );
  }
  shouldFormat() {
    return true;
  }
  customize(methods) {
    if (methods.finalize) {
      this.finalize = () => methods.finalize(this.innerLines);
    }
    if (methods.maxDepth) {
      this.maxDepth = methods.maxDepth;
    }
    if (methods.shouldFormat) {
      this.shouldFormat = methods.shouldFormat;
    }
    return this;
  }
};
formatUtils$f.ObjectFormatter = ObjectFormatter$1;
class SingleValueFormatter {
  constructor(theme, finalizeFn, increaseIndent) {
    this.theme = theme;
    this.finalizeFn = finalizeFn;
    this.hasValue = false;
    this.increaseIndent = increaseIndent === true;
    this.value = null;
  }
  append(formatted) {
    if (this.hasValue)
      throw new Error("Formatter buffer can only take one formatted value.");
    this.hasValue = true;
    this.value = formatted;
  }
  finalize() {
    if (!this.hasValue)
      throw new Error("Formatter buffer never received a formatted value.");
    return this.finalizeFn(this.value);
  }
  maxDepth() {
    return this.finalizeFn(lineBuilder$h.single(this.theme.maxDepth));
  }
}
formatUtils$f.SingleValueFormatter = SingleValueFormatter;
function getObjectKeys$1(obj, excludeListItemAccessorsBelowLength) {
  const keys2 = [];
  let size = 0;
  const nameCandidates = Object.getOwnPropertyNames(obj).sort();
  const symbolCandidates = Object.getOwnPropertySymbols(obj);
  for (const name2 of nameCandidates) {
    let accept = true;
    if (excludeListItemAccessorsBelowLength > 0) {
      const index = Number(name2);
      accept = !Number.isInteger(index) || index < 0 || index >= excludeListItemAccessorsBelowLength;
    }
    if (accept && Object.getOwnPropertyDescriptor(obj, name2).enumerable) {
      keys2[size++] = name2;
    }
  }
  for (const symbol2 of symbolCandidates) {
    if (Object.getOwnPropertyDescriptor(obj, symbol2).enumerable) {
      keys2[size++] = symbol2;
    }
  }
  return { keys: keys2, size };
}
var getObjectKeys_1 = getObjectKeys$1;
var MAX_SAFE_INTEGER$3 = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$3;
}
var isLength_1 = isLength$3;
const isLength$2 = isLength_1;
const hop$1 = Object.prototype.hasOwnProperty;
function hasLength$1(obj) {
  return Array.isArray(obj) || hop$1.call(obj, "length") && isLength$2(obj.length) && (obj.length === 0 || "0" in obj);
}
var hasLength_1 = hasLength$1;
var stats$1 = {};
var recursorUtils$d = {};
const NOOP_RECURSOR$2 = {
  size: 0,
  next() {
    return null;
  }
};
recursorUtils$d.NOOP_RECURSOR = NOOP_RECURSOR$2;
function fork(recursor) {
  const buffer = [];
  return {
    shared() {
      const next = recursor();
      if (next !== null)
        buffer.push(next);
      return next;
    },
    recursor() {
      if (buffer.length > 0)
        return buffer.shift();
      return recursor();
    }
  };
}
recursorUtils$d.fork = fork;
function consumeDeep(recursor) {
  const stack = [recursor];
  while (stack.length > 0) {
    const subject = stack[stack.length - 1]();
    if (subject === null) {
      stack.pop();
      continue;
    }
    if (typeof subject.createRecursor === "function") {
      stack.push(subject.createRecursor());
    }
  }
}
recursorUtils$d.consumeDeep = consumeDeep;
function map$2(recursor, mapFn) {
  return () => {
    const next = recursor();
    if (next === null)
      return null;
    return mapFn(next);
  };
}
recursorUtils$d.map = map$2;
function replay(state, create) {
  if (!state) {
    const recursor = create();
    if (recursor === NOOP_RECURSOR$2) {
      state = recursor;
    } else {
      state = Object.assign({
        buffer: [],
        done: false
      }, recursor);
    }
  }
  if (state === NOOP_RECURSOR$2)
    return { state, recursor: state };
  let done = false;
  let index = 0;
  const next = () => {
    if (done)
      return null;
    let retval = state.buffer[index];
    if (retval === void 0) {
      retval = state.buffer[index] = state.next();
    }
    index++;
    if (retval === null) {
      done = true;
    }
    return retval;
  };
  return { state, recursor: { next, size: state.size } };
}
recursorUtils$d.replay = replay;
function sequence(first, second) {
  let fromFirst = true;
  return () => {
    if (fromFirst) {
      const next = first();
      if (next !== null)
        return next;
      fromFirst = false;
    }
    return second();
  };
}
recursorUtils$d.sequence = sequence;
function singleValue(value) {
  let done = false;
  return () => {
    if (done)
      return null;
    done = true;
    return value;
  };
}
recursorUtils$d.singleValue = singleValue;
function unshift$1(recursor, value) {
  return () => {
    if (value !== null) {
      const next = value;
      value = null;
      return next;
    }
    return recursor();
  };
}
recursorUtils$d.unshift = unshift$1;
const constants$r = constants$s;
const lineBuilder$g = lineBuilder$i;
const recursorUtils$c = recursorUtils$d;
const DEEP_EQUAL$h = constants$r.DEEP_EQUAL;
const UNEQUAL$p = constants$r.UNEQUAL;
function describeIterableRecursor(recursor) {
  return new IterableStats(recursor.size);
}
stats$1.describeIterableRecursor = describeIterableRecursor;
function describeListRecursor(recursor) {
  return new ListStats(recursor.size);
}
stats$1.describeListRecursor = describeListRecursor;
function describePropertyRecursor(recursor) {
  return new PropertyStats(recursor.size);
}
stats$1.describePropertyRecursor = describePropertyRecursor;
function deserializeIterableStats(size) {
  return new IterableStats(size);
}
stats$1.deserializeIterableStats = deserializeIterableStats;
function deserializeListStats(size) {
  return new ListStats(size);
}
stats$1.deserializeListStats = deserializeListStats;
function deserializePropertyStats(size) {
  return new PropertyStats(size);
}
stats$1.deserializePropertyStats = deserializePropertyStats;
const iterableTag = Symbol("IterableStats");
stats$1.iterableTag = iterableTag;
const listTag = Symbol("ListStats");
stats$1.listTag = listTag;
const propertyTag = Symbol("PropertyStats");
stats$1.propertyTag = propertyTag;
class Stats {
  constructor(size) {
    this.size = size;
  }
  formatDeep(theme) {
    return lineBuilder$g.single(theme.stats.separator);
  }
  prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape2) {
    if (expected.isStats !== true || expected.tag === this.tag)
      return null;
    const rhsFork = recursorUtils$c.fork(rhsRecursor);
    const initialExpected = expected;
    const missing = [];
    while (expected !== null && this.tag !== expected.tag) {
      missing.push(expected);
      expected = rhsFork.shared();
    }
    if (expected !== null && missing.length > 0) {
      return {
        multipleAreMissing: true,
        descriptors: missing,
        lhsRecursor: recursorUtils$c.unshift(lhsRecursor, this),
        // Use original `rhsRecursor`, not `rhsFork`, since the consumed
        // descriptors are returned with the `missing` array.
        rhsRecursor: recursorUtils$c.unshift(rhsRecursor, expected)
      };
    }
    const lhsFork = recursorUtils$c.fork(lhsRecursor);
    let actual = this;
    const extraneous = [];
    while (actual !== null && actual.tag !== initialExpected.tag) {
      extraneous.push(actual);
      actual = lhsFork.shared();
    }
    if (actual !== null && extraneous.length > 0) {
      return {
        multipleAreExtraneous: true,
        descriptors: extraneous,
        // Use original `lhsRecursor`, not `lhsFork`, since the consumed
        // descriptors are returned with the `extraneous` array.
        lhsRecursor: recursorUtils$c.unshift(lhsRecursor, actual),
        rhsRecursor: recursorUtils$c.unshift(rhsFork.recursor, initialExpected)
      };
    }
    return null;
  }
  serialize() {
    return this.size;
  }
}
Object.defineProperty(Stats.prototype, "isStats", { value: true });
class IterableStats extends Stats {
  compare(expected) {
    return expected.tag === iterableTag && this.size === expected.size ? DEEP_EQUAL$h : UNEQUAL$p;
  }
}
Object.defineProperty(IterableStats.prototype, "tag", { value: iterableTag });
class ListStats extends Stats {
  compare(expected) {
    return expected.tag === listTag && this.size === expected.size ? DEEP_EQUAL$h : UNEQUAL$p;
  }
}
Object.defineProperty(ListStats.prototype, "tag", { value: listTag });
class PropertyStats extends Stats {
  compare(expected) {
    return expected.tag === propertyTag && this.size === expected.size ? DEEP_EQUAL$h : UNEQUAL$p;
  }
}
Object.defineProperty(PropertyStats.prototype, "tag", { value: propertyTag });
const constants$q = constants$s;
const ObjectFormatter2 = formatUtils$f.ObjectFormatter;
const getObjectKeys = getObjectKeys_1;
const hasLength = hasLength_1;
const stats = stats$1;
const recursorUtils$b = recursorUtils$d;
const DEEP_EQUAL$g = constants$q.DEEP_EQUAL;
const SHALLOW_EQUAL$8 = constants$q.SHALLOW_EQUAL;
const UNEQUAL$o = constants$q.UNEQUAL;
function describe$r(props) {
  const isArray2 = props.stringTag === "Array";
  const object2 = props.value;
  return new DescribedObjectValue(Object.assign({
    isArray: isArray2,
    isIterable: object2[Symbol.iterator] !== void 0,
    isList: isArray2 || hasLength(object2)
  }, props));
}
object$b.describe = describe$r;
function deserialize$g(state, recursor) {
  return new DeserializedObjectValue(state, recursor);
}
object$b.deserialize = deserialize$g;
const tag$m = Symbol("ObjectValue");
object$b.tag = tag$m;
class ObjectValue {
  constructor(props) {
    this.ctor = props.ctor;
    this.pointer = props.pointer;
    this.stringTag = props.stringTag;
    this.isArray = props.isArray === true;
    this.isIterable = props.isIterable === true;
    this.isList = props.isList === true;
  }
  compare(expected) {
    if (this.tag !== expected.tag)
      return UNEQUAL$o;
    if (this.stringTag !== expected.stringTag || !this.hasSameCtor(expected))
      return UNEQUAL$o;
    return SHALLOW_EQUAL$8;
  }
  hasSameCtor(expected) {
    return this.ctor === expected.ctor;
  }
  formatShallow(theme, indent) {
    return new ObjectFormatter2(this, theme, indent);
  }
  serialize() {
    return [
      this.ctor,
      this.pointer,
      this.stringTag,
      this.isArray,
      this.isIterable,
      this.isList
    ];
  }
}
Object.defineProperty(ObjectValue.prototype, "isComplex", { value: true });
Object.defineProperty(ObjectValue.prototype, "tag", { value: tag$m });
object$b.ObjectValue = ObjectValue;
const DescribedObjectValue = DescribedMixin$1(ObjectValue);
const DeserializedObjectValue = DeserializedMixin$1(ObjectValue);
function DescribedMixin$1(base) {
  return class extends base {
    constructor(props) {
      super(props);
      this.value = props.value;
      this.describeAny = props.describeAny;
      this.describeItem = props.describeItem;
      this.describeMapEntry = props.describeMapEntry;
      this.describeProperty = props.describeProperty;
      this.iterableState = null;
      this.listState = null;
      this.propertyState = null;
    }
    compare(expected) {
      return this.value === expected.value ? DEEP_EQUAL$g : super.compare(expected);
    }
    createPropertyRecursor() {
      const objectKeys = getObjectKeys(this.value, this.isList ? this.value.length : 0);
      const size = objectKeys.size;
      if (size === 0)
        return recursorUtils$b.NOOP_RECURSOR;
      let index = 0;
      const next = () => {
        if (index === size)
          return null;
        const key = objectKeys.keys[index++];
        return this.describeProperty(key, this.describeAny(this.value[key]));
      };
      return { size, next };
    }
    createListRecursor() {
      if (!this.isList)
        return recursorUtils$b.NOOP_RECURSOR;
      const size = this.value.length;
      if (size === 0)
        return recursorUtils$b.NOOP_RECURSOR;
      let index = 0;
      const next = () => {
        if (index === size)
          return null;
        const current = index;
        index++;
        return this.describeItem(current, this.describeAny(this.value[current]));
      };
      return { size, next };
    }
    createIterableRecursor() {
      if (this.isArray || !this.isIterable)
        return recursorUtils$b.NOOP_RECURSOR;
      const iterator2 = this.value[Symbol.iterator]();
      let first = iterator2.next();
      let done = false;
      let size = -1;
      if (first.done) {
        if (first.value === void 0) {
          size = 0;
          done = true;
        } else {
          size = 1;
        }
      }
      let index = 0;
      const next = () => {
        if (done)
          return null;
        while (!done) {
          const current = first || iterator2.next();
          if (current === first) {
            first = null;
          }
          if (current.done) {
            done = true;
          }
          const item2 = current.value;
          if (done && item2 === void 0)
            return null;
          if (this.isList && this.value[index] === item2) {
            index++;
          } else {
            return this.describeItem(index++, this.describeAny(item2));
          }
        }
      };
      return { size, next };
    }
    createRecursor() {
      let recursedProperty = false;
      let recursedList = false;
      let recursedIterable = false;
      let recursor = null;
      return () => {
        let retval = null;
        do {
          if (recursor !== null) {
            retval = recursor.next();
            if (retval === null) {
              recursor = null;
            }
          }
          while (recursor === null && (!recursedList || !recursedProperty || !recursedIterable)) {
            if (!recursedList) {
              const replay2 = recursorUtils$b.replay(this.listState, () => this.createListRecursor());
              this.listState = replay2.state;
              recursor = replay2.recursor;
              recursedList = true;
              if (recursor !== recursorUtils$b.NOOP_RECURSOR) {
                retval = stats.describeListRecursor(recursor);
              }
            } else if (!recursedProperty) {
              const replay2 = recursorUtils$b.replay(this.propertyState, () => this.createPropertyRecursor());
              this.propertyState = replay2.state;
              recursor = replay2.recursor;
              recursedProperty = true;
              if (recursor !== recursorUtils$b.NOOP_RECURSOR) {
                retval = stats.describePropertyRecursor(recursor);
              }
            } else if (!recursedIterable) {
              const replay2 = recursorUtils$b.replay(this.iterableState, () => this.createIterableRecursor());
              this.iterableState = replay2.state;
              recursor = replay2.recursor;
              recursedIterable = true;
              if (recursor !== recursorUtils$b.NOOP_RECURSOR) {
                retval = stats.describeIterableRecursor(recursor);
              }
            }
          }
        } while (recursor !== null && retval === null);
        return retval;
      };
    }
  };
}
object$b.DescribedMixin = DescribedMixin$1;
function DeserializedMixin$1(base) {
  return class extends base {
    constructor(state, recursor) {
      super({
        ctor: state[0],
        pointer: state[1],
        stringTag: state[2],
        isArray: state[3],
        isIterable: state[4],
        isList: state[5]
      });
      this.deserializedRecursor = recursor;
      this.replayState = null;
    }
    createRecursor() {
      if (!this.deserializedRecursor)
        return () => null;
      const replay2 = recursorUtils$b.replay(this.replayState, () => ({ size: -1, next: this.deserializedRecursor }));
      this.replayState = replay2.state;
      return replay2.recursor.next;
    }
    hasSameCtor(expected) {
      return this.ctor === expected.ctor;
    }
  };
}
object$b.DeserializedMixin = DeserializedMixin$1;
const constants$p = constants$s;
const object$a = object$b;
const AMBIGUOUS$4 = constants$p.AMBIGUOUS;
const UNEQUAL$n = constants$p.UNEQUAL;
function describe$q(props) {
  return new DescribedArgumentsValue(Object.assign({
    // Treat as an array, to allow comparisons with arrays
    isArray: true,
    isList: true
  }, props, { ctor: "Arguments" }));
}
_arguments.describe = describe$q;
function deserialize$f(state, recursor) {
  return new DeserializedArgumentsValue(state, recursor);
}
_arguments.deserialize = deserialize$f;
const tag$l = Symbol("ArgumentsValue");
_arguments.tag = tag$l;
class ArgumentsValue extends object$a.ObjectValue {
  compare(expected) {
    if (expected.isComplex !== true)
      return UNEQUAL$n;
    if (expected.stringTag === "Array")
      return AMBIGUOUS$4;
    return super.compare(expected);
  }
}
Object.defineProperty(ArgumentsValue.prototype, "tag", { value: tag$l });
const DescribedArgumentsValue = object$a.DescribedMixin(ArgumentsValue);
class DeserializedArgumentsValue extends object$a.DeserializedMixin(ArgumentsValue) {
  compare(expected) {
    return expected.isComplex === true && expected.stringTag === "Array" ? UNEQUAL$n : super.compare(expected);
  }
}
var arrayBuffer = {};
var typedArray$2 = {};
const constants$o = constants$s;
const formatUtils$e = formatUtils$f;
const lineBuilder$f = lineBuilder$i;
const propertyStatsTag = stats$1.propertyTag;
const recursorUtils$a = recursorUtils$d;
const object$9 = object$b;
const DEEP_EQUAL$f = constants$o.DEEP_EQUAL;
const UNEQUAL$m = constants$o.UNEQUAL;
function getBuffer(value) {
  const buffer = Buffer.from(value.buffer);
  return value.byteLength !== value.buffer.byteLength ? buffer.slice(value.byteOffset, value.byteOffset + value.byteLength) : buffer;
}
typedArray$2.getBuffer = getBuffer;
function describe$p(props) {
  return new DescribedTypedArrayValue(Object.assign({
    buffer: getBuffer(props.value),
    // Set isArray and isList so the property recursor excludes the byte accessors
    isArray: true,
    isList: true
  }, props));
}
typedArray$2.describe = describe$p;
function deserialize$e(state, recursor) {
  return new DeserializedTypedArrayValue(state, recursor);
}
typedArray$2.deserialize = deserialize$e;
function deserializeBytes(buffer) {
  return new Bytes(buffer);
}
typedArray$2.deserializeBytes = deserializeBytes;
const bytesTag = Symbol("Bytes");
typedArray$2.bytesTag = bytesTag;
const tag$k = Symbol("TypedArrayValue");
typedArray$2.tag = tag$k;
class Bytes {
  constructor(buffer) {
    this.buffer = buffer;
  }
  compare(expected) {
    return expected.tag === bytesTag && this.buffer.equals(expected.buffer) ? DEEP_EQUAL$f : UNEQUAL$m;
  }
  formatDeep(theme, indent) {
    const indentation = indent;
    const lines = lineBuilder$f.buffer();
    let string2 = "";
    let isFirst = true;
    for (let offset = 0; offset < this.buffer.length; offset += 4) {
      if (offset > 0) {
        if (offset % 32 === 0) {
          if (isFirst) {
            lines.append(lineBuilder$f.first(string2));
            isFirst = false;
          } else {
            lines.append(lineBuilder$f.line(string2));
          }
          string2 = String(indentation);
        } else {
          string2 += " ";
        }
      }
      string2 += formatUtils$e.wrap(theme.typedArray.bytes, this.buffer.toString("hex", offset, offset + 4));
    }
    return isFirst ? lineBuilder$f.single(string2) : lines.append(lineBuilder$f.last(string2));
  }
  serialize() {
    return this.buffer;
  }
}
Object.defineProperty(Bytes.prototype, "tag", { value: bytesTag });
class TypedArrayValue extends object$9.ObjectValue {
  constructor(props) {
    super(props);
    this.buffer = props.buffer;
  }
  formatShallow(theme, indent) {
    return super.formatShallow(theme, indent).customize({
      shouldFormat(subject) {
        if (subject.tag === propertyStatsTag)
          return subject.size > 1;
        if (subject.isProperty === true)
          return subject.key.value !== "byteLength";
        if (subject.tag === bytesTag)
          return subject.buffer.byteLength > 0;
        return true;
      }
    });
  }
}
Object.defineProperty(TypedArrayValue.prototype, "tag", { value: tag$k });
typedArray$2.TypedArrayValue = TypedArrayValue;
function DescribedMixin(base) {
  return class extends object$9.DescribedMixin(base) {
    // The list isn't recursed. Instead a Bytes instance is returned by the main
    // recursor.
    createListRecursor() {
      return recursorUtils$a.NOOP_RECURSOR;
    }
    createPropertyRecursor() {
      const recursor = super.createPropertyRecursor();
      const size = recursor.size + 1;
      let done = false;
      const next = () => {
        if (done)
          return null;
        const property2 = recursor.next();
        if (property2)
          return property2;
        done = true;
        return this.describeProperty("byteLength", this.describeAny(this.buffer.byteLength));
      };
      return { size, next };
    }
    createRecursor() {
      return recursorUtils$a.unshift(super.createRecursor(), new Bytes(this.buffer));
    }
  };
}
typedArray$2.DescribedMixin = DescribedMixin;
const DescribedTypedArrayValue = DescribedMixin(TypedArrayValue);
function DeserializedMixin(base) {
  return class extends object$9.DeserializedMixin(base) {
    constructor(state, recursor) {
      super(state, recursor);
      const bytesDescriptor = this.createRecursor()();
      this.buffer = bytesDescriptor.buffer;
    }
  };
}
typedArray$2.DeserializedMixin = DeserializedMixin;
const DeserializedTypedArrayValue = DeserializedMixin(TypedArrayValue);
const typedArray$1 = typedArray$2;
function describe$o(props) {
  return new DescribedArrayBufferValue(Object.assign({
    buffer: Buffer.from(props.value),
    // Set isArray and isList so the property recursor excludes the byte accessors
    isArray: true,
    isList: true
  }, props));
}
arrayBuffer.describe = describe$o;
function deserialize$d(state, recursor) {
  return new DeserializedArrayBufferValue(state, recursor);
}
arrayBuffer.deserialize = deserialize$d;
const tag$j = Symbol("ArrayBufferValue");
arrayBuffer.tag = tag$j;
class ArrayBufferValue extends typedArray$1.TypedArrayValue {
}
Object.defineProperty(ArrayBufferValue.prototype, "tag", { value: tag$j });
const DescribedArrayBufferValue = typedArray$1.DescribedMixin(ArrayBufferValue);
const DeserializedArrayBufferValue = typedArray$1.DeserializedMixin(ArrayBufferValue);
var boxed = {};
var string$1 = {};
var utils$1 = {};
var ast = { exports: {} };
(function() {
  function isExpression(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return true;
    }
    return false;
  }
  function isIterationStatement(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return true;
    }
    return false;
  }
  function isStatement(node) {
    if (node == null) {
      return false;
    }
    switch (node.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return true;
    }
    return false;
  }
  function isSourceElement(node) {
    return isStatement(node) || node != null && node.type === "FunctionDeclaration";
  }
  function trailingStatement(node) {
    switch (node.type) {
      case "IfStatement":
        if (node.alternate != null) {
          return node.alternate;
        }
        return node.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return node.body;
    }
    return null;
  }
  function isProblematicIfStatement(node) {
    var current;
    if (node.type !== "IfStatement") {
      return false;
    }
    if (node.alternate == null) {
      return false;
    }
    current = node.consequent;
    do {
      if (current.type === "IfStatement") {
        if (current.alternate == null) {
          return true;
        }
      }
      current = trailingStatement(current);
    } while (current);
    return false;
  }
  ast.exports = {
    isExpression,
    isStatement,
    isIterationStatement,
    isSourceElement,
    isProblematicIfStatement,
    trailingStatement
  };
})();
var astExports = ast.exports;
var code = { exports: {} };
(function() {
  var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;
  ES5Regex = {
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  };
  ES6Regex = {
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
  };
  function isDecimalDigit(ch2) {
    return 48 <= ch2 && ch2 <= 57;
  }
  function isHexDigit(ch2) {
    return 48 <= ch2 && ch2 <= 57 || // 0..9
    97 <= ch2 && ch2 <= 102 || // a..f
    65 <= ch2 && ch2 <= 70;
  }
  function isOctalDigit(ch2) {
    return ch2 >= 48 && ch2 <= 55;
  }
  NON_ASCII_WHITESPACES = [
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8239,
    8287,
    12288,
    65279
  ];
  function isWhiteSpace(ch2) {
    return ch2 === 32 || ch2 === 9 || ch2 === 11 || ch2 === 12 || ch2 === 160 || ch2 >= 5760 && NON_ASCII_WHITESPACES.indexOf(ch2) >= 0;
  }
  function isLineTerminator(ch2) {
    return ch2 === 10 || ch2 === 13 || ch2 === 8232 || ch2 === 8233;
  }
  function fromCodePoint(cp) {
    if (cp <= 65535) {
      return String.fromCharCode(cp);
    }
    var cu1 = String.fromCharCode(Math.floor((cp - 65536) / 1024) + 55296);
    var cu2 = String.fromCharCode((cp - 65536) % 1024 + 56320);
    return cu1 + cu2;
  }
  IDENTIFIER_START = new Array(128);
  for (ch = 0; ch < 128; ++ch) {
    IDENTIFIER_START[ch] = ch >= 97 && ch <= 122 || // a..z
    ch >= 65 && ch <= 90 || // A..Z
    ch === 36 || ch === 95;
  }
  IDENTIFIER_PART = new Array(128);
  for (ch = 0; ch < 128; ++ch) {
    IDENTIFIER_PART[ch] = ch >= 97 && ch <= 122 || // a..z
    ch >= 65 && ch <= 90 || // A..Z
    ch >= 48 && ch <= 57 || // 0..9
    ch === 36 || ch === 95;
  }
  function isIdentifierStartES5(ch2) {
    return ch2 < 128 ? IDENTIFIER_START[ch2] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch2));
  }
  function isIdentifierPartES5(ch2) {
    return ch2 < 128 ? IDENTIFIER_PART[ch2] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch2));
  }
  function isIdentifierStartES6(ch2) {
    return ch2 < 128 ? IDENTIFIER_START[ch2] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch2));
  }
  function isIdentifierPartES6(ch2) {
    return ch2 < 128 ? IDENTIFIER_PART[ch2] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch2));
  }
  code.exports = {
    isDecimalDigit,
    isHexDigit,
    isOctalDigit,
    isWhiteSpace,
    isLineTerminator,
    isIdentifierStartES5,
    isIdentifierPartES5,
    isIdentifierStartES6,
    isIdentifierPartES6
  };
})();
var codeExports = code.exports;
var keyword$1 = { exports: {} };
(function() {
  var code2 = codeExports;
  function isStrictModeReservedWordES6(id) {
    switch (id) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return true;
      default:
        return false;
    }
  }
  function isKeywordES5(id, strict) {
    if (!strict && id === "yield") {
      return false;
    }
    return isKeywordES6(id, strict);
  }
  function isKeywordES6(id, strict) {
    if (strict && isStrictModeReservedWordES6(id)) {
      return true;
    }
    switch (id.length) {
      case 2:
        return id === "if" || id === "in" || id === "do";
      case 3:
        return id === "var" || id === "for" || id === "new" || id === "try";
      case 4:
        return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
      case 5:
        return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
      case 6:
        return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
      case 7:
        return id === "default" || id === "finally" || id === "extends";
      case 8:
        return id === "function" || id === "continue" || id === "debugger";
      case 10:
        return id === "instanceof";
      default:
        return false;
    }
  }
  function isReservedWordES5(id, strict) {
    return id === "null" || id === "true" || id === "false" || isKeywordES5(id, strict);
  }
  function isReservedWordES6(id, strict) {
    return id === "null" || id === "true" || id === "false" || isKeywordES6(id, strict);
  }
  function isRestrictedWord(id) {
    return id === "eval" || id === "arguments";
  }
  function isIdentifierNameES5(id) {
    var i2, iz, ch;
    if (id.length === 0) {
      return false;
    }
    ch = id.charCodeAt(0);
    if (!code2.isIdentifierStartES5(ch)) {
      return false;
    }
    for (i2 = 1, iz = id.length; i2 < iz; ++i2) {
      ch = id.charCodeAt(i2);
      if (!code2.isIdentifierPartES5(ch)) {
        return false;
      }
    }
    return true;
  }
  function decodeUtf16(lead, trail) {
    return (lead - 55296) * 1024 + (trail - 56320) + 65536;
  }
  function isIdentifierNameES6(id) {
    var i2, iz, ch, lowCh, check;
    if (id.length === 0) {
      return false;
    }
    check = code2.isIdentifierStartES6;
    for (i2 = 0, iz = id.length; i2 < iz; ++i2) {
      ch = id.charCodeAt(i2);
      if (55296 <= ch && ch <= 56319) {
        ++i2;
        if (i2 >= iz) {
          return false;
        }
        lowCh = id.charCodeAt(i2);
        if (!(56320 <= lowCh && lowCh <= 57343)) {
          return false;
        }
        ch = decodeUtf16(ch, lowCh);
      }
      if (!check(ch)) {
        return false;
      }
      check = code2.isIdentifierPartES6;
    }
    return true;
  }
  function isIdentifierES5(id, strict) {
    return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
  }
  function isIdentifierES6(id, strict) {
    return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
  }
  keyword$1.exports = {
    isKeywordES5,
    isKeywordES6,
    isReservedWordES5,
    isReservedWordES6,
    isRestrictedWord,
    isIdentifierNameES5,
    isIdentifierNameES6,
    isIdentifierES5,
    isIdentifierES6
  };
})();
var keywordExports = keyword$1.exports;
(function() {
  utils$1.ast = astExports;
  utils$1.code = codeExports;
  utils$1.keyword = keywordExports;
})();
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;
function diff_main(text1, text2, cursor_pos, cleanup, _fix_unicode) {
  if (text1 === text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }
  if (cursor_pos != null) {
    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
    if (editdiff) {
      return editdiff;
    }
  }
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);
  var diffs = diff_compute_(text1, text2);
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs, _fix_unicode);
  if (cleanup) {
    diff_cleanupSemantic(diffs);
  }
  return diffs;
}
function diff_compute_(text1, text2) {
  var diffs;
  if (!text1) {
    return [[DIFF_INSERT, text2]];
  }
  if (!text2) {
    return [[DIFF_DELETE, text1]];
  }
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i2 = longtext.indexOf(shorttext);
  if (i2 !== -1) {
    diffs = [
      [DIFF_INSERT, longtext.substring(0, i2)],
      [DIFF_EQUAL, shorttext],
      [DIFF_INSERT, longtext.substring(i2 + shorttext.length)]
    ];
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }
  if (shorttext.length === 1) {
    return [
      [DIFF_DELETE, text1],
      [DIFF_INSERT, text2]
    ];
  }
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }
  return diff_bisect_(text1, text2);
}
function diff_bisect_(text1, text2) {
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  var front = delta % 2 !== 0;
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 === -d || k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) === text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        k1end += 2;
      } else if (y1 > text2_length) {
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 === -d || k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        k2end += 2;
      } else if (y2 > text2_length) {
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          x2 = text1_length - x2;
          if (x1 >= x2) {
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  return [
    [DIFF_DELETE, text1],
    [DIFF_INSERT, text2]
  ];
}
function diff_bisectSplit_(text1, text2, x, y2) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y2);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y2);
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);
  return diffs.concat(diffsb);
}
function diff_commonPrefix(text1, text2) {
  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
    return 0;
  }
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
    pointermid--;
  }
  return pointermid;
}
function diff_commonOverlap_(text1, text2) {
  var text1_length = text1.length;
  var text2_length = text2.length;
  if (text1_length == 0 || text2_length == 0) {
    return 0;
  }
  if (text1_length > text2_length) {
    text1 = text1.substring(text1_length - text2_length);
  } else if (text1_length < text2_length) {
    text2 = text2.substring(0, text1_length);
  }
  var text_length = Math.min(text1_length, text2_length);
  if (text1 == text2) {
    return text_length;
  }
  var best = 0;
  var length2 = 1;
  while (true) {
    var pattern = text1.substring(text_length - length2);
    var found = text2.indexOf(pattern);
    if (found == -1) {
      return best;
    }
    length2 += found;
    if (found == 0 || text1.substring(text_length - length2) == text2.substring(0, length2)) {
      best = length2;
      length2++;
    }
  }
}
function diff_commonSuffix(text1, text2) {
  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
    return 0;
  }
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
    pointermid--;
  }
  return pointermid;
}
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;
  }
  function diff_halfMatchI_(longtext2, shorttext2, i2) {
    var seed = longtext2.substring(i2, i2 + Math.floor(longtext2.length / 4));
    var j = -1;
    var best_common = "";
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext2.indexOf(seed, j + 1)) !== -1) {
      var prefixLength = diff_commonPrefix(
        longtext2.substring(i2),
        shorttext2.substring(j)
      );
      var suffixLength = diff_commonSuffix(
        longtext2.substring(0, i2),
        shorttext2.substring(0, j)
      );
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
        best_longtext_a = longtext2.substring(0, i2 - suffixLength);
        best_longtext_b = longtext2.substring(i2 + prefixLength);
        best_shorttext_a = shorttext2.substring(0, j - suffixLength);
        best_shorttext_b = shorttext2.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext2.length) {
      return [
        best_longtext_a,
        best_longtext_b,
        best_shorttext_a,
        best_shorttext_b,
        best_common
      ];
    } else {
      return null;
    }
  }
  var hm1 = diff_halfMatchI_(
    longtext,
    shorttext,
    Math.ceil(longtext.length / 4)
  );
  var hm2 = diff_halfMatchI_(
    longtext,
    shorttext,
    Math.ceil(longtext.length / 2)
  );
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
}
function diff_cleanupSemantic(diffs) {
  var changes = false;
  var equalities = [];
  var equalitiesLength = 0;
  var lastequality = null;
  var pointer2 = 0;
  var length_insertions1 = 0;
  var length_deletions1 = 0;
  var length_insertions2 = 0;
  var length_deletions2 = 0;
  while (pointer2 < diffs.length) {
    if (diffs[pointer2][0] == DIFF_EQUAL) {
      equalities[equalitiesLength++] = pointer2;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastequality = diffs[pointer2][1];
    } else {
      if (diffs[pointer2][0] == DIFF_INSERT) {
        length_insertions2 += diffs[pointer2][1].length;
      } else {
        length_deletions2 += diffs[pointer2][1].length;
      }
      if (lastequality && lastequality.length <= Math.max(length_insertions1, length_deletions1) && lastequality.length <= Math.max(length_insertions2, length_deletions2)) {
        diffs.splice(equalities[equalitiesLength - 1], 0, [
          DIFF_DELETE,
          lastequality
        ]);
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        equalitiesLength--;
        equalitiesLength--;
        pointer2 = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0;
        length_deletions1 = 0;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastequality = null;
        changes = true;
      }
    }
    pointer2++;
  }
  if (changes) {
    diff_cleanupMerge(diffs);
  }
  diff_cleanupSemanticLossless(diffs);
  pointer2 = 1;
  while (pointer2 < diffs.length) {
    if (diffs[pointer2 - 1][0] == DIFF_DELETE && diffs[pointer2][0] == DIFF_INSERT) {
      var deletion = diffs[pointer2 - 1][1];
      var insertion = diffs[pointer2][1];
      var overlap_length1 = diff_commonOverlap_(deletion, insertion);
      var overlap_length2 = diff_commonOverlap_(insertion, deletion);
      if (overlap_length1 >= overlap_length2) {
        if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
          diffs.splice(pointer2, 0, [
            DIFF_EQUAL,
            insertion.substring(0, overlap_length1)
          ]);
          diffs[pointer2 - 1][1] = deletion.substring(
            0,
            deletion.length - overlap_length1
          );
          diffs[pointer2 + 1][1] = insertion.substring(overlap_length1);
          pointer2++;
        }
      } else {
        if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
          diffs.splice(pointer2, 0, [
            DIFF_EQUAL,
            deletion.substring(0, overlap_length2)
          ]);
          diffs[pointer2 - 1][0] = DIFF_INSERT;
          diffs[pointer2 - 1][1] = insertion.substring(
            0,
            insertion.length - overlap_length2
          );
          diffs[pointer2 + 1][0] = DIFF_DELETE;
          diffs[pointer2 + 1][1] = deletion.substring(overlap_length2);
          pointer2++;
        }
      }
      pointer2++;
    }
    pointer2++;
  }
}
var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
var whitespaceRegex_ = /\s/;
var linebreakRegex_ = /[\r\n]/;
var blanklineEndRegex_ = /\n\r?\n$/;
var blanklineStartRegex_ = /^\r?\n\r?\n/;
function diff_cleanupSemanticLossless(diffs) {
  function diff_cleanupSemanticScore_(one, two) {
    if (!one || !two) {
      return 6;
    }
    var char1 = one.charAt(one.length - 1);
    var char2 = two.charAt(0);
    var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
    var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
    var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
    var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
    var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
    var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
    var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
    var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);
    if (blankLine1 || blankLine2) {
      return 5;
    } else if (lineBreak1 || lineBreak2) {
      return 4;
    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
      return 3;
    } else if (whitespace1 || whitespace2) {
      return 2;
    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
      return 1;
    }
    return 0;
  }
  var pointer2 = 1;
  while (pointer2 < diffs.length - 1) {
    if (diffs[pointer2 - 1][0] == DIFF_EQUAL && diffs[pointer2 + 1][0] == DIFF_EQUAL) {
      var equality1 = diffs[pointer2 - 1][1];
      var edit = diffs[pointer2][1];
      var equality2 = diffs[pointer2 + 1][1];
      var commonOffset = diff_commonSuffix(equality1, edit);
      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      }
      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }
      if (diffs[pointer2 - 1][1] != bestEquality1) {
        if (bestEquality1) {
          diffs[pointer2 - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer2 - 1, 1);
          pointer2--;
        }
        diffs[pointer2][1] = bestEdit;
        if (bestEquality2) {
          diffs[pointer2 + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer2 + 1, 1);
          pointer2--;
        }
      }
    }
    pointer2++;
  }
}
function diff_cleanupMerge(diffs, fix_unicode) {
  diffs.push([DIFF_EQUAL, ""]);
  var pointer2 = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = "";
  var text_insert = "";
  var commonlength;
  while (pointer2 < diffs.length) {
    if (pointer2 < diffs.length - 1 && !diffs[pointer2][1]) {
      diffs.splice(pointer2, 1);
      continue;
    }
    switch (diffs[pointer2][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer2][1];
        pointer2++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer2][1];
        pointer2++;
        break;
      case DIFF_EQUAL:
        var previous_equality = pointer2 - count_insert - count_delete - 1;
        if (fix_unicode) {
          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
            var stray = diffs[previous_equality][1].slice(-1);
            diffs[previous_equality][1] = diffs[previous_equality][1].slice(
              0,
              -1
            );
            text_delete = stray + text_delete;
            text_insert = stray + text_insert;
            if (!diffs[previous_equality][1]) {
              diffs.splice(previous_equality, 1);
              pointer2--;
              var k = previous_equality - 1;
              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                count_insert++;
                text_insert = diffs[k][1] + text_insert;
                k--;
              }
              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                count_delete++;
                text_delete = diffs[k][1] + text_delete;
                k--;
              }
              previous_equality = k;
            }
          }
          if (starts_with_pair_end(diffs[pointer2][1])) {
            var stray = diffs[pointer2][1].charAt(0);
            diffs[pointer2][1] = diffs[pointer2][1].slice(1);
            text_delete += stray;
            text_insert += stray;
          }
        }
        if (pointer2 < diffs.length - 1 && !diffs[pointer2][1]) {
          diffs.splice(pointer2, 1);
          break;
        }
        if (text_delete.length > 0 || text_insert.length > 0) {
          if (text_delete.length > 0 && text_insert.length > 0) {
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if (previous_equality >= 0) {
                diffs[previous_equality][1] += text_insert.substring(
                  0,
                  commonlength
                );
              } else {
                diffs.splice(0, 0, [
                  DIFF_EQUAL,
                  text_insert.substring(0, commonlength)
                ]);
                pointer2++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer2][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer2][1];
              text_insert = text_insert.substring(
                0,
                text_insert.length - commonlength
              );
              text_delete = text_delete.substring(
                0,
                text_delete.length - commonlength
              );
            }
          }
          var n2 = count_insert + count_delete;
          if (text_delete.length === 0 && text_insert.length === 0) {
            diffs.splice(pointer2 - n2, n2);
            pointer2 = pointer2 - n2;
          } else if (text_delete.length === 0) {
            diffs.splice(pointer2 - n2, n2, [DIFF_INSERT, text_insert]);
            pointer2 = pointer2 - n2 + 1;
          } else if (text_insert.length === 0) {
            diffs.splice(pointer2 - n2, n2, [DIFF_DELETE, text_delete]);
            pointer2 = pointer2 - n2 + 1;
          } else {
            diffs.splice(
              pointer2 - n2,
              n2,
              [DIFF_DELETE, text_delete],
              [DIFF_INSERT, text_insert]
            );
            pointer2 = pointer2 - n2 + 2;
          }
        }
        if (pointer2 !== 0 && diffs[pointer2 - 1][0] === DIFF_EQUAL) {
          diffs[pointer2 - 1][1] += diffs[pointer2][1];
          diffs.splice(pointer2, 1);
        } else {
          pointer2++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = "";
        text_insert = "";
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === "") {
    diffs.pop();
  }
  var changes = false;
  pointer2 = 1;
  while (pointer2 < diffs.length - 1) {
    if (diffs[pointer2 - 1][0] === DIFF_EQUAL && diffs[pointer2 + 1][0] === DIFF_EQUAL) {
      if (diffs[pointer2][1].substring(
        diffs[pointer2][1].length - diffs[pointer2 - 1][1].length
      ) === diffs[pointer2 - 1][1]) {
        diffs[pointer2][1] = diffs[pointer2 - 1][1] + diffs[pointer2][1].substring(
          0,
          diffs[pointer2][1].length - diffs[pointer2 - 1][1].length
        );
        diffs[pointer2 + 1][1] = diffs[pointer2 - 1][1] + diffs[pointer2 + 1][1];
        diffs.splice(pointer2 - 1, 1);
        changes = true;
      } else if (diffs[pointer2][1].substring(0, diffs[pointer2 + 1][1].length) == diffs[pointer2 + 1][1]) {
        diffs[pointer2 - 1][1] += diffs[pointer2 + 1][1];
        diffs[pointer2][1] = diffs[pointer2][1].substring(diffs[pointer2 + 1][1].length) + diffs[pointer2 + 1][1];
        diffs.splice(pointer2 + 1, 1);
        changes = true;
      }
    }
    pointer2++;
  }
  if (changes) {
    diff_cleanupMerge(diffs, fix_unicode);
  }
}
function is_surrogate_pair_start(charCode) {
  return charCode >= 55296 && charCode <= 56319;
}
function is_surrogate_pair_end(charCode) {
  return charCode >= 56320 && charCode <= 57343;
}
function starts_with_pair_end(str) {
  return is_surrogate_pair_end(str.charCodeAt(0));
}
function ends_with_pair_start(str) {
  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
}
function remove_empty_tuples(tuples) {
  var ret = [];
  for (var i2 = 0; i2 < tuples.length; i2++) {
    if (tuples[i2][1].length > 0) {
      ret.push(tuples[i2]);
    }
  }
  return ret;
}
function make_edit_splice(before, oldMiddle, newMiddle, after) {
  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
    return null;
  }
  return remove_empty_tuples([
    [DIFF_EQUAL, before],
    [DIFF_DELETE, oldMiddle],
    [DIFF_INSERT, newMiddle],
    [DIFF_EQUAL, after]
  ]);
}
function find_cursor_edit_diff(oldText, newText, cursor_pos) {
  var oldRange = typeof cursor_pos === "number" ? { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
  var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
  var oldLength = oldText.length;
  var newLength = newText.length;
  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
    var oldCursor = oldRange.index;
    var oldBefore = oldText.slice(0, oldCursor);
    var oldAfter = oldText.slice(oldCursor);
    var maybeNewCursor = newRange ? newRange.index : null;
    editBefore: {
      var newCursor = oldCursor + newLength - oldLength;
      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
        break editBefore;
      }
      if (newCursor < 0 || newCursor > newLength) {
        break editBefore;
      }
      var newBefore = newText.slice(0, newCursor);
      var newAfter = newText.slice(newCursor);
      if (newAfter !== oldAfter) {
        break editBefore;
      }
      var prefixLength = Math.min(oldCursor, newCursor);
      var oldPrefix = oldBefore.slice(0, prefixLength);
      var newPrefix = newBefore.slice(0, prefixLength);
      if (oldPrefix !== newPrefix) {
        break editBefore;
      }
      var oldMiddle = oldBefore.slice(prefixLength);
      var newMiddle = newBefore.slice(prefixLength);
      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
    }
    editAfter: {
      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
        break editAfter;
      }
      var cursor = oldCursor;
      var newBefore = newText.slice(0, cursor);
      var newAfter = newText.slice(cursor);
      if (newBefore !== oldBefore) {
        break editAfter;
      }
      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
      var newSuffix = newAfter.slice(newAfter.length - suffixLength);
      if (oldSuffix !== newSuffix) {
        break editAfter;
      }
      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
    }
  }
  if (oldRange.length > 0 && newRange && newRange.length === 0) {
    replaceRange: {
      var oldPrefix = oldText.slice(0, oldRange.index);
      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
      var prefixLength = oldPrefix.length;
      var suffixLength = oldSuffix.length;
      if (newLength < prefixLength + suffixLength) {
        break replaceRange;
      }
      var newPrefix = newText.slice(0, prefixLength);
      var newSuffix = newText.slice(newLength - suffixLength);
      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
        break replaceRange;
      }
      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
    }
  }
  return null;
}
function diff$6(text1, text2, cursor_pos, cleanup) {
  return diff_main(text1, text2, cursor_pos, cleanup, true);
}
diff$6.INSERT = DIFF_INSERT;
diff$6.DELETE = DIFF_DELETE;
diff$6.EQUAL = DIFF_EQUAL;
var diff_1$2 = diff$6;
const keyword = utils$1.keyword;
const fastDiff = diff_1$2;
const constants$n = constants$s;
const formatUtils$d = formatUtils$f;
const lineBuilder$e = lineBuilder$i;
const DEEP_EQUAL$e = constants$n.DEEP_EQUAL;
const UNEQUAL$l = constants$n.UNEQUAL;
function describe$n(value) {
  return new StringValue(value);
}
string$1.describe = describe$n;
string$1.deserialize = describe$n;
const tag$i = Symbol("StringValue");
string$1.tag = tag$i;
function basicEscape(string2) {
  return string2.replace(/\\/g, "\\\\");
}
const CRLF_CONTROL_PICTURE = "␍␊";
const LF_CONTROL_PICTURE = "␊";
const CR_CONTROL_PICTURE = "␍";
const MATCH_CONTROL_PICTURES = new RegExp(`${CR_CONTROL_PICTURE}|${LF_CONTROL_PICTURE}|${CR_CONTROL_PICTURE}`, "g");
function escapeLinebreak(string2) {
  if (string2 === "\r\n")
    return CRLF_CONTROL_PICTURE;
  if (string2 === "\n")
    return LF_CONTROL_PICTURE;
  if (string2 === "\r")
    return CR_CONTROL_PICTURE;
  return string2;
}
function themeControlPictures(theme, resetWrap, str) {
  return str.replace(MATCH_CONTROL_PICTURES, (picture) => {
    return resetWrap.close + formatUtils$d.wrap(theme.string.controlPicture, picture) + resetWrap.open;
  });
}
const MATCH_SINGLE_QUOTE = /'/g;
const MATCH_DOUBLE_QUOTE = /"/g;
const MATCH_BACKTICKS = /`/g;
function escapeQuotes(line, string2) {
  const quote = line.escapeQuote;
  if (quote === "'")
    return string2.replace(MATCH_SINGLE_QUOTE, "\\'");
  if (quote === '"')
    return string2.replace(MATCH_DOUBLE_QUOTE, '\\"');
  if (quote === "`")
    return string2.replace(MATCH_BACKTICKS, "\\`");
  return string2;
}
function includesLinebreaks(string2) {
  return string2.includes("\r") || string2.includes("\n");
}
function diffLine(theme, actual, expected, invert) {
  const outcome = fastDiff(actual, expected);
  const isPartiallyEqual = !(outcome.length === 2 && outcome[0][1] === actual && outcome[1][1] === expected || // Discount line ending control pictures, which will be equal even when the
  // rest of the line isn't.
  outcome.length === 3 && outcome[2][0] === fastDiff.EQUAL && MATCH_CONTROL_PICTURES.test(outcome[2][1]) && outcome[0][1] + outcome[2][1] === actual && outcome[1][1] + outcome[2][1] === expected);
  let stringActual = "";
  let stringExpected = "";
  const noopWrap = { open: "", close: "" };
  let deleteWrap = isPartiallyEqual ? theme.string.diff.delete : noopWrap;
  let insertWrap = isPartiallyEqual ? theme.string.diff.insert : noopWrap;
  const equalWrap = isPartiallyEqual ? theme.string.diff.equal : noopWrap;
  if (invert) {
    [deleteWrap, insertWrap] = [insertWrap, deleteWrap];
  }
  for (const diff2 of outcome) {
    if (diff2[0] === fastDiff.DELETE) {
      stringActual += formatUtils$d.wrap(deleteWrap, diff2[1]);
    } else if (diff2[0] === fastDiff.INSERT) {
      stringExpected += formatUtils$d.wrap(insertWrap, diff2[1]);
    } else {
      const string2 = formatUtils$d.wrap(equalWrap, themeControlPictures(theme, equalWrap, diff2[1]));
      stringActual += string2;
      stringExpected += string2;
    }
  }
  if (!isPartiallyEqual) {
    const deleteLineWrap = invert ? theme.string.diff.insertLine : theme.string.diff.deleteLine;
    const insertLineWrap = invert ? theme.string.diff.deleteLine : theme.string.diff.insertLine;
    stringActual = formatUtils$d.wrap(deleteLineWrap, stringActual);
    stringExpected = formatUtils$d.wrap(insertLineWrap, stringExpected);
  }
  return [stringActual, stringExpected];
}
const LINEBREAKS = /\r\n|\r|\n/g;
function gatherLines(string2) {
  const lines = [];
  let prevIndex = 0;
  for (let match; match = LINEBREAKS.exec(string2); prevIndex = match.index + match[0].length) {
    lines.push(string2.slice(prevIndex, match.index) + escapeLinebreak(match[0]));
  }
  lines.push(string2.slice(prevIndex));
  return lines;
}
class StringValue {
  constructor(value) {
    this.value = value;
  }
  compare(expected) {
    return expected.tag === tag$i && this.value === expected.value ? DEEP_EQUAL$e : UNEQUAL$l;
  }
  get includesLinebreaks() {
    return includesLinebreaks(this.value);
  }
  formatDeep(theme, indent) {
    let escaped = basicEscape(this.value);
    if (!this.includesLinebreaks) {
      escaped = escapeQuotes(theme.string.line, escaped);
      return lineBuilder$e.single(formatUtils$d.wrap(theme.string.line, formatUtils$d.wrap(theme.string, escaped)));
    }
    escaped = escapeQuotes(theme.string.multiline, escaped);
    const lineStrings = gatherLines(escaped).map((string2) => {
      return formatUtils$d.wrap(theme.string, themeControlPictures(theme, theme.string, string2));
    });
    const lastIndex = lineStrings.length - 1;
    const indentation = indent;
    return lineBuilder$e.buffer().append(
      lineStrings.map((string2, index) => {
        if (index === 0)
          return lineBuilder$e.first(theme.string.multiline.start + string2);
        if (index === lastIndex)
          return lineBuilder$e.last(indentation + string2 + theme.string.multiline.end);
        return lineBuilder$e.line(indentation + string2);
      })
    );
  }
  formatAsKey(theme) {
    const key = this.value;
    if (keyword.isIdentifierNameES6(key, true) || String(parseInt(key, 10)) === key) {
      return key;
    }
    const escaped = basicEscape(key).replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/'/g, "\\'");
    return formatUtils$d.wrap(theme.string.line, formatUtils$d.wrap(theme.string, escaped));
  }
  diffDeep(expected, theme, indent, invert) {
    if (expected.tag !== tag$i)
      return null;
    const escapedActual = basicEscape(this.value);
    const escapedExpected = basicEscape(expected.value);
    if (!includesLinebreaks(escapedActual) && !includesLinebreaks(escapedExpected)) {
      const result = diffLine(
        theme,
        escapeQuotes(theme.string.line, escapedActual),
        escapeQuotes(theme.string.line, escapedExpected),
        invert
      );
      return lineBuilder$e.actual.single(formatUtils$d.wrap(theme.string.line, result[0])).concat(lineBuilder$e.expected.single(formatUtils$d.wrap(theme.string.line, result[1])));
    }
    const actualLines = gatherLines(escapeQuotes(theme.string.multiline, escapedActual));
    const expectedLines = gatherLines(escapeQuotes(theme.string.multiline, escapedExpected));
    const indentation = indent;
    const lines = lineBuilder$e.buffer();
    const lastActualIndex = actualLines.length - 1;
    const lastExpectedIndex = expectedLines.length - 1;
    let actualBuffer = [];
    let expectedBuffer = [];
    let mustOpenNextExpected = false;
    for (let actualIndex = 0, expectedIndex = 0, extraneousOffset = 0; actualIndex < actualLines.length; ) {
      if (actualLines[actualIndex] === expectedLines[expectedIndex]) {
        lines.append(actualBuffer);
        lines.append(expectedBuffer);
        actualBuffer = [];
        expectedBuffer = [];
        let string2 = actualLines[actualIndex];
        string2 = themeControlPictures(theme, theme.string.diff.equal, string2);
        string2 = formatUtils$d.wrap(theme.string.diff.equal, string2);
        if (actualIndex === 0) {
          lines.append(lineBuilder$e.first(theme.string.multiline.start + string2));
        } else if (actualIndex === lastActualIndex && expectedIndex === lastExpectedIndex) {
          lines.append(lineBuilder$e.last(indentation + string2 + theme.string.multiline.end));
        } else {
          lines.append(lineBuilder$e.line(indentation + string2));
        }
        actualIndex++;
        expectedIndex++;
        continue;
      }
      let expectedIsMissing = false;
      {
        const compare2 = actualLines[actualIndex];
        for (let index = expectedIndex; !expectedIsMissing && index < expectedLines.length; index++) {
          expectedIsMissing = compare2 === expectedLines[index];
        }
      }
      let actualIsExtraneous = actualIndex - extraneousOffset > lastExpectedIndex || expectedIndex > lastExpectedIndex;
      if (!actualIsExtraneous) {
        const compare2 = expectedLines[expectedIndex];
        for (let index = actualIndex; !actualIsExtraneous && index < actualLines.length; index++) {
          actualIsExtraneous = compare2 === actualLines[index];
        }
        if (!actualIsExtraneous && actualIndex - extraneousOffset === lastExpectedIndex && actualIndex < lastActualIndex) {
          actualIsExtraneous = true;
        }
      }
      if (actualIsExtraneous && !expectedIsMissing) {
        const wrap2 = invert ? theme.string.diff.insertLine : theme.string.diff.deleteLine;
        const string2 = formatUtils$d.wrap(wrap2, actualLines[actualIndex]);
        if (actualIndex === 0) {
          actualBuffer.push(lineBuilder$e.actual.first(theme.string.multiline.start + string2));
          mustOpenNextExpected = true;
        } else if (actualIndex === lastActualIndex) {
          actualBuffer.push(lineBuilder$e.actual.last(indentation + string2 + theme.string.multiline.end));
        } else {
          actualBuffer.push(lineBuilder$e.actual.line(indentation + string2));
        }
        actualIndex++;
        extraneousOffset++;
      } else if (expectedIsMissing && !actualIsExtraneous) {
        const wrap2 = invert ? theme.string.diff.deleteLine : theme.string.diff.insertLine;
        const string2 = formatUtils$d.wrap(wrap2, expectedLines[expectedIndex]);
        if (mustOpenNextExpected) {
          expectedBuffer.push(lineBuilder$e.expected.first(theme.string.multiline.start + string2));
          mustOpenNextExpected = false;
        } else if (expectedIndex === lastExpectedIndex) {
          expectedBuffer.push(lineBuilder$e.expected.last(indentation + string2 + theme.string.multiline.end));
        } else {
          expectedBuffer.push(lineBuilder$e.expected.line(indentation + string2));
        }
        expectedIndex++;
      } else {
        const result = diffLine(theme, actualLines[actualIndex], expectedLines[expectedIndex], invert);
        if (actualIndex === 0) {
          actualBuffer.push(lineBuilder$e.actual.first(theme.string.multiline.start + result[0]));
          mustOpenNextExpected = true;
        } else if (actualIndex === lastActualIndex) {
          actualBuffer.push(lineBuilder$e.actual.last(indentation + result[0] + theme.string.multiline.end));
        } else {
          actualBuffer.push(lineBuilder$e.actual.line(indentation + result[0]));
        }
        if (mustOpenNextExpected) {
          expectedBuffer.push(lineBuilder$e.expected.first(theme.string.multiline.start + result[1]));
          mustOpenNextExpected = false;
        } else if (expectedIndex === lastExpectedIndex) {
          expectedBuffer.push(lineBuilder$e.expected.last(indentation + result[1] + theme.string.multiline.end));
        } else {
          expectedBuffer.push(lineBuilder$e.expected.line(indentation + result[1]));
        }
        actualIndex++;
        expectedIndex++;
      }
    }
    lines.append(actualBuffer);
    lines.append(expectedBuffer);
    return lines;
  }
  serialize() {
    return this.value;
  }
}
Object.defineProperty(StringValue.prototype, "isPrimitive", { value: true });
Object.defineProperty(StringValue.prototype, "tag", { value: tag$i });
const stringPrimitive = string$1.tag;
const recursorUtils$9 = recursorUtils$d;
const object$8 = object$b;
function describe$m(props) {
  return new DescribedBoxedValue(props);
}
boxed.describe = describe$m;
function deserialize$c(state, recursor) {
  return new DeserializedBoxedValue(state, recursor);
}
boxed.deserialize = deserialize$c;
const tag$h = Symbol("BoxedValue");
boxed.tag = tag$h;
class BoxedValue extends object$8.ObjectValue {
}
Object.defineProperty(BoxedValue.prototype, "tag", { value: tag$h });
class DescribedBoxedValue extends object$8.DescribedMixin(BoxedValue) {
  constructor(props) {
    super(props);
    this.unboxed = props.unboxed;
  }
  createListRecursor() {
    return recursorUtils$9.NOOP_RECURSOR;
  }
  createPropertyRecursor() {
    if (this.unboxed.tag !== stringPrimitive)
      return super.createPropertyRecursor();
    try {
      this.isList = true;
      return super.createPropertyRecursor();
    } finally {
      this.isList = false;
    }
  }
  createRecursor() {
    return recursorUtils$9.unshift(super.createRecursor(), this.unboxed);
  }
}
const DeserializedBoxedValue = object$8.DeserializedMixin(BoxedValue);
var dataView = {};
const typedArray = typedArray$2;
function describe$l(props) {
  return new DescribedDataViewValue(Object.assign({
    buffer: typedArray.getBuffer(props.value),
    // Set isArray and isList so the property recursor excludes the byte accessors
    isArray: true,
    isList: true
  }, props));
}
dataView.describe = describe$l;
function deserialize$b(state, recursor) {
  return new DeserializedDataViewValue(state, recursor);
}
dataView.deserialize = deserialize$b;
const tag$g = Symbol("DataViewValue");
dataView.tag = tag$g;
class DataViewValue extends typedArray.TypedArrayValue {
}
Object.defineProperty(DataViewValue.prototype, "tag", { value: tag$g });
const DescribedDataViewValue = typedArray.DescribedMixin(DataViewValue);
const DeserializedDataViewValue = typedArray.DeserializedMixin(DataViewValue);
var date = {};
var dateTime$2 = { exports: {} };
var timeZone$1 = (date2) => {
  const offset = (date2 || /* @__PURE__ */ new Date()).getTimezoneOffset();
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  const minutesOut = minutes > 0 ? ":" + ("0" + minutes).slice(-2) : "";
  return (offset < 0 ? "+" : "-") + hours + minutesOut;
};
const timeZone = timeZone$1;
const dateTime$1 = (options) => {
  options = Object.assign({
    date: /* @__PURE__ */ new Date(),
    local: true,
    showTimeZone: false,
    showMilliseconds: false
  }, options);
  let { date: date2 } = options;
  if (options.local) {
    date2 = new Date(date2.getTime() - date2.getTimezoneOffset() * 6e4);
  }
  let end = "";
  if (options.showTimeZone) {
    end = " UTC" + (options.local ? timeZone(date2) : "");
  }
  if (options.showMilliseconds && date2.getUTCMilliseconds() > 0) {
    end = ` ${date2.getUTCMilliseconds()}ms${end}`;
  }
  return date2.toISOString().replace(/T/, " ").replace(/\..+/, end);
};
dateTime$2.exports = dateTime$1;
dateTime$2.exports.default = dateTime$1;
var dateTimeExports = dateTime$2.exports;
const dateTime = dateTimeExports;
const constants$m = constants$s;
const formatUtils$c = formatUtils$f;
const lineBuilder$d = lineBuilder$i;
const object$7 = object$b;
const SHALLOW_EQUAL$7 = constants$m.SHALLOW_EQUAL;
const UNEQUAL$k = constants$m.UNEQUAL;
function describe$k(props) {
  const date2 = props.value;
  const invalid = isNaN(date2.valueOf());
  return new DescribedDateValue(Object.assign({}, props, { invalid }));
}
date.describe = describe$k;
function deserialize$a(state, recursor) {
  return new DeserializedDateValue(state, recursor);
}
date.deserialize = deserialize$a;
const tag$f = Symbol("DateValue");
date.tag = tag$f;
function formatDate(date2) {
  return dateTime({
    date: date2,
    local: false,
    showTimeZone: true,
    showMilliseconds: true
  });
}
class DateValue extends object$7.ObjectValue {
  constructor(props) {
    super(props);
    this.invalid = props.invalid;
  }
  compare(expected) {
    const result = super.compare(expected);
    if (result !== SHALLOW_EQUAL$7)
      return result;
    return this.invalid && expected.invalid || Object.is(this.value.getTime(), expected.value.getTime()) ? SHALLOW_EQUAL$7 : UNEQUAL$k;
  }
  formatShallow(theme, indent) {
    const string2 = formatUtils$c.formatCtorAndStringTag(theme, this) + " " + (this.invalid ? theme.date.invalid : formatUtils$c.wrap(theme.date.value, formatDate(this.value))) + " " + theme.object.openBracket;
    return super.formatShallow(theme, indent).customize({
      finalize(innerLines) {
        return innerLines.isEmpty ? lineBuilder$d.single(string2 + theme.object.closeBracket) : lineBuilder$d.first(string2).concat(innerLines.withFirstPrefixed(indent.increase()).stripFlags()).append(lineBuilder$d.last(indent + theme.object.closeBracket));
      },
      maxDepth() {
        return lineBuilder$d.single(string2 + " " + theme.maxDepth + " " + theme.object.closeBracket);
      }
    });
  }
  serialize() {
    const iso = this.invalid ? null : this.value.toISOString();
    return [this.invalid, iso, super.serialize()];
  }
}
Object.defineProperty(DateValue.prototype, "tag", { value: tag$f });
const DescribedDateValue = object$7.DescribedMixin(DateValue);
class DeserializedDateValue extends object$7.DeserializedMixin(DateValue) {
  constructor(state, recursor) {
    super(state[2], recursor);
    this.invalid = state[0];
    this.value = new Date(this.invalid ? NaN : state[1]);
  }
}
var error = {};
function isEnumerable$2(obj, key) {
  const desc = Object.getOwnPropertyDescriptor(obj, key);
  return desc && desc.enumerable;
}
var isEnumerable_1 = isEnumerable$2;
const constants$l = constants$s;
const formatUtils$b = formatUtils$f;
const isEnumerable$1 = isEnumerable_1;
const lineBuilder$c = lineBuilder$i;
const NOOP_RECURSOR$1 = recursorUtils$d.NOOP_RECURSOR;
const object$6 = object$b;
const UNEQUAL$j = constants$l.UNEQUAL;
function describe$j(props) {
  const error2 = props.value;
  return new DescribedErrorValue(Object.assign({
    nameIsEnumerable: isEnumerable$1(error2, "name"),
    name: error2.name,
    messageIsEnumerable: isEnumerable$1(error2, "message"),
    message: error2.message
  }, props));
}
error.describe = describe$j;
function deserialize$9(state, recursor) {
  return new DeserializedErrorValue(state, recursor);
}
error.deserialize = deserialize$9;
const tag$e = Symbol("ErrorValue");
error.tag = tag$e;
class ErrorValue extends object$6.ObjectValue {
  constructor(props) {
    super(props);
    this.name = props.name;
  }
  compare(expected) {
    return this.tag === expected.tag && this.name === expected.name ? super.compare(expected) : UNEQUAL$j;
  }
  formatShallow(theme, indent) {
    const name2 = this.name || this.ctor;
    let string2 = name2 ? formatUtils$b.wrap(theme.error.name, name2) : formatUtils$b.wrap(theme.object.stringTag, this.stringTag);
    if (this.ctor && this.ctor !== name2) {
      string2 += " " + formatUtils$b.wrap(theme.error.ctor, this.ctor);
    }
    if (this.stringTag && this.stringTag !== this.ctor && this.name && !this.name.includes(this.stringTag)) {
      string2 += " " + formatUtils$b.wrap(theme.object.secondaryStringTag, this.stringTag);
    }
    string2 += " " + theme.object.openBracket;
    return super.formatShallow(theme, indent).customize({
      finalize(innerLines) {
        return innerLines.isEmpty ? lineBuilder$c.single(string2 + theme.object.closeBracket) : lineBuilder$c.first(string2).concat(innerLines.withFirstPrefixed(indent.increase()).stripFlags()).append(lineBuilder$c.last(indent + theme.object.closeBracket));
      },
      maxDepth() {
        return lineBuilder$c.single(string2 + " " + theme.maxDepth + " " + theme.object.closeBracket);
      }
    });
  }
  serialize() {
    return [this.name, super.serialize()];
  }
}
Object.defineProperty(ErrorValue.prototype, "tag", { value: tag$e });
class DescribedErrorValue extends object$6.DescribedMixin(ErrorValue) {
  constructor(props) {
    super(props);
    this.nameIsEnumerable = props.nameIsEnumerable;
    this.messageIsEnumerable = props.messageIsEnumerable;
    this.message = props.message;
  }
  createPropertyRecursor() {
    const recursor = super.createPropertyRecursor();
    let skipName = this.nameIsEnumerable;
    let emitMessage = !this.messageIsEnumerable;
    let size = recursor.size;
    if (skipName && size > 0) {
      size -= 1;
    }
    if (emitMessage) {
      size += 1;
    }
    if (size === 0)
      return NOOP_RECURSOR$1;
    let done = false;
    const next = () => {
      if (done)
        return null;
      const property2 = recursor.next();
      if (property2) {
        if (skipName && property2.key.value === "name") {
          skipName = false;
          return next();
        }
        return property2;
      }
      if (emitMessage) {
        emitMessage = false;
        return this.describeProperty("message", this.describeAny(this.message));
      }
      done = true;
      return null;
    };
    return { size, next };
  }
}
class DeserializedErrorValue extends object$6.DeserializedMixin(ErrorValue) {
  constructor(state, recursor) {
    super(state[1], recursor);
    this.name = state[0];
  }
}
var _function$1 = {};
const constants$k = constants$s;
const formatUtils$a = formatUtils$f;
const isEnumerable = isEnumerable_1;
const lineBuilder$b = lineBuilder$i;
const NOOP_RECURSOR = recursorUtils$d.NOOP_RECURSOR;
const object$5 = object$b;
const UNEQUAL$i = constants$k.UNEQUAL;
const SHALLOW_EQUAL$6 = constants$k.SHALLOW_EQUAL;
function describe$i(props) {
  const fn2 = props.value;
  return new DescribedFunctionValue(Object.assign({
    nameIsEnumerable: isEnumerable(fn2, "name"),
    name: typeof fn2.name === "string" ? fn2.name : null
  }, props));
}
_function$1.describe = describe$i;
function deserialize$8(state, recursor) {
  return new DeserializedFunctionValue(state, recursor);
}
_function$1.deserialize = deserialize$8;
const tag$d = Symbol("FunctionValue");
_function$1.tag = tag$d;
class FunctionValue extends object$5.ObjectValue {
  constructor(props) {
    super(props);
    this.name = props.name;
  }
  formatShallow(theme, indent) {
    const string2 = formatUtils$a.wrap(theme.function.stringTag, this.stringTag) + (this.name ? " " + formatUtils$a.wrap(theme.function.name, this.name) : "") + " " + theme.object.openBracket;
    return super.formatShallow(theme, indent).customize({
      finalize(innerLines) {
        return innerLines.isEmpty ? lineBuilder$b.single(string2 + theme.object.closeBracket) : lineBuilder$b.first(string2).concat(innerLines.withFirstPrefixed(indent.increase()).stripFlags()).append(lineBuilder$b.last(indent + theme.object.closeBracket));
      },
      maxDepth() {
        return lineBuilder$b.single(string2 + " " + theme.maxDepth + " " + theme.object.closeBracket);
      }
    });
  }
}
Object.defineProperty(FunctionValue.prototype, "tag", { value: tag$d });
class DescribedFunctionValue extends object$5.DescribedMixin(FunctionValue) {
  constructor(props) {
    super(props);
    this.nameIsEnumerable = props.nameIsEnumerable;
  }
  compare(expected) {
    if (this.tag !== expected.tag)
      return UNEQUAL$i;
    if (this.name !== expected.name)
      return UNEQUAL$i;
    if (this.value && expected.value && this.value !== expected.value)
      return UNEQUAL$i;
    return super.compare(expected);
  }
  createPropertyRecursor() {
    const recursor = super.createPropertyRecursor();
    const skipName = this.nameIsEnumerable;
    if (!skipName)
      return recursor;
    let size = recursor.size;
    if (skipName) {
      size -= 1;
    }
    if (size === 0)
      return NOOP_RECURSOR;
    const next = () => {
      const property2 = recursor.next();
      if (property2) {
        if (skipName && property2.key.value === "name") {
          return next();
        }
        return property2;
      }
      return null;
    };
    return { size, next };
  }
  serialize() {
    return [this.name, super.serialize()];
  }
}
class DeserializedFunctionValue extends object$5.DeserializedMixin(FunctionValue) {
  constructor(state, recursor) {
    super(state[1], recursor);
    this.name = state[0];
  }
  compare(expected) {
    if (this.tag !== expected.tag)
      return UNEQUAL$i;
    if (this.name !== expected.name)
      return UNEQUAL$i;
    if (this.stringTag !== expected.stringTag)
      return UNEQUAL$i;
    return SHALLOW_EQUAL$6;
  }
  serialize() {
    return [this.name, super.serialize()];
  }
}
var global$2 = {};
const constants$j = constants$s;
const formatUtils$9 = formatUtils$f;
const lineBuilder$a = lineBuilder$i;
const DEEP_EQUAL$d = constants$j.DEEP_EQUAL;
const UNEQUAL$h = constants$j.UNEQUAL;
function describe$h() {
  return new GlobalValue();
}
global$2.describe = describe$h;
global$2.deserialize = describe$h;
const tag$c = Symbol("GlobalValue");
global$2.tag = tag$c;
class GlobalValue {
  compare(expected) {
    return this.tag === expected.tag ? DEEP_EQUAL$d : UNEQUAL$h;
  }
  formatDeep(theme) {
    return lineBuilder$a.single(
      formatUtils$9.wrap(theme.global, "Global") + " " + theme.object.openBracket + theme.object.closeBracket
    );
  }
}
Object.defineProperty(GlobalValue.prototype, "isComplex", { value: true });
Object.defineProperty(GlobalValue.prototype, "tag", { value: tag$c });
var map$1 = {};
const constants$i = constants$s;
const recursorUtils$8 = recursorUtils$d;
const object$4 = object$b;
const SHALLOW_EQUAL$5 = constants$i.SHALLOW_EQUAL;
const UNEQUAL$g = constants$i.UNEQUAL;
function describe$g(props) {
  return new DescribedMapValue(Object.assign({
    size: props.value.size
  }, props));
}
map$1.describe = describe$g;
function deserialize$7(state, recursor) {
  return new DeserializedMapValue(state, recursor);
}
map$1.deserialize = deserialize$7;
const tag$b = Symbol("MapValue");
map$1.tag = tag$b;
class MapValue extends object$4.ObjectValue {
  constructor(props) {
    super(props);
    this.size = props.size;
  }
  compare(expected) {
    const result = super.compare(expected);
    if (result !== SHALLOW_EQUAL$5)
      return result;
    return this.size === expected.size ? SHALLOW_EQUAL$5 : UNEQUAL$g;
  }
  prepareDiff(expected) {
    return { compareResult: super.compare(expected) };
  }
  serialize() {
    return [this.size, super.serialize()];
  }
}
Object.defineProperty(MapValue.prototype, "tag", { value: tag$b });
class DescribedMapValue extends object$4.DescribedMixin(MapValue) {
  createIterableRecursor() {
    const size = this.size;
    if (size === 0)
      return recursorUtils$8.NOOP_RECURSOR;
    let index = 0;
    let entries;
    const next = () => {
      if (index === size)
        return null;
      if (!entries) {
        entries = Array.from(this.value);
      }
      const entry = entries[index++];
      return this.describeMapEntry(this.describeAny(entry[0]), this.describeAny(entry[1]));
    };
    return { size, next };
  }
}
class DeserializedMapValue extends object$4.DeserializedMixin(MapValue) {
  constructor(state, recursor) {
    super(state[1], recursor);
    this.size = state[0];
  }
}
var promise = {};
const constants$h = constants$s;
const object$3 = object$b;
const DEEP_EQUAL$c = constants$h.DEEP_EQUAL;
const UNEQUAL$f = constants$h.UNEQUAL;
function describe$f(props) {
  return new DescribedPromiseValue(props);
}
promise.describe = describe$f;
function deserialize$6(props) {
  return new DeserializedPromiseValue(props);
}
promise.deserialize = deserialize$6;
const tag$a = Symbol("PromiseValue");
promise.tag = tag$a;
class PromiseValue extends object$3.ObjectValue {
}
Object.defineProperty(PromiseValue.prototype, "tag", { value: tag$a });
class DescribedPromiseValue extends object$3.DescribedMixin(PromiseValue) {
  compare(expected) {
    return super.compare(expected) === DEEP_EQUAL$c ? DEEP_EQUAL$c : UNEQUAL$f;
  }
}
class DeserializedPromiseValue extends object$3.DeserializedMixin(PromiseValue) {
  compare(expected) {
    return super.compare(expected);
  }
}
var regexp = {};
const constants$g = constants$s;
const formatUtils$8 = formatUtils$f;
const lineBuilder$9 = lineBuilder$i;
const object$2 = object$b;
const UNEQUAL$e = constants$g.UNEQUAL;
function describe$e(props) {
  const regexp2 = props.value;
  return new DescribedRegexpValue(Object.assign({
    flags: getSortedFlags(regexp2),
    source: regexp2.source
  }, props));
}
regexp.describe = describe$e;
function deserialize$5(state, recursor) {
  return new DeserializedRegexpValue(state, recursor);
}
regexp.deserialize = deserialize$5;
const tag$9 = Symbol("RegexpValue");
regexp.tag = tag$9;
function getSortedFlags(regexp2) {
  const flags = regexp2.flags || String(regexp2).slice(regexp2.source.length + 2);
  return flags.split("").sort().join("");
}
class RegexpValue extends object$2.ObjectValue {
  constructor(props) {
    super(props);
    this.flags = props.flags;
    this.source = props.source;
  }
  compare(expected) {
    return this.tag === expected.tag && this.flags === expected.flags && this.source === expected.source ? super.compare(expected) : UNEQUAL$e;
  }
  formatShallow(theme, indent) {
    const ctor = this.ctor || this.stringTag;
    const regexp2 = formatUtils$8.wrap(theme.regexp.source, this.source) + formatUtils$8.wrap(theme.regexp.flags, this.flags);
    return super.formatShallow(theme, indent).customize({
      finalize: (innerLines) => {
        if (ctor === "RegExp" && innerLines.isEmpty)
          return lineBuilder$9.single(regexp2);
        const innerIndentation = indent.increase();
        const header = lineBuilder$9.first(formatUtils$8.formatCtorAndStringTag(theme, this) + " " + theme.object.openBracket).concat(lineBuilder$9.line(innerIndentation + regexp2));
        if (!innerLines.isEmpty) {
          header.append(lineBuilder$9.line(innerIndentation + theme.regexp.separator));
          header.append(innerLines.withFirstPrefixed(innerIndentation).stripFlags());
        }
        return header.append(lineBuilder$9.last(indent + theme.object.closeBracket));
      },
      maxDepth: () => {
        return lineBuilder$9.single(
          formatUtils$8.formatCtorAndStringTag(theme, this) + " " + theme.object.openBracket + " " + regexp2 + " " + theme.maxDepth + " " + theme.object.closeBracket
        );
      }
    });
  }
  serialize() {
    return [this.flags, this.source, super.serialize()];
  }
}
Object.defineProperty(RegexpValue.prototype, "tag", { value: tag$9 });
const DescribedRegexpValue = object$2.DescribedMixin(RegexpValue);
class DeserializedRegexpValue extends object$2.DeserializedMixin(RegexpValue) {
  constructor(state, recursor) {
    super(state[2], recursor);
    this.flags = state[0];
    this.source = state[1];
  }
}
var set$1 = {};
const constants$f = constants$s;
const recursorUtils$7 = recursorUtils$d;
const object$1 = object$b;
const SHALLOW_EQUAL$4 = constants$f.SHALLOW_EQUAL;
const UNEQUAL$d = constants$f.UNEQUAL;
function describe$d(props) {
  return new DescribedSetValue(Object.assign({
    size: props.value.size
  }, props));
}
set$1.describe = describe$d;
function deserialize$4(state, recursor) {
  return new DeserializedSetValue(state, recursor);
}
set$1.deserialize = deserialize$4;
const tag$8 = Symbol("SetValue");
set$1.tag = tag$8;
class SetValue extends object$1.ObjectValue {
  constructor(props) {
    super(props);
    this.size = props.size;
  }
  compare(expected) {
    const result = super.compare(expected);
    if (result !== SHALLOW_EQUAL$4)
      return result;
    return this.size === expected.size ? SHALLOW_EQUAL$4 : UNEQUAL$d;
  }
  prepareDiff(expected) {
    return { compareResult: super.compare(expected) };
  }
  serialize() {
    return [this.size, super.serialize()];
  }
}
Object.defineProperty(SetValue.prototype, "tag", { value: tag$8 });
class DescribedSetValue extends object$1.DescribedMixin(SetValue) {
  createIterableRecursor() {
    const size = this.size;
    if (size === 0)
      return recursorUtils$7.NOOP_RECURSOR;
    let index = 0;
    let members;
    const next = () => {
      if (index === size)
        return null;
      if (!members) {
        members = Array.from(this.value);
      }
      const value = members[index];
      return this.describeItem(index++, this.describeAny(value));
    };
    return { size, next };
  }
}
class DeserializedSetValue extends object$1.DeserializedMixin(SetValue) {
  constructor(state, recursor) {
    super(state[1], recursor);
    this.size = state[0];
  }
}
const hop = Object.prototype.hasOwnProperty;
function getCtor$1(stringTag2, value) {
  if (value.constructor) {
    const name2 = value.constructor.name;
    return typeof name2 === "string" && name2 !== "" ? name2 : null;
  }
  if (value.constructor === void 0) {
    if (stringTag2 !== "Object" || value instanceof Object)
      return null;
    for (var p in value) {
      if (!hop.call(value, p))
        return null;
    }
    return stringTag2;
  }
  return null;
}
var getCtor_1 = getCtor$1;
var getStringTag$2 = { exports: {} };
const ts = Object.prototype.toString;
function getStringTag$1(value) {
  return ts.call(value).slice(8, -1);
}
const fts = Function.prototype.toString;
const promiseCtorString$1 = fts.call(Promise);
const isPromise = (value) => {
  if (!value.constructor)
    return false;
  try {
    return fts.call(value.constructor) === promiseCtorString$1;
  } catch {
    return false;
  }
};
if (getStringTag$1(Promise.resolve()) === "Promise") {
  getStringTag$2.exports = getStringTag$1;
} else {
  const getStringTagWithPromiseWorkaround = (value) => {
    const stringTag2 = getStringTag$1(value);
    return stringTag2 === "Object" && isPromise(value) ? "Promise" : stringTag2;
  };
  getStringTag$2.exports = getStringTagWithPromiseWorkaround;
}
var getStringTagExports = getStringTag$2.exports;
var item = {};
const constants$e = constants$s;
const formatUtils$7 = formatUtils$f;
const recursorUtils$6 = recursorUtils$d;
const DEEP_EQUAL$b = constants$e.DEEP_EQUAL;
const UNEQUAL$c = constants$e.UNEQUAL;
function describeComplex$2(index, value) {
  return new ComplexItem(index, value);
}
item.describeComplex = describeComplex$2;
function deserializeComplex$1(index, recursor) {
  const value = recursor();
  return new ComplexItem(index, value);
}
item.deserializeComplex = deserializeComplex$1;
function describePrimitive$2(index, value) {
  return new PrimitiveItem(index, value);
}
item.describePrimitive = describePrimitive$2;
function deserializePrimitive$1(state) {
  const index = state[0];
  const value = state[1];
  return new PrimitiveItem(index, value);
}
item.deserializePrimitive = deserializePrimitive$1;
const complexTag$1 = Symbol("ComplexItem");
item.complexTag = complexTag$1;
const primitiveTag$1 = Symbol("PrimitiveItem");
item.primitiveTag = primitiveTag$1;
class ComplexItem {
  constructor(index, value) {
    this.index = index;
    this.value = value;
  }
  createRecursor() {
    return recursorUtils$6.singleValue(this.value);
  }
  compare(expected) {
    return expected.tag === complexTag$1 && this.index === expected.index ? this.value.compare(expected.value) : UNEQUAL$c;
  }
  formatShallow(theme, indent) {
    const increaseValueIndent = theme.item.increaseValueIndent === true;
    return new formatUtils$7.SingleValueFormatter(theme, (value) => {
      if (typeof theme.item.customFormat === "function") {
        return theme.item.customFormat(theme, indent, value);
      }
      return value.withLastPostfixed(theme.item.after);
    }, increaseValueIndent);
  }
  prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape2, isCircular) {
    if (isCircular(this.value) || isCircular(expected.value))
      return { compareResult: UNEQUAL$c };
    const lhsFork = recursorUtils$6.fork(lhsRecursor);
    const rhsFork = recursorUtils$6.fork(rhsRecursor);
    const initialExpected = expected;
    let expectedIsMissing = false;
    while (!expectedIsMissing && expected !== null && expected.isItem === true) {
      if (expected.tag === complexTag$1) {
        expectedIsMissing = compareComplexShape2(this.value, expected.value) !== UNEQUAL$c;
      }
      expected = rhsFork.shared();
    }
    let actualIsExtraneous = false;
    if (initialExpected.tag === complexTag$1) {
      let actual = this;
      while (!actualIsExtraneous && actual !== null && actual.isItem === true) {
        if (actual.tag === complexTag$1) {
          actualIsExtraneous = compareComplexShape2(actual.value, initialExpected.value) !== UNEQUAL$c;
        }
        actual = lhsFork.shared();
      }
    } else if (initialExpected.tag === primitiveTag$1) {
      let actual = this;
      while (!actualIsExtraneous && actual !== null && actual.isItem === true) {
        if (actual.tag === primitiveTag$1) {
          actualIsExtraneous = initialExpected.value.compare(actual.value) === DEEP_EQUAL$b;
        }
        actual = lhsFork.shared();
      }
    }
    if (actualIsExtraneous && !expectedIsMissing) {
      return {
        actualIsExtraneous: true,
        lhsRecursor: lhsFork.recursor,
        rhsRecursor: recursorUtils$6.map(
          recursorUtils$6.unshift(rhsFork.recursor, initialExpected),
          (next) => {
            if (next.isItem !== true)
              return next;
            next.index++;
            return next;
          }
        )
      };
    }
    if (expectedIsMissing && !actualIsExtraneous) {
      return {
        expectedIsMissing: true,
        lhsRecursor: recursorUtils$6.map(
          recursorUtils$6.unshift(lhsFork.recursor, this),
          (next) => {
            if (next.isItem !== true)
              return next;
            next.index++;
            return next;
          }
        ),
        rhsRecursor: rhsFork.recursor
      };
    }
    const mustRecurse = this.tag === complexTag$1 && initialExpected.tag === complexTag$1 && this.value.compare(initialExpected.value) !== UNEQUAL$c;
    return {
      mustRecurse,
      isUnequal: !mustRecurse,
      lhsRecursor: lhsFork.recursor,
      rhsRecursor: rhsFork.recursor
    };
  }
  serialize() {
    return this.index;
  }
}
Object.defineProperty(ComplexItem.prototype, "isItem", { value: true });
Object.defineProperty(ComplexItem.prototype, "tag", { value: complexTag$1 });
class PrimitiveItem {
  constructor(index, value) {
    this.index = index;
    this.value = value;
  }
  compare(expected) {
    return expected.tag === primitiveTag$1 && this.index === expected.index ? this.value.compare(expected.value) : UNEQUAL$c;
  }
  formatDeep(theme, indent) {
    const increaseValueIndent = theme.item.increaseValueIndent === true;
    const valueIndent = increaseValueIndent ? indent.increase() : indent;
    const formatted = this.value.formatDeep(theme, valueIndent);
    if (typeof theme.item.customFormat === "function") {
      return theme.item.customFormat(theme, indent, formatted);
    }
    return formatted.withLastPostfixed(theme.item.after);
  }
  prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape2, isCircular) {
    const compareResult = this.compare(expected);
    if (compareResult === DEEP_EQUAL$b)
      return { compareResult };
    if (expected.tag === primitiveTag$1 && this.value.tag === expected.value.tag && typeof this.value.diffDeep === "function") {
      return { compareResult };
    }
    const rhsFork = recursorUtils$6.fork(rhsRecursor);
    const initialExpected = expected;
    do {
      if (expected === null || expected.isItem !== true) {
        return {
          actualIsExtraneous: true,
          rhsRecursor: recursorUtils$6.map(
            recursorUtils$6.unshift(rhsFork.recursor, initialExpected),
            (next) => {
              if (next.isItem !== true)
                return next;
              next.index++;
              return next;
            }
          )
        };
      }
      if (this.value.compare(expected.value) === DEEP_EQUAL$b) {
        return {
          expectedIsMissing: true,
          lhsRecursor: recursorUtils$6.map(
            recursorUtils$6.unshift(lhsRecursor, this),
            (next) => {
              if (next.isItem !== true)
                return next;
              next.index++;
              return next;
            }
          ),
          rhsRecursor: rhsFork.recursor
        };
      }
      expected = rhsFork.shared();
    } while (true);
  }
  diffDeep(expected, theme, indent, invert) {
    if (this.tag !== expected.tag || typeof this.value.diffDeep !== "function")
      return null;
    const increaseValueIndent = theme.property.increaseValueIndent === true;
    const valueIndent = increaseValueIndent ? indent.increase() : indent;
    const diff2 = this.value.diffDeep(expected.value, theme, valueIndent, invert);
    if (diff2 === null)
      return null;
    if (typeof theme.item.customFormat === "function") {
      return theme.item.customFormat(theme, indent, diff2);
    }
    return diff2.withLastPostfixed(theme.item.after);
  }
  serialize() {
    return [this.index, this.value];
  }
}
Object.defineProperty(PrimitiveItem.prototype, "isItem", { value: true });
Object.defineProperty(PrimitiveItem.prototype, "tag", { value: primitiveTag$1 });
var mapEntry = {};
var themeUtils$3 = {};
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$8(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1$1 = eq$8;
var eq$7 = eq_1$1;
function assocIndexOf$4(array2, key) {
  var length2 = array2.length;
  while (length2--) {
    if (eq$7(array2[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
var nativeObjectToString$1 = objectProto$d.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag2 = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag2;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$c = Object.prototype;
var nativeObjectToString = objectProto$c.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObject$a(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
var isObject_1 = isObject$a;
var baseGetTag$4 = _baseGetTag, isObject$9 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$9(value)) {
    return false;
  }
  var tag2 = baseGetTag$4(value);
  return tag2 == funcTag$2 || tag2 == genTag$1 || tag2 == asyncTag || tag2 == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$8 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$b = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$8(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object2, key) {
  var value = getValue(object2, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$5 = _root;
var Map$4 = getNative$6(root$5, "Map");
var _Map = Map$4;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type2 = typeof value;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$1(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype["delete"] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
function arrayEach$1(array2, iteratee) {
  var index = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index < length2) {
    if (iteratee(array2[index], index, array2) === false) {
      break;
    }
  }
  return array2;
}
var _arrayEach = arrayEach$1;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$3(object2, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue, eq$6 = eq_1$1;
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function assignValue$2(object2, key, value) {
  var objValue = object2[key];
  if (!(hasOwnProperty$6.call(object2, key) && eq$6(objValue, value)) || value === void 0 && !(key in object2)) {
    baseAssignValue$2(object2, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue$1 = _baseAssignValue;
function copyObject$5(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index = -1, length2 = props.length;
  while (++index < length2) {
    var key = props[index];
    var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$1(object2, key, newValue);
    } else {
      assignValue$1(object2, key, newValue);
    }
  }
  return object2;
}
var _copyObject = copyObject$5;
function baseTimes$1(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$7(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$7;
var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
var isArguments$3 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$5(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$3;
var isArray$5 = Array.isArray;
var isArray_1 = isArray$5;
var isBuffer$3 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$3.exports;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer3 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer3;
})(isBuffer$3, isBuffer$3.exports);
var isBufferExports = isBuffer$3.exports;
var MAX_SAFE_INTEGER$2 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length2) {
  var type2 = typeof value;
  length2 = length2 == null ? MAX_SAFE_INTEGER$2 : length2;
  return !!length2 && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
}
var _isIndex = isIndex$2;
var baseGetTag$2 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$4 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$4(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$3;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types2 = freeModule && freeModule.require && freeModule.require("util").types;
      if (types2) {
        return types2;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments$2 = isArguments_1, isArray$4 = isArray_1, isBuffer$2 = isBufferExports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$4(value), isArg = !isArr && isArguments$2(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex$1(key, length2)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$5 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function baseKeys$1(object2) {
  if (!isPrototype$2(object2)) {
    return nativeKeys(object2);
  }
  var result = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$3.call(object2, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction$1 = isFunction_1, isLength = isLength_1;
function isArrayLike$4(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$4;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$3 = isArrayLike_1;
function keys$4(object2) {
  return isArrayLike$3(object2) ? arrayLikeKeys$1(object2) : baseKeys(object2);
}
var keys_1 = keys$4;
var copyObject$4 = _copyObject, keys$3 = keys_1;
function baseAssign$1(object2, source) {
  return object2 && copyObject$4(source, keys$3(source), object2);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$1(object2) {
  var result = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$7 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeysIn$1(object2) {
  if (!isObject$7(object2)) {
    return nativeKeysIn(object2);
  }
  var isProto = isPrototype$1(object2), result = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object2, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
function keysIn$5(object2) {
  return isArrayLike$2(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
}
var keysIn_1 = keysIn$5;
var copyObject$3 = _copyObject, keysIn$4 = keysIn_1;
function baseAssignIn$1(object2, source) {
  return object2 && copyObject$3(source, keysIn$4(source), object2);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;
function copyArray$2(source, array2) {
  var index = -1, length2 = source.length;
  array2 || (array2 = Array(length2));
  while (++index < length2) {
    array2[index] = source[index];
  }
  return array2;
}
var _copyArray = copyArray$2;
function arrayFilter$1(array2, predicate) {
  var index = -1, length2 = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index < length2) {
    var value = array2[index];
    if (predicate(value, index, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter(nativeGetSymbols$1(object2), function(symbol2) {
    return propertyIsEnumerable.call(object2, symbol2);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$2 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object2) {
  return copyObject$2(source, getSymbols$2(source), object2);
}
var _copySymbols = copySymbols$1;
function arrayPush$3(array2, values) {
  var index = -1, length2 = values.length, offset = array2.length;
  while (++index < length2) {
    array2[offset + index] = values[index];
  }
  return array2;
}
var _arrayPush = arrayPush$3;
var overArg = _overArg;
var getPrototype$3 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$3;
var arrayPush$2 = _arrayPush, getPrototype$2 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object2) {
  var result = [];
  while (object2) {
    arrayPush$2(result, getSymbols$1(object2));
    object2 = getPrototype$2(object2);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object2) {
  return copyObject$1(source, getSymbolsIn$1(source), object2);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush$1 = _arrayPush, isArray$3 = isArray_1;
function baseGetAllKeys$2(object2, keysFunc, symbolsFunc) {
  var result = keysFunc(object2);
  return isArray$3(object2) ? result : arrayPush$1(result, symbolsFunc(object2));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$2 = keys_1;
function getAllKeys$1(object2) {
  return baseGetAllKeys$1(object2, keys$2, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$3 = keysIn_1;
function getAllKeysIn$1(object2) {
  return baseGetAllKeys(object2, keysIn$3, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var getNative$3 = _getNative, root$4 = _root;
var DataView$2 = getNative$3(root$4, "DataView");
var _DataView = DataView$2;
var getNative$2 = _getNative, root$3 = _root;
var Promise$2 = getNative$2(root$3, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$2 = _root;
var Set$2 = getNative$1(root$2, "Set");
var _Set = Set$2;
var getNative = _getNative, root$1 = _root;
var WeakMap$2 = getNative(root$1, "WeakMap");
var _WeakMap = WeakMap$2;
var DataView$1 = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$1 = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag$3 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag$3 = baseGetTag$1;
if (DataView$1 && getTag$3(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$3(new Map$1()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set$1 && getTag$3(new Set$1()) != setTag$3 || WeakMap$1 && getTag$3(new WeakMap$1()) != weakMapTag$1) {
  getTag$3 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$3;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function initCloneArray$1(array2) {
  var length2 = array2.length, result = new array2.constructor(length2);
  if (length2 && typeof array2[0] == "string" && hasOwnProperty$1.call(array2, "index")) {
    result.index = array2.index;
    result.input = array2.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var root = _root;
var Uint8Array$2 = root.Uint8Array;
var _Uint8Array = Uint8Array$2;
var Uint8Array$1 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer2) {
  var result = new arrayBuffer2.constructor(arrayBuffer2.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer2));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView2, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView2.buffer) : dataView2.buffer;
  return new dataView2.constructor(buffer, dataView2.byteOffset, dataView2.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp2) {
  var result = new regexp2.constructor(regexp2.source, reFlags.exec(regexp2));
  result.lastIndex = regexp2.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$2 = _Symbol;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol2) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol2)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray2, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray2.buffer) : typedArray2.buffer;
  return new typedArray2.constructor(buffer, typedArray2.byteOffset, typedArray2.length);
}
var _cloneTypedArray = cloneTypedArray$2;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray$1 = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object2, tag2, isDeep) {
  var Ctor = object2.constructor;
  switch (tag2) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object2);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object2);
    case dataViewTag$1:
      return cloneDataView(object2, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray$1(object2, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object2);
    case regexpTag$1:
      return cloneRegExp(object2);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object2);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$6 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object2() {
  }
  return function(proto) {
    if (!isObject$6(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object2.prototype = proto;
    var result = new object2();
    object2.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype$1 = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$2(object2) {
  return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype$1(object2)) : {};
}
var _initCloneObject = initCloneObject$2;
var getTag$2 = _getTag, isObjectLike$3 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$3(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike$2 = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$2(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack$1 = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer$1 = _cloneBufferExports, copyArray$1 = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject$1 = _initCloneObject, isArray$2 = isArray_1, isBuffer$1 = isBufferExports, isMap = isMap_1, isObject$5 = isObject_1, isSet = isSet_1, keys$1 = keys_1, keysIn$2 = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag$1] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object2, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object2 ? customizer(value, key, object2, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$5(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$1(value, result);
    }
  } else {
    var tag2 = getTag(value), isFunc = tag2 == funcTag || tag2 == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer$1(value, isDeep);
    }
    if (tag2 == objectTag$1 || tag2 == argsTag || isFunc && !object2) {
      result = isFlat || isFunc ? {} : initCloneObject$1(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag2]) {
        return object2 ? value : {};
      }
      result = initCloneByTag(value, tag2, isDeep);
    }
  }
  stack || (stack = new Stack$1());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn$2 : keys$1;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
var baseAssignValue = _baseAssignValue, eq$5 = eq_1$1;
function assignMergeValue$2(object2, key, value) {
  if (value !== void 0 && !eq$5(object2[key], value) || value === void 0 && !(key in object2)) {
    baseAssignValue(object2, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
function createBaseFor$1(fromRight) {
  return function(object2, iteratee, keysFunc) {
    var index = -1, iterable = Object(object2), props = keysFunc(object2), length2 = props.length;
    while (length2--) {
      var key = props[fromRight ? length2 : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object2;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var isArrayLike$1 = isArrayLike_1, isObjectLike$1 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$1(value) && isArrayLike$1(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
var baseGetTag = _baseGetTag, getPrototype = _getPrototype, isObjectLike = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
function safeGet$2(object2, key) {
  if (key === "constructor" && typeof object2[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object2[key];
}
var _safeGet = safeGet$2;
var copyObject = _copyObject, keysIn$1 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject(value, keysIn$1(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer = _cloneBufferExports, cloneTypedArray = _cloneTypedArray, copyArray = _copyArray, initCloneObject = _initCloneObject, isArguments$1 = isArguments_1, isArray$1 = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer2 = isBufferExports, isFunction = isFunction_1, isObject$4 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray2 = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object2, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object2, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$4(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object2, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$3 = isObject_1, keysIn = keysIn_1, safeGet = _safeGet;
function baseMerge$1(object2, source, srcIndex, customizer, stack) {
  if (object2 === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject$3(srcValue)) {
      baseMergeDeep(object2, source, key, srcIndex, baseMerge$1, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object2, key, newValue);
    }
  }, keysIn);
}
var _baseMerge = baseMerge$1;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length2 = nativeMax(args.length - start, 0), array2 = Array(length2);
    while (++index < length2) {
      array2[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array2);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string2) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string2),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
var eq$4 = eq_1$1, isArrayLike = isArrayLike_1, isIndex = _isIndex, isObject$2 = isObject_1;
function isIterateeCall$1(value, index, object2) {
  if (!isObject$2(object2)) {
    return false;
  }
  var type2 = typeof index;
  if (type2 == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type2 == "string" && index in object2) {
    return eq$4(object2[index], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
var baseRest = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$1(assigner) {
  return baseRest(function(object2, sources) {
    var index = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : void 0, guard = length2 > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length2 < 3 ? void 0 : customizer;
      length2 = 1;
    }
    object2 = Object(object2);
    while (++index < length2) {
      var source = sources[index];
      if (source) {
        assigner(object2, source, index, customizer);
      }
    }
    return object2;
  });
}
var _createAssigner = createAssigner$1;
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var merge = createAssigner(function(object2, source, srcIndex) {
  baseMerge(object2, source, srcIndex);
});
var merge_1 = merge;
var pluginRegistry$2 = {};
var re$2 = { exports: {} };
const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const RELEASE_TYPES = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var constants$d = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const debug$1 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
var debug_1 = debug$1;
(function(module, exports) {
  const { MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2 } = constants$d;
  const debug2 = debug_1;
  exports = module.exports = {};
  const re2 = exports.re = [];
  const src2 = exports.src = [];
  const t2 = exports.t = {};
  let R2 = 0;
  const createToken = (name2, value, isGlobal) => {
    const index = R2++;
    debug2(name2, index, value);
    t2[name2] = index;
    src2[index] = value;
    re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
  };
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "[0-9]+");
  createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
  createToken("MAINVERSION", `(${src2[t2.NUMERICIDENTIFIER]})\\.(${src2[t2.NUMERICIDENTIFIER]})\\.(${src2[t2.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src2[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src2[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src2[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src2[t2.NUMERICIDENTIFIER]}|${src2[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src2[t2.NUMERICIDENTIFIERLOOSE]}|${src2[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASE", `(?:-(${src2[t2.PRERELEASEIDENTIFIER]}(?:\\.${src2[t2.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src2[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src2[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
  createToken("BUILD", `(?:\\+(${src2[t2.BUILDIDENTIFIER]}(?:\\.${src2[t2.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src2[t2.MAINVERSION]}${src2[t2.PRERELEASE]}?${src2[t2.BUILD]}?`);
  createToken("FULL", `^${src2[t2.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src2[t2.MAINVERSIONLOOSE]}${src2[t2.PRERELEASELOOSE]}?${src2[t2.BUILD]}?`);
  createToken("LOOSE", `^${src2[t2.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src2[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src2[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src2[t2.XRANGEIDENTIFIER]})(?:\\.(${src2[t2.XRANGEIDENTIFIER]})(?:\\.(${src2[t2.XRANGEIDENTIFIER]})(?:${src2[t2.PRERELEASE]})?${src2[t2.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:${src2[t2.PRERELEASELOOSE]})?${src2[t2.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src2[t2.GTLT]}\\s*${src2[t2.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src2[t2.GTLT]}\\s*${src2[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:$|[^\\d])`);
  createToken("COERCERTL", src2[t2.COERCE], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src2[t2.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src2[t2.LONETILDE]}${src2[t2.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src2[t2.LONETILDE]}${src2[t2.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src2[t2.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = "$1^";
  createToken("CARET", `^${src2[t2.LONECARET]}${src2[t2.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src2[t2.LONECARET]}${src2[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src2[t2.GTLT]}\\s*(${src2[t2.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src2[t2.GTLT]}\\s*(${src2[t2.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src2[t2.GTLT]}\\s*(${src2[t2.LOOSEPLAIN]}|${src2[t2.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src2[t2.XRANGEPLAIN]})\\s+-\\s+(${src2[t2.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src2[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src2[t2.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(re$2, re$2.exports);
var reExports = re$2.exports;
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({});
const parseOptions$1 = (options) => {
  if (!options) {
    return emptyOpts;
  }
  if (typeof options !== "object") {
    return looseOption;
  }
  return options;
};
var parseOptions_1 = parseOptions$1;
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b2) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b2);
  if (anum && bnum) {
    a = +a;
    b2 = +b2;
  }
  return a === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b2 ? -1 : 1;
};
const rcompareIdentifiers = (a, b2) => compareIdentifiers$1(b2, a);
var identifiers$1 = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};
const debug = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants$d;
const { re: re$1, t: t$1 } = reExports;
const parseOptions = parseOptions_1;
const { compareIdentifiers } = identifiers$1;
let SemVer$d = class SemVer {
  constructor(version2, options) {
    options = parseOptions(options);
    if (version2 instanceof SemVer) {
      if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
        return version2;
      } else {
        version2 = version2.version;
      }
    } else if (typeof version2 !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
    }
    if (version2.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      );
    }
    debug("SemVer", version2, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m2 = version2.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);
    if (!m2) {
      throw new TypeError(`Invalid Version: ${version2}`);
    }
    this.raw = version2;
    this.major = +m2[1];
    this.minor = +m2[2];
    this.patch = +m2[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m2[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m2[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m2[5] ? m2[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i2 = 0;
    do {
      const a = this.prerelease[i2];
      const b2 = other.prerelease[i2];
      debug("prerelease compare", i2, a, b2);
      if (a === void 0 && b2 === void 0) {
        return 0;
      } else if (b2 === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b2) {
        continue;
      } else {
        return compareIdentifiers(a, b2);
      }
    } while (++i2);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i2 = 0;
    do {
      const a = this.build[i2];
      const b2 = other.build[i2];
      debug("prerelease compare", i2, a, b2);
      if (a === void 0 && b2 === void 0) {
        return 0;
      } else if (b2 === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b2) {
        continue;
      } else {
        return compareIdentifiers(a, b2);
      }
    } while (++i2);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i2 = this.prerelease.length;
          while (--i2 >= 0) {
            if (typeof this.prerelease[i2] === "number") {
              this.prerelease[i2]++;
              i2 = -2;
            }
          }
          if (i2 === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease2 = [identifier, base];
          if (identifierBase === false) {
            prerelease2 = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease2;
            }
          } else {
            this.prerelease = prerelease2;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.format();
    this.raw = this.version;
    return this;
  }
};
var semver$1 = SemVer$d;
const SemVer$c = semver$1;
const parse$6 = (version2, options, throwErrors = false) => {
  if (version2 instanceof SemVer$c) {
    return version2;
  }
  try {
    return new SemVer$c(version2, options);
  } catch (er) {
    if (!throwErrors) {
      return null;
    }
    throw er;
  }
};
var parse_1 = parse$6;
const parse$5 = parse_1;
const valid$2 = (version2, options) => {
  const v = parse$5(version2, options);
  return v ? v.version : null;
};
var valid_1 = valid$2;
const parse$4 = parse_1;
const clean$1 = (version2, options) => {
  const s = parse$4(version2.trim().replace(/^[=v]+/, ""), options);
  return s ? s.version : null;
};
var clean_1 = clean$1;
const SemVer$b = semver$1;
const inc$1 = (version2, release, options, identifier, identifierBase) => {
  if (typeof options === "string") {
    identifierBase = identifier;
    identifier = options;
    options = void 0;
  }
  try {
    return new SemVer$b(
      version2 instanceof SemVer$b ? version2.version : version2,
      options
    ).inc(release, identifier, identifierBase).version;
  } catch (er) {
    return null;
  }
};
var inc_1 = inc$1;
const parse$3 = parse_1;
const diff$5 = (version1, version2) => {
  const v1 = parse$3(version1, null, true);
  const v2 = parse$3(version2, null, true);
  const comparison = v1.compare(v2);
  if (comparison === 0) {
    return null;
  }
  const v1Higher = comparison > 0;
  const highVersion = v1Higher ? v1 : v2;
  const lowVersion = v1Higher ? v2 : v1;
  const highHasPre = !!highVersion.prerelease.length;
  const prefix = highHasPre ? "pre" : "";
  if (v1.major !== v2.major) {
    return prefix + "major";
  }
  if (v1.minor !== v2.minor) {
    return prefix + "minor";
  }
  if (v1.patch !== v2.patch) {
    return prefix + "patch";
  }
  if (highHasPre) {
    return "prerelease";
  }
  if (lowVersion.patch) {
    return "patch";
  }
  if (lowVersion.minor) {
    return "minor";
  }
  return "major";
};
var diff_1$1 = diff$5;
const SemVer$a = semver$1;
const major$1 = (a, loose) => new SemVer$a(a, loose).major;
var major_1 = major$1;
const SemVer$9 = semver$1;
const minor$1 = (a, loose) => new SemVer$9(a, loose).minor;
var minor_1 = minor$1;
const SemVer$8 = semver$1;
const patch$1 = (a, loose) => new SemVer$8(a, loose).patch;
var patch_1 = patch$1;
const parse$2 = parse_1;
const prerelease$1 = (version2, options) => {
  const parsed = parse$2(version2, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
var prerelease_1 = prerelease$1;
const SemVer$7 = semver$1;
const compare$d = (a, b2, loose) => new SemVer$7(a, loose).compare(new SemVer$7(b2, loose));
var compare_1$1 = compare$d;
const compare$c = compare_1$1;
const rcompare$1 = (a, b2, loose) => compare$c(b2, a, loose);
var rcompare_1 = rcompare$1;
const compare$b = compare_1$1;
const compareLoose$1 = (a, b2) => compare$b(a, b2, true);
var compareLoose_1 = compareLoose$1;
const SemVer$6 = semver$1;
const compareBuild$3 = (a, b2, loose) => {
  const versionA = new SemVer$6(a, loose);
  const versionB = new SemVer$6(b2, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
var compareBuild_1 = compareBuild$3;
const compareBuild$2 = compareBuild_1;
const sort$2 = (list, loose) => list.sort((a, b2) => compareBuild$2(a, b2, loose));
var sort_1 = sort$2;
const compareBuild$1 = compareBuild_1;
const rsort$1 = (list, loose) => list.sort((a, b2) => compareBuild$1(b2, a, loose));
var rsort_1 = rsort$1;
const compare$a = compare_1$1;
const gt$4 = (a, b2, loose) => compare$a(a, b2, loose) > 0;
var gt_1 = gt$4;
const compare$9 = compare_1$1;
const lt$3 = (a, b2, loose) => compare$9(a, b2, loose) < 0;
var lt_1 = lt$3;
const compare$8 = compare_1$1;
const eq$3 = (a, b2, loose) => compare$8(a, b2, loose) === 0;
var eq_1 = eq$3;
const compare$7 = compare_1$1;
const neq$2 = (a, b2, loose) => compare$7(a, b2, loose) !== 0;
var neq_1 = neq$2;
const compare$6 = compare_1$1;
const gte$3 = (a, b2, loose) => compare$6(a, b2, loose) >= 0;
var gte_1 = gte$3;
const compare$5 = compare_1$1;
const lte$3 = (a, b2, loose) => compare$5(a, b2, loose) <= 0;
var lte_1 = lte$3;
const eq$2 = eq_1;
const neq$1 = neq_1;
const gt$3 = gt_1;
const gte$2 = gte_1;
const lt$2 = lt_1;
const lte$2 = lte_1;
const cmp$1 = (a, op, b2, loose) => {
  switch (op) {
    case "===":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b2 === "object") {
        b2 = b2.version;
      }
      return a === b2;
    case "!==":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b2 === "object") {
        b2 = b2.version;
      }
      return a !== b2;
    case "":
    case "=":
    case "==":
      return eq$2(a, b2, loose);
    case "!=":
      return neq$1(a, b2, loose);
    case ">":
      return gt$3(a, b2, loose);
    case ">=":
      return gte$2(a, b2, loose);
    case "<":
      return lt$2(a, b2, loose);
    case "<=":
      return lte$2(a, b2, loose);
    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
};
var cmp_1 = cmp$1;
const SemVer$5 = semver$1;
const parse$1 = parse_1;
const { re, t } = reExports;
const coerce$1 = (version2, options) => {
  if (version2 instanceof SemVer$5) {
    return version2;
  }
  if (typeof version2 === "number") {
    version2 = String(version2);
  }
  if (typeof version2 !== "string") {
    return null;
  }
  options = options || {};
  let match = null;
  if (!options.rtl) {
    match = version2.match(re[t.COERCE]);
  } else {
    let next;
    while ((next = re[t.COERCERTL].exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    }
    re[t.COERCERTL].lastIndex = -1;
  }
  if (match === null) {
    return null;
  }
  return parse$1(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
};
var coerce_1 = coerce$1;
var iterator;
var hasRequiredIterator;
function requireIterator() {
  if (hasRequiredIterator)
    return iterator;
  hasRequiredIterator = 1;
  iterator = function(Yallist2) {
    Yallist2.prototype[Symbol.iterator] = function* () {
      for (let walker = this.head; walker; walker = walker.next) {
        yield walker.value;
      }
    };
  };
  return iterator;
}
var yallist = Yallist$1;
Yallist$1.Node = Node;
Yallist$1.create = Yallist$1;
function Yallist$1(list) {
  var self2 = this;
  if (!(self2 instanceof Yallist$1)) {
    self2 = new Yallist$1();
  }
  self2.tail = null;
  self2.head = null;
  self2.length = 0;
  if (list && typeof list.forEach === "function") {
    list.forEach(function(item2) {
      self2.push(item2);
    });
  } else if (arguments.length > 0) {
    for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
      self2.push(arguments[i2]);
    }
  }
  return self2;
}
Yallist$1.prototype.removeNode = function(node) {
  if (node.list !== this) {
    throw new Error("removing node which does not belong to this list");
  }
  var next = node.next;
  var prev = node.prev;
  if (next) {
    next.prev = prev;
  }
  if (prev) {
    prev.next = next;
  }
  if (node === this.head) {
    this.head = next;
  }
  if (node === this.tail) {
    this.tail = prev;
  }
  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};
Yallist$1.prototype.unshiftNode = function(node) {
  if (node === this.head) {
    return;
  }
  if (node.list) {
    node.list.removeNode(node);
  }
  var head = this.head;
  node.list = this;
  node.next = head;
  if (head) {
    head.prev = node;
  }
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.length++;
};
Yallist$1.prototype.pushNode = function(node) {
  if (node === this.tail) {
    return;
  }
  if (node.list) {
    node.list.removeNode(node);
  }
  var tail = this.tail;
  node.list = this;
  node.prev = tail;
  if (tail) {
    tail.next = node;
  }
  this.tail = node;
  if (!this.head) {
    this.head = node;
  }
  this.length++;
};
Yallist$1.prototype.push = function() {
  for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    push(this, arguments[i2]);
  }
  return this.length;
};
Yallist$1.prototype.unshift = function() {
  for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    unshift(this, arguments[i2]);
  }
  return this.length;
};
Yallist$1.prototype.pop = function() {
  if (!this.tail) {
    return void 0;
  }
  var res = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
  return res;
};
Yallist$1.prototype.shift = function() {
  if (!this.head) {
    return void 0;
  }
  var res = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  this.length--;
  return res;
};
Yallist$1.prototype.forEach = function(fn2, thisp) {
  thisp = thisp || this;
  for (var walker = this.head, i2 = 0; walker !== null; i2++) {
    fn2.call(thisp, walker.value, i2, this);
    walker = walker.next;
  }
};
Yallist$1.prototype.forEachReverse = function(fn2, thisp) {
  thisp = thisp || this;
  for (var walker = this.tail, i2 = this.length - 1; walker !== null; i2--) {
    fn2.call(thisp, walker.value, i2, this);
    walker = walker.prev;
  }
};
Yallist$1.prototype.get = function(n2) {
  for (var i2 = 0, walker = this.head; walker !== null && i2 < n2; i2++) {
    walker = walker.next;
  }
  if (i2 === n2 && walker !== null) {
    return walker.value;
  }
};
Yallist$1.prototype.getReverse = function(n2) {
  for (var i2 = 0, walker = this.tail; walker !== null && i2 < n2; i2++) {
    walker = walker.prev;
  }
  if (i2 === n2 && walker !== null) {
    return walker.value;
  }
};
Yallist$1.prototype.map = function(fn2, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();
  for (var walker = this.head; walker !== null; ) {
    res.push(fn2.call(thisp, walker.value, this));
    walker = walker.next;
  }
  return res;
};
Yallist$1.prototype.mapReverse = function(fn2, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();
  for (var walker = this.tail; walker !== null; ) {
    res.push(fn2.call(thisp, walker.value, this));
    walker = walker.prev;
  }
  return res;
};
Yallist$1.prototype.reduce = function(fn2, initial) {
  var acc;
  var walker = this.head;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError("Reduce of empty list with no initial value");
  }
  for (var i2 = 0; walker !== null; i2++) {
    acc = fn2(acc, walker.value, i2);
    walker = walker.next;
  }
  return acc;
};
Yallist$1.prototype.reduceReverse = function(fn2, initial) {
  var acc;
  var walker = this.tail;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError("Reduce of empty list with no initial value");
  }
  for (var i2 = this.length - 1; walker !== null; i2--) {
    acc = fn2(acc, walker.value, i2);
    walker = walker.prev;
  }
  return acc;
};
Yallist$1.prototype.toArray = function() {
  var arr = new Array(this.length);
  for (var i2 = 0, walker = this.head; walker !== null; i2++) {
    arr[i2] = walker.value;
    walker = walker.next;
  }
  return arr;
};
Yallist$1.prototype.toArrayReverse = function() {
  var arr = new Array(this.length);
  for (var i2 = 0, walker = this.tail; walker !== null; i2++) {
    arr[i2] = walker.value;
    walker = walker.prev;
  }
  return arr;
};
Yallist$1.prototype.slice = function(from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist$1();
  if (to < from || to < 0) {
    return ret;
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i2 = 0, walker = this.head; walker !== null && i2 < from; i2++) {
    walker = walker.next;
  }
  for (; walker !== null && i2 < to; i2++, walker = walker.next) {
    ret.push(walker.value);
  }
  return ret;
};
Yallist$1.prototype.sliceReverse = function(from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist$1();
  if (to < from || to < 0) {
    return ret;
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i2 = this.length, walker = this.tail; walker !== null && i2 > to; i2--) {
    walker = walker.prev;
  }
  for (; walker !== null && i2 > from; i2--, walker = walker.prev) {
    ret.push(walker.value);
  }
  return ret;
};
Yallist$1.prototype.splice = function(start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1;
  }
  if (start < 0) {
    start = this.length + start;
  }
  for (var i2 = 0, walker = this.head; walker !== null && i2 < start; i2++) {
    walker = walker.next;
  }
  var ret = [];
  for (var i2 = 0; walker && i2 < deleteCount; i2++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }
  if (walker === null) {
    walker = this.tail;
  }
  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }
  for (var i2 = 0; i2 < nodes.length; i2++) {
    walker = insert(this, walker, nodes[i2]);
  }
  return ret;
};
Yallist$1.prototype.reverse = function() {
  var head = this.head;
  var tail = this.tail;
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }
  this.head = tail;
  this.tail = head;
  return this;
};
function insert(self2, node, value) {
  var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
  if (inserted.next === null) {
    self2.tail = inserted;
  }
  if (inserted.prev === null) {
    self2.head = inserted;
  }
  self2.length++;
  return inserted;
}
function push(self2, item2) {
  self2.tail = new Node(item2, self2.tail, null, self2);
  if (!self2.head) {
    self2.head = self2.tail;
  }
  self2.length++;
}
function unshift(self2, item2) {
  self2.head = new Node(item2, null, self2.head, self2);
  if (!self2.tail) {
    self2.tail = self2.head;
  }
  self2.length++;
}
function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }
  this.list = list;
  this.value = value;
  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }
  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}
try {
  requireIterator()(Yallist$1);
} catch (er) {
}
const Yallist = yallist;
const MAX = Symbol("max");
const LENGTH = Symbol("length");
const LENGTH_CALCULATOR = Symbol("lengthCalculator");
const ALLOW_STALE = Symbol("allowStale");
const MAX_AGE = Symbol("maxAge");
const DISPOSE = Symbol("dispose");
const NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
const LRU_LIST = Symbol("lruList");
const CACHE = Symbol("cache");
const UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
const naiveLength = () => 1;
class LRUCache {
  constructor(options) {
    if (typeof options === "number")
      options = { max: options };
    if (!options)
      options = {};
    if (options.max && (typeof options.max !== "number" || options.max < 0))
      throw new TypeError("max must be a non-negative number");
    this[MAX] = options.max || Infinity;
    const lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== "number")
      throw new TypeError("maxAge must be a number");
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  }
  // resize the cache when the max changes.
  set max(mL) {
    if (typeof mL !== "number" || mL < 0)
      throw new TypeError("max must be a non-negative number");
    this[MAX] = mL || Infinity;
    trim(this);
  }
  get max() {
    return this[MAX];
  }
  set allowStale(allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  }
  get allowStale() {
    return this[ALLOW_STALE];
  }
  set maxAge(mA) {
    if (typeof mA !== "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[MAX_AGE] = mA;
    trim(this);
  }
  get maxAge() {
    return this[MAX_AGE];
  }
  // resize the cache when the lengthCalculator changes.
  set lengthCalculator(lC) {
    if (typeof lC !== "function")
      lC = naiveLength;
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach((hit) => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      });
    }
    trim(this);
  }
  get lengthCalculator() {
    return this[LENGTH_CALCULATOR];
  }
  get length() {
    return this[LENGTH];
  }
  get itemCount() {
    return this[LRU_LIST].length;
  }
  rforEach(fn2, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].tail; walker !== null; ) {
      const prev = walker.prev;
      forEachStep(this, fn2, walker, thisp);
      walker = prev;
    }
  }
  forEach(fn2, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].head; walker !== null; ) {
      const next = walker.next;
      forEachStep(this, fn2, walker, thisp);
      walker = next;
    }
  }
  keys() {
    return this[LRU_LIST].toArray().map((k) => k.key);
  }
  values() {
    return this[LRU_LIST].toArray().map((k) => k.value);
  }
  reset() {
    if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
      this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
    }
    this[CACHE] = /* @__PURE__ */ new Map();
    this[LRU_LIST] = new Yallist();
    this[LENGTH] = 0;
  }
  dump() {
    return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
      k: hit.key,
      v: hit.value,
      e: hit.now + (hit.maxAge || 0)
    }).toArray().filter((h) => h);
  }
  dumpLru() {
    return this[LRU_LIST];
  }
  set(key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE];
    if (maxAge && typeof maxAge !== "number")
      throw new TypeError("maxAge must be a number");
    const now2 = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR](value, key);
    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key));
        return false;
      }
      const node = this[CACHE].get(key);
      const item2 = node.value;
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item2.value);
      }
      item2.now = now2;
      item2.maxAge = maxAge;
      item2.value = value;
      this[LENGTH] += len - item2.length;
      item2.length = len;
      this.get(key);
      trim(this);
      return true;
    }
    const hit = new Entry(key, value, len, now2, maxAge);
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value);
      return false;
    }
    this[LENGTH] += hit.length;
    this[LRU_LIST].unshift(hit);
    this[CACHE].set(key, this[LRU_LIST].head);
    trim(this);
    return true;
  }
  has(key) {
    if (!this[CACHE].has(key))
      return false;
    const hit = this[CACHE].get(key).value;
    return !isStale(this, hit);
  }
  get(key) {
    return get(this, key, true);
  }
  peek(key) {
    return get(this, key, false);
  }
  pop() {
    const node = this[LRU_LIST].tail;
    if (!node)
      return null;
    del(this, node);
    return node.value;
  }
  del(key) {
    del(this, this[CACHE].get(key));
  }
  load(arr) {
    this.reset();
    const now2 = Date.now();
    for (let l2 = arr.length - 1; l2 >= 0; l2--) {
      const hit = arr[l2];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0)
        this.set(hit.k, hit.v);
      else {
        const maxAge = expiresAt - now2;
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }
  prune() {
    this[CACHE].forEach((value, key) => get(this, key, false));
  }
}
const get = (self2, key, doUse) => {
  const node = self2[CACHE].get(key);
  if (node) {
    const hit = node.value;
    if (isStale(self2, hit)) {
      del(self2, node);
      if (!self2[ALLOW_STALE])
        return void 0;
    } else {
      if (doUse) {
        if (self2[UPDATE_AGE_ON_GET])
          node.value.now = Date.now();
        self2[LRU_LIST].unshiftNode(node);
      }
    }
    return hit.value;
  }
};
const isStale = (self2, hit) => {
  if (!hit || !hit.maxAge && !self2[MAX_AGE])
    return false;
  const diff2 = Date.now() - hit.now;
  return hit.maxAge ? diff2 > hit.maxAge : self2[MAX_AGE] && diff2 > self2[MAX_AGE];
};
const trim = (self2) => {
  if (self2[LENGTH] > self2[MAX]) {
    for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
      const prev = walker.prev;
      del(self2, walker);
      walker = prev;
    }
  }
};
const del = (self2, node) => {
  if (node) {
    const hit = node.value;
    if (self2[DISPOSE])
      self2[DISPOSE](hit.key, hit.value);
    self2[LENGTH] -= hit.length;
    self2[CACHE].delete(hit.key);
    self2[LRU_LIST].removeNode(node);
  }
};
class Entry {
  constructor(key, value, length2, now2, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length2;
    this.now = now2;
    this.maxAge = maxAge || 0;
  }
}
const forEachStep = (self2, fn2, node, thisp) => {
  let hit = node.value;
  if (isStale(self2, hit)) {
    del(self2, node);
    if (!self2[ALLOW_STALE])
      hit = void 0;
  }
  if (hit)
    fn2.call(thisp, hit.value, hit.key, self2);
};
var lruCache = LRUCache;
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange)
    return range;
  hasRequiredRange = 1;
  class Range2 {
    constructor(range2, options) {
      options = parseOptions2(options);
      if (range2 instanceof Range2) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range2(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator2) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.format();
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2;
      this.set = range2.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${range2}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.format();
    }
    format() {
      this.range = this.set.map((comps) => {
        return comps.join(" ").trim();
      }).join("||").trim();
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      range2 = range2.trim();
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug2("hyphen replace", range2);
      range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
      debug2("comparator trim", range2);
      range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
      range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
      range2 = range2.split(/\s+/).join(" ");
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug2("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t2.COMPARATORLOOSE]);
        });
      }
      debug2("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator2(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range2)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version2) {
      if (!version2) {
        return false;
      }
      if (typeof version2 === "string") {
        try {
          version2 = new SemVer3(version2, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i2 = 0; i2 < this.set.length; i2++) {
        if (testSet(this.set[i2], version2, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range2;
  const LRU = lruCache;
  const cache = new LRU({ max: 1e3 });
  const parseOptions2 = parseOptions_1;
  const Comparator2 = requireComparator();
  const debug2 = debug_1;
  const SemVer3 = semver$1;
  const {
    re: re2,
    t: t2,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = reExports;
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = constants$d;
  const isNullSet = (c) => c.value === "<0.0.0-0";
  const isAny = (c) => c.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    debug2("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug2("caret", comp);
    comp = replaceTildes(comp, options);
    debug2("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug2("xrange", comp);
    comp = replaceStars(comp, options);
    debug2("stars", comp);
    return comp;
  };
  const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
  const replaceTildes = (comp, options) => comp.trim().split(/\s+/).map((c) => {
    return replaceTilde(c, options);
  }).join(" ");
  const replaceTilde = (comp, options) => {
    const r = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
    return comp.replace(r, (_, M2, m2, p, pr) => {
      debug2("tilde", comp, _, M2, m2, p, pr);
      let ret;
      if (isX(M2)) {
        ret = "";
      } else if (isX(m2)) {
        ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M2}.${m2}.0 <${M2}.${+m2 + 1}.0-0`;
      } else if (pr) {
        debug2("replaceTilde pr", pr);
        ret = `>=${M2}.${m2}.${p}-${pr} <${M2}.${+m2 + 1}.0-0`;
      } else {
        ret = `>=${M2}.${m2}.${p} <${M2}.${+m2 + 1}.0-0`;
      }
      debug2("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => comp.trim().split(/\s+/).map((c) => {
    return replaceCaret(c, options);
  }).join(" ");
  const replaceCaret = (comp, options) => {
    debug2("caret", comp, options);
    const r = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M2, m2, p, pr) => {
      debug2("caret", comp, _, M2, m2, p, pr);
      let ret;
      if (isX(M2)) {
        ret = "";
      } else if (isX(m2)) {
        ret = `>=${M2}.0.0${z} <${+M2 + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M2 === "0") {
          ret = `>=${M2}.${m2}.0${z} <${M2}.${+m2 + 1}.0-0`;
        } else {
          ret = `>=${M2}.${m2}.0${z} <${+M2 + 1}.0.0-0`;
        }
      } else if (pr) {
        debug2("replaceCaret pr", pr);
        if (M2 === "0") {
          if (m2 === "0") {
            ret = `>=${M2}.${m2}.${p}-${pr} <${M2}.${m2}.${+p + 1}-0`;
          } else {
            ret = `>=${M2}.${m2}.${p}-${pr} <${M2}.${+m2 + 1}.0-0`;
          }
        } else {
          ret = `>=${M2}.${m2}.${p}-${pr} <${+M2 + 1}.0.0-0`;
        }
      } else {
        debug2("no pr");
        if (M2 === "0") {
          if (m2 === "0") {
            ret = `>=${M2}.${m2}.${p}${z} <${M2}.${m2}.${+p + 1}-0`;
          } else {
            ret = `>=${M2}.${m2}.${p}${z} <${M2}.${+m2 + 1}.0-0`;
          }
        } else {
          ret = `>=${M2}.${m2}.${p} <${+M2 + 1}.0.0-0`;
        }
      }
      debug2("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug2("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => {
      return replaceXRange(c, options);
    }).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
    return comp.replace(r, (ret, gtlt, M2, m2, p, pr) => {
      debug2("xRange", comp, ret, gtlt, M2, m2, p, pr);
      const xM = isX(M2);
      const xm = xM || isX(m2);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m2 = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M2 = +M2 + 1;
            m2 = 0;
            p = 0;
          } else {
            m2 = +m2 + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M2 = +M2 + 1;
          } else {
            m2 = +m2 + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M2}.${m2}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M2}.${m2}.0${pr} <${M2}.${+m2 + 1}.0-0`;
      }
      debug2("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug2("replaceStars", comp, options);
    return comp.trim().replace(re2[t2.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug2("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set3, version2, options) => {
    for (let i2 = 0; i2 < set3.length; i2++) {
      if (!set3[i2].test(version2)) {
        return false;
      }
    }
    if (version2.prerelease.length && !options.includePrerelease) {
      for (let i2 = 0; i2 < set3.length; i2++) {
        debug2(set3[i2].semver);
        if (set3[i2].semver === Comparator2.ANY) {
          continue;
        }
        if (set3[i2].semver.prerelease.length > 0) {
          const allowed = set3[i2].semver;
          if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator$1;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator)
    return comparator$1;
  hasRequiredComparator = 1;
  const ANY2 = Symbol("SemVer ANY");
  class Comparator2 {
    static get ANY() {
      return ANY2;
    }
    constructor(comp, options) {
      options = parseOptions2(options);
      if (comp instanceof Comparator2) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      debug2("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY2) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug2("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
      const m2 = comp.match(r);
      if (!m2) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m2[1] !== void 0 ? m2[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m2[2]) {
        this.semver = ANY2;
      } else {
        this.semver = new SemVer3(m2[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version2) {
      debug2("Comparator.test", version2, this.options.loose);
      if (this.semver === ANY2 || version2 === ANY2) {
        return true;
      }
      if (typeof version2 === "string") {
        try {
          version2 = new SemVer3(version2, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp2(version2, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator2)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range2(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range2(this.value, options).test(comp.semver);
      }
      options = parseOptions2(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp2(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp2(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator$1 = Comparator2;
  const parseOptions2 = parseOptions_1;
  const { re: re2, t: t2 } = reExports;
  const cmp2 = cmp_1;
  const debug2 = debug_1;
  const SemVer3 = semver$1;
  const Range2 = requireRange();
  return comparator$1;
}
const Range$9 = requireRange();
const satisfies$4 = (version2, range2, options) => {
  try {
    range2 = new Range$9(range2, options);
  } catch (er) {
    return false;
  }
  return range2.test(version2);
};
var satisfies_1 = satisfies$4;
const Range$8 = requireRange();
const toComparators$1 = (range2, options) => new Range$8(range2, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
var toComparators_1 = toComparators$1;
const SemVer$4 = semver$1;
const Range$7 = requireRange();
const maxSatisfying$1 = (versions, range2, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$7(range2, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!max || maxSV.compare(v) === -1) {
        max = v;
        maxSV = new SemVer$4(max, options);
      }
    }
  });
  return max;
};
var maxSatisfying_1 = maxSatisfying$1;
const SemVer$3 = semver$1;
const Range$6 = requireRange();
const minSatisfying$1 = (versions, range2, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$6(range2, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!min || minSV.compare(v) === 1) {
        min = v;
        minSV = new SemVer$3(min, options);
      }
    }
  });
  return min;
};
var minSatisfying_1 = minSatisfying$1;
const SemVer$2 = semver$1;
const Range$5 = requireRange();
const gt$2 = gt_1;
const minVersion$1 = (range2, loose) => {
  range2 = new Range$5(range2, loose);
  let minver = new SemVer$2("0.0.0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = new SemVer$2("0.0.0-0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = null;
  for (let i2 = 0; i2 < range2.set.length; ++i2) {
    const comparators = range2.set[i2];
    let setMin = null;
    comparators.forEach((comparator2) => {
      const compver = new SemVer$2(comparator2.semver.version);
      switch (comparator2.operator) {
        case ">":
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
        case "":
        case ">=":
          if (!setMin || gt$2(compver, setMin)) {
            setMin = compver;
          }
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${comparator2.operator}`);
      }
    });
    if (setMin && (!minver || gt$2(minver, setMin))) {
      minver = setMin;
    }
  }
  if (minver && range2.test(minver)) {
    return minver;
  }
  return null;
};
var minVersion_1 = minVersion$1;
const Range$4 = requireRange();
const validRange$1 = (range2, options) => {
  try {
    return new Range$4(range2, options).range || "*";
  } catch (er) {
    return null;
  }
};
var valid$1 = validRange$1;
const SemVer$1 = semver$1;
const Comparator$2 = requireComparator();
const { ANY: ANY$1 } = Comparator$2;
const Range$3 = requireRange();
const satisfies$3 = satisfies_1;
const gt$1 = gt_1;
const lt$1 = lt_1;
const lte$1 = lte_1;
const gte$1 = gte_1;
const outside$3 = (version2, range2, hilo, options) => {
  version2 = new SemVer$1(version2, options);
  range2 = new Range$3(range2, options);
  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case ">":
      gtfn = gt$1;
      ltefn = lte$1;
      ltfn = lt$1;
      comp = ">";
      ecomp = ">=";
      break;
    case "<":
      gtfn = lt$1;
      ltefn = gte$1;
      ltfn = gt$1;
      comp = "<";
      ecomp = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (satisfies$3(version2, range2, options)) {
    return false;
  }
  for (let i2 = 0; i2 < range2.set.length; ++i2) {
    const comparators = range2.set[i2];
    let high = null;
    let low = null;
    comparators.forEach((comparator2) => {
      if (comparator2.semver === ANY$1) {
        comparator2 = new Comparator$2(">=0.0.0");
      }
      high = high || comparator2;
      low = low || comparator2;
      if (gtfn(comparator2.semver, high.semver, options)) {
        high = comparator2;
      } else if (ltfn(comparator2.semver, low.semver, options)) {
        low = comparator2;
      }
    });
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }
    if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
      return false;
    }
  }
  return true;
};
var outside_1 = outside$3;
const outside$2 = outside_1;
const gtr$1 = (version2, range2, options) => outside$2(version2, range2, ">", options);
var gtr_1 = gtr$1;
const outside$1 = outside_1;
const ltr$1 = (version2, range2, options) => outside$1(version2, range2, "<", options);
var ltr_1 = ltr$1;
const Range$2 = requireRange();
const intersects$1 = (r1, r2, options) => {
  r1 = new Range$2(r1, options);
  r2 = new Range$2(r2, options);
  return r1.intersects(r2, options);
};
var intersects_1 = intersects$1;
const satisfies$2 = satisfies_1;
const compare$4 = compare_1$1;
var simplify = (versions, range2, options) => {
  const set3 = [];
  let first = null;
  let prev = null;
  const v = versions.sort((a, b2) => compare$4(a, b2, options));
  for (const version2 of v) {
    const included = satisfies$2(version2, range2, options);
    if (included) {
      prev = version2;
      if (!first) {
        first = version2;
      }
    } else {
      if (prev) {
        set3.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set3.push([first, null]);
  }
  const ranges = [];
  for (const [min, max] of set3) {
    if (min === max) {
      ranges.push(min);
    } else if (!max && min === v[0]) {
      ranges.push("*");
    } else if (!max) {
      ranges.push(`>=${min}`);
    } else if (min === v[0]) {
      ranges.push(`<=${max}`);
    } else {
      ranges.push(`${min} - ${max}`);
    }
  }
  const simplified = ranges.join(" || ");
  const original = typeof range2.raw === "string" ? range2.raw : String(range2);
  return simplified.length < original.length ? simplified : range2;
};
const Range$1 = requireRange();
const Comparator$1 = requireComparator();
const { ANY } = Comparator$1;
const satisfies$1 = satisfies_1;
const compare$3 = compare_1$1;
const subset$1 = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true;
  }
  sub = new Range$1(sub, options);
  dom = new Range$1(dom, options);
  let sawNonNull = false;
  OUTER:
    for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options);
        sawNonNull = sawNonNull || isSub !== null;
        if (isSub) {
          continue OUTER;
        }
      }
      if (sawNonNull) {
        return false;
      }
    }
  return true;
};
const minimumVersionWithPreRelease = [new Comparator$1(">=0.0.0-0")];
const minimumVersion = [new Comparator$1(">=0.0.0")];
const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true;
  }
  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true;
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease;
    } else {
      sub = minimumVersion;
    }
  }
  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true;
    } else {
      dom = minimumVersion;
    }
  }
  const eqSet = /* @__PURE__ */ new Set();
  let gt2, lt2;
  for (const c of sub) {
    if (c.operator === ">" || c.operator === ">=") {
      gt2 = higherGT(gt2, c, options);
    } else if (c.operator === "<" || c.operator === "<=") {
      lt2 = lowerLT(lt2, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }
  if (eqSet.size > 1) {
    return null;
  }
  let gtltComp;
  if (gt2 && lt2) {
    gtltComp = compare$3(gt2.semver, lt2.semver, options);
    if (gtltComp > 0) {
      return null;
    } else if (gtltComp === 0 && (gt2.operator !== ">=" || lt2.operator !== "<=")) {
      return null;
    }
  }
  for (const eq2 of eqSet) {
    if (gt2 && !satisfies$1(eq2, String(gt2), options)) {
      return null;
    }
    if (lt2 && !satisfies$1(eq2, String(lt2), options)) {
      return null;
    }
    for (const c of dom) {
      if (!satisfies$1(eq2, String(c), options)) {
        return false;
      }
    }
    return true;
  }
  let higher, lower;
  let hasDomLT, hasDomGT;
  let needDomLTPre = lt2 && !options.includePrerelease && lt2.semver.prerelease.length ? lt2.semver : false;
  let needDomGTPre = gt2 && !options.includePrerelease && gt2.semver.prerelease.length ? gt2.semver : false;
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt2.operator === "<" && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }
  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
    hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
    if (gt2) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === ">" || c.operator === ">=") {
        higher = higherGT(gt2, c, options);
        if (higher === c && higher !== gt2) {
          return false;
        }
      } else if (gt2.operator === ">=" && !satisfies$1(gt2.semver, String(c), options)) {
        return false;
      }
    }
    if (lt2) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === "<" || c.operator === "<=") {
        lower = lowerLT(lt2, c, options);
        if (lower === c && lower !== lt2) {
          return false;
        }
      } else if (lt2.operator === "<=" && !satisfies$1(lt2.semver, String(c), options)) {
        return false;
      }
    }
    if (!c.operator && (lt2 || gt2) && gtltComp !== 0) {
      return false;
    }
  }
  if (gt2 && hasDomLT && !lt2 && gtltComp !== 0) {
    return false;
  }
  if (lt2 && hasDomGT && !gt2 && gtltComp !== 0) {
    return false;
  }
  if (needDomGTPre || needDomLTPre) {
    return false;
  }
  return true;
};
const higherGT = (a, b2, options) => {
  if (!a) {
    return b2;
  }
  const comp = compare$3(a.semver, b2.semver, options);
  return comp > 0 ? a : comp < 0 ? b2 : b2.operator === ">" && a.operator === ">=" ? b2 : a;
};
const lowerLT = (a, b2, options) => {
  if (!a) {
    return b2;
  }
  const comp = compare$3(a.semver, b2.semver, options);
  return comp < 0 ? a : comp > 0 ? b2 : b2.operator === "<" && a.operator === "<=" ? b2 : a;
};
var subset_1 = subset$1;
const internalRe = reExports;
const constants$c = constants$d;
const SemVer2 = semver$1;
const identifiers = identifiers$1;
const parse = parse_1;
const valid = valid_1;
const clean = clean_1;
const inc = inc_1;
const diff$4 = diff_1$1;
const major = major_1;
const minor = minor_1;
const patch = patch_1;
const prerelease = prerelease_1;
const compare$2 = compare_1$1;
const rcompare = rcompare_1;
const compareLoose = compareLoose_1;
const compareBuild = compareBuild_1;
const sort$1 = sort_1;
const rsort = rsort_1;
const gt = gt_1;
const lt = lt_1;
const eq$1 = eq_1;
const neq = neq_1;
const gte = gte_1;
const lte = lte_1;
const cmp = cmp_1;
const coerce = coerce_1;
const Comparator = requireComparator();
const Range = requireRange();
const satisfies = satisfies_1;
const toComparators = toComparators_1;
const maxSatisfying = maxSatisfying_1;
const minSatisfying = minSatisfying_1;
const minVersion = minVersion_1;
const validRange = valid$1;
const outside = outside_1;
const gtr = gtr_1;
const ltr = ltr_1;
const intersects = intersects_1;
const simplifyRange = simplify;
const subset = subset_1;
var semver = {
  parse,
  valid,
  clean,
  inc,
  diff: diff$4,
  major,
  minor,
  patch,
  prerelease,
  compare: compare$2,
  rcompare,
  compareLoose,
  compareBuild,
  sort: sort$1,
  rsort,
  gt,
  lt,
  eq: eq$1,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer: SemVer2,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants$c.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants$c.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers
};
const name = "concordance";
const version$1 = "5.0.4";
const description = "Compare, format, diff and serialize any JavaScript value";
const main = "index.js";
const files = [
  "lib",
  "index.js"
];
const engines = {
  node: ">=10.18.0 <11 || >=12.14.0 <13 || >=14"
};
const scripts = {
  test: "as-i-preach && c8 ava"
};
const repository = {
  type: "git",
  url: "git+https://github.com/concordancejs/concordance.git"
};
const author = "Mark Wubben (https://novemberborn.net/)";
const license = "ISC";
const bugs = {
  url: "https://github.com/concordancejs/concordance/issues"
};
const homepage = "https://github.com/concordancejs/concordance#readme";
const dependencies = {
  "date-time": "^3.1.0",
  esutils: "^2.0.3",
  "fast-diff": "^1.2.0",
  "js-string-escape": "^1.0.1",
  lodash: "^4.17.15",
  "md5-hex": "^3.0.1",
  semver: "^7.3.2",
  "well-known-symbols": "^2.0.0"
};
const devDependencies = {
  "@novemberborn/eslint-plugin-as-i-preach": "^12.0.0",
  ava: "^3.15.0",
  c8: "^7.1.2",
  eslint: "^6.8.0",
  "eslint-plugin-ava": "^10.3.0",
  "eslint-plugin-import": "^2.20.2",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-promise": "^4.2.1",
  "eslint-plugin-security": "^1.4.0",
  "eslint-plugin-standard": "^4.0.1",
  "eslint-plugin-unicorn": "^17.2.0",
  proxyquire: "^2.1.3"
};
const require$$1 = {
  name,
  version: version$1,
  description,
  main,
  files,
  engines,
  scripts,
  repository,
  author,
  license,
  bugs,
  homepage,
  dependencies,
  devDependencies
};
var property = {};
var symbol = {};
var jsStringEscape = function(string2) {
  return ("" + string2).replace(/["'\\\n\r\u2028\u2029]/g, function(character) {
    switch (character) {
      case '"':
      case "'":
      case "\\":
        return "\\" + character;
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
    }
  });
};
var wellKnownSymbols$1 = {};
const WELL_KNOWN = new Map([
  [Symbol.iterator, "Symbol.iterator"],
  [Symbol.asyncIterator, "Symbol.asyncIterator"],
  [Symbol.match, "Symbol.match"],
  [Symbol.replace, "Symbol.replace"],
  [Symbol.search, "Symbol.search"],
  [Symbol.split, "Symbol.split"],
  [Symbol.hasInstance, "Symbol.hasInstance"],
  [Symbol.isConcatSpreadable, "Symbol.isConcatSpreadable"],
  [Symbol.unscopables, "Symbol.unscopables"],
  [Symbol.species, "Symbol.species"],
  [Symbol.toPrimitive, "Symbol.toPrimitive"],
  [Symbol.toStringTag, "Symbol.toStringTag"]
].filter((entry) => entry[0]));
wellKnownSymbols$1.isWellKnown = (symbol2) => WELL_KNOWN.has(symbol2);
wellKnownSymbols$1.getLabel = (symbol2) => WELL_KNOWN.get(symbol2);
const stringEscape = jsStringEscape;
const wellKnownSymbols = wellKnownSymbols$1;
const constants$b = constants$s;
const formatUtils$6 = formatUtils$f;
const lineBuilder$8 = lineBuilder$i;
const DEEP_EQUAL$a = constants$b.DEEP_EQUAL;
const UNEQUAL$b = constants$b.UNEQUAL;
function describe$c(value) {
  let stringCompare = null;
  const key = Symbol.keyFor(value);
  if (key !== void 0) {
    stringCompare = `Symbol.for(${stringEscape(key)})`;
  } else if (wellKnownSymbols.isWellKnown(value)) {
    stringCompare = wellKnownSymbols.getLabel(value);
  }
  return new SymbolValue({
    stringCompare,
    value
  });
}
symbol.describe = describe$c;
function deserialize$3(state) {
  const stringCompare = state[0];
  const string2 = state[1] || state[0];
  return new DeserializedSymbolValue({
    string: string2,
    stringCompare,
    value: null
  });
}
symbol.deserialize = deserialize$3;
const tag$7 = Symbol("SymbolValue");
symbol.tag = tag$7;
class SymbolValue {
  constructor(props) {
    this.stringCompare = props.stringCompare;
    this.value = props.value;
  }
  compare(expected) {
    if (expected.tag !== tag$7)
      return UNEQUAL$b;
    if (this.stringCompare !== null) {
      return this.stringCompare === expected.stringCompare ? DEEP_EQUAL$a : UNEQUAL$b;
    }
    return this.value === expected.value ? DEEP_EQUAL$a : UNEQUAL$b;
  }
  formatString() {
    if (this.stringCompare !== null)
      return this.stringCompare;
    return stringEscape(this.value.toString());
  }
  formatDeep(theme) {
    return lineBuilder$8.single(formatUtils$6.wrap(theme.symbol, this.formatString()));
  }
  formatAsKey(theme) {
    return formatUtils$6.wrap(theme.property.keyBracket, formatUtils$6.wrap(theme.symbol, this.formatString()));
  }
  serialize() {
    const string2 = this.formatString();
    return this.stringCompare === string2 ? [this.stringCompare] : [this.stringCompare, string2];
  }
}
Object.defineProperty(SymbolValue.prototype, "isPrimitive", { value: true });
Object.defineProperty(SymbolValue.prototype, "tag", { value: tag$7 });
class DeserializedSymbolValue extends SymbolValue {
  constructor(props) {
    super(props);
    this.string = props.string;
  }
  compare(expected) {
    if (expected.tag !== tag$7)
      return UNEQUAL$b;
    if (this.stringCompare !== null) {
      return this.stringCompare === expected.stringCompare ? DEEP_EQUAL$a : UNEQUAL$b;
    }
    return this.string === expected.formatString() ? DEEP_EQUAL$a : UNEQUAL$b;
  }
  formatString() {
    return this.string;
  }
}
const constants$a = constants$s;
const formatUtils$5 = formatUtils$f;
const symbolPrimitive = symbol.tag;
const recursorUtils$5 = recursorUtils$d;
const AMBIGUOUS$3 = constants$a.AMBIGUOUS;
const DEEP_EQUAL$9 = constants$a.DEEP_EQUAL;
const UNEQUAL$a = constants$a.UNEQUAL;
function describeComplex$1(key, value) {
  return new ComplexProperty(key, value);
}
property.describeComplex = describeComplex$1;
function deserializeComplex(key, recursor) {
  const value = recursor();
  return new ComplexProperty(key, value);
}
property.deserializeComplex = deserializeComplex;
function describePrimitive$1(key, value) {
  return new PrimitiveProperty(key, value);
}
property.describePrimitive = describePrimitive$1;
function deserializePrimitive(state) {
  const key = state[0];
  const value = state[1];
  return new PrimitiveProperty(key, value);
}
property.deserializePrimitive = deserializePrimitive;
const complexTag = Symbol("ComplexProperty");
property.complexTag = complexTag;
const primitiveTag = Symbol("PrimitiveProperty");
property.primitiveTag = primitiveTag;
class Property {
  constructor(key) {
    this.key = key;
  }
  compareKeys(expected) {
    const result = this.key.compare(expected.key);
    return result === UNEQUAL$a && this.key.tag === symbolPrimitive && expected.key.tag === symbolPrimitive ? AMBIGUOUS$3 : result;
  }
  prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape2, isCircular) {
    if (isCircular(this.value) || isCircular(expected.value))
      return { compareResult: UNEQUAL$a };
    const rhsFork = recursorUtils$5.fork(rhsRecursor);
    const initialExpected = expected;
    do {
      if (expected === null || expected.isProperty !== true) {
        return {
          actualIsExtraneous: true,
          rhsRecursor: recursorUtils$5.unshift(rhsFork.recursor, initialExpected)
        };
      } else if (this.key.compare(expected.key) === DEEP_EQUAL$9) {
        if (expected === initialExpected) {
          return null;
        } else {
          return {
            expectedIsMissing: true,
            lhsRecursor: recursorUtils$5.unshift(lhsRecursor, this),
            rhsRecursor: rhsFork.recursor
          };
        }
      }
      expected = rhsFork.shared();
    } while (true);
  }
}
Object.defineProperty(Property.prototype, "isProperty", { value: true });
class ComplexProperty extends Property {
  constructor(key, value) {
    super(key);
    this.value = value;
  }
  createRecursor() {
    return recursorUtils$5.singleValue(this.value);
  }
  compare(expected) {
    if (expected.isProperty !== true)
      return UNEQUAL$a;
    const keyResult = this.compareKeys(expected);
    if (keyResult !== DEEP_EQUAL$9)
      return keyResult;
    return this.tag === expected.tag ? this.value.compare(expected.value) : UNEQUAL$a;
  }
  formatShallow(theme, indent) {
    const increaseValueIndent = theme.property.increaseValueIndent === true;
    return new formatUtils$5.SingleValueFormatter(theme, (value) => {
      if (typeof theme.property.customFormat === "function") {
        return theme.property.customFormat(theme, indent, this.key, value);
      }
      return value.withFirstPrefixed(this.key.formatAsKey(theme) + theme.property.separator).withLastPostfixed(theme.property.after);
    }, increaseValueIndent);
  }
  serialize() {
    return this.key;
  }
}
Object.defineProperty(ComplexProperty.prototype, "tag", { value: complexTag });
class PrimitiveProperty extends Property {
  constructor(key, value) {
    super(key);
    this.value = value;
  }
  compare(expected) {
    if (expected.isProperty !== true)
      return UNEQUAL$a;
    const keyResult = this.compareKeys(expected);
    if (keyResult !== DEEP_EQUAL$9)
      return keyResult;
    return this.tag !== expected.tag ? UNEQUAL$a : this.value.compare(expected.value);
  }
  formatDeep(theme, indent) {
    const increaseValueIndent = theme.property.increaseValueIndent === true;
    const valueIndent = increaseValueIndent ? indent.increase() : indent;
    const formatted = this.value.formatDeep(theme, valueIndent);
    if (typeof theme.property.customFormat === "function") {
      return theme.property.customFormat(theme, indent, this.key, formatted);
    }
    return formatted.withFirstPrefixed(this.key.formatAsKey(theme) + theme.property.separator).withLastPostfixed(theme.property.after);
  }
  diffDeep(expected, theme, indent, invert) {
    if (this.tag !== expected.tag || typeof this.value.diffDeep !== "function")
      return null;
    if (this.key.compare(expected.key) !== DEEP_EQUAL$9)
      return null;
    const increaseValueIndent = theme.property.increaseValueIndent === true;
    const valueIndent = increaseValueIndent ? indent.increase() : indent;
    const diff2 = this.value.diffDeep(expected.value, theme, valueIndent, invert);
    if (diff2 === null)
      return null;
    if (typeof theme.property.customFormat === "function") {
      return theme.property.customFormat(theme, indent, this.key, diff2);
    }
    return diff2.withFirstPrefixed(this.key.formatAsKey(theme) + theme.property.separator).withLastPostfixed(theme.property.after);
  }
  serialize() {
    return [this.key, this.value];
  }
}
Object.defineProperty(PrimitiveProperty.prototype, "tag", { value: primitiveTag });
var hasRequiredPluginRegistry;
function requirePluginRegistry() {
  if (hasRequiredPluginRegistry)
    return pluginRegistry$2;
  hasRequiredPluginRegistry = 1;
  const semver$12 = semver;
  const pkg = require$$1;
  const object2 = object$b;
  const constants2 = constants$s;
  const formatUtils2 = formatUtils$f;
  const lineBuilder2 = lineBuilder$i;
  const itemDescriptor2 = item;
  const propertyDescriptor2 = property;
  const stringDescriptor = string$1;
  const recursorUtils2 = recursorUtils$d;
  const themeUtils2 = requireThemeUtils();
  const API_VERSION = 1;
  const CONCORDANCE_VERSION = pkg.version;
  const descriptorRegistry = /* @__PURE__ */ new Map();
  const registry = /* @__PURE__ */ new Map();
  class PluginError extends Error {
    constructor(message, plugin2) {
      super(message);
      this.name = "PluginError";
      this.plugin = plugin2;
    }
  }
  class PluginTypeError extends TypeError {
    constructor(message, plugin2) {
      super(message);
      this.name = "PluginTypeError";
      this.plugin = plugin2;
    }
  }
  class UnsupportedApiError extends PluginError {
    constructor(plugin2) {
      super("Plugin requires an unsupported API version", plugin2);
      this.name = "UnsupportedApiError";
    }
  }
  class UnsupportedError extends PluginError {
    constructor(plugin2) {
      super("Plugin does not support this version of Concordance", plugin2);
      this.name = "UnsupportedError";
    }
  }
  class DuplicateDescriptorTagError extends PluginError {
    constructor(tag2, plugin2) {
      super(`Could not add descriptor: tag ${String(tag2)} has already been registered`, plugin2);
      this.name = "DuplicateDescriptorTagError";
      this.tag = tag2;
    }
  }
  class DuplicateDescriptorIdError extends PluginError {
    constructor(id, plugin2) {
      const printed = typeof id === "number" ? `0x${id.toString(16).toUpperCase()}` : String(id);
      super(`Could not add descriptor: id ${printed} has already been registered`, plugin2);
      this.name = "DuplicateDescriptorIdError";
      this.id = id;
    }
  }
  function verify(plugin2) {
    if (typeof plugin2.name !== "string" || !plugin2.name) {
      throw new PluginTypeError("Plugin must have a `name`", plugin2);
    }
    if (plugin2.apiVersion !== API_VERSION) {
      throw new UnsupportedApiError(plugin2);
    }
    if ("minimalConcordanceVersion" in plugin2) {
      if (!semver$12.valid(plugin2.minimalConcordanceVersion)) {
        throw new PluginTypeError("If specified, `minimalConcordanceVersion` must be a valid SemVer version", plugin2);
      }
      const range2 = `>=${plugin2.minimalConcordanceVersion}`;
      if (!semver$12.satisfies(CONCORDANCE_VERSION, range2)) {
        throw new UnsupportedError(plugin2);
      }
    }
  }
  const publicDescriptorTags = Object.freeze({
    complexItem: itemDescriptor2.complexTag,
    primitiveItem: itemDescriptor2.primitiveTag,
    primitiveProperty: propertyDescriptor2.primitiveTag,
    string: stringDescriptor.tag
  });
  const publicLineBuilder = Object.freeze({
    buffer: lineBuilder2.buffer,
    first: lineBuilder2.first,
    last: lineBuilder2.last,
    line: lineBuilder2.line,
    single: lineBuilder2.single,
    actual: Object.freeze({
      buffer: lineBuilder2.actual.buffer,
      first: lineBuilder2.actual.first,
      last: lineBuilder2.actual.last,
      line: lineBuilder2.actual.line,
      single: lineBuilder2.actual.single
    }),
    expected: Object.freeze({
      buffer: lineBuilder2.expected.buffer,
      first: lineBuilder2.expected.first,
      last: lineBuilder2.expected.last,
      line: lineBuilder2.expected.line,
      single: lineBuilder2.expected.single
    })
  });
  function modifyTheme(descriptor, modifier) {
    themeUtils2.addModifier(descriptor, modifier);
    return descriptor;
  }
  function add(plugin2) {
    verify(plugin2);
    const name2 = plugin2.name;
    if (registry.has(name2))
      return registry.get(name2);
    const id2deserialize2 = /* @__PURE__ */ new Map();
    const tag2id2 = /* @__PURE__ */ new Map();
    const addDescriptor = (id, tag2, deserialize2) => {
      if (id2deserialize2.has(id))
        throw new DuplicateDescriptorIdError(id, plugin2);
      if (descriptorRegistry.has(tag2) || tag2id2.has(tag2))
        throw new DuplicateDescriptorTagError(tag2, plugin2);
      id2deserialize2.set(id, deserialize2);
      tag2id2.set(tag2, id);
    };
    const tryDescribeValue = plugin2.register({
      // Concordance makes assumptions about when AMBIGUOUS occurs. Do not expose
      // it to plugins.
      UNEQUAL: constants2.UNEQUAL,
      SHALLOW_EQUAL: constants2.SHALLOW_EQUAL,
      DEEP_EQUAL: constants2.DEEP_EQUAL,
      ObjectValue: object2.ObjectValue,
      DescribedMixin: object2.DescribedMixin,
      DeserializedMixin: object2.DeserializedMixin,
      addDescriptor,
      applyThemeModifiers: themeUtils2.applyModifiers,
      descriptorTags: publicDescriptorTags,
      lineBuilder: publicLineBuilder,
      mapRecursor: recursorUtils2.map,
      modifyTheme,
      wrapFromTheme: formatUtils2.wrap
    });
    const registered = {
      id2deserialize: id2deserialize2,
      serializerVersion: plugin2.serializerVersion,
      name: name2,
      tag2id: tag2id2,
      theme: plugin2.theme || {},
      tryDescribeValue
    };
    registry.set(name2, registered);
    for (const tag2 of tag2id2.keys()) {
      descriptorRegistry.set(tag2, registered);
    }
    return registered;
  }
  pluginRegistry$2.add = add;
  function getDeserializers(plugins2) {
    return plugins2.map((plugin2) => {
      const registered = add(plugin2);
      return {
        id2deserialize: registered.id2deserialize,
        name: registered.name,
        serializerVersion: registered.serializerVersion
      };
    });
  }
  pluginRegistry$2.getDeserializers = getDeserializers;
  function getThemes(plugins2) {
    return plugins2.map((plugin2) => {
      const registered = add(plugin2);
      return {
        name: registered.name,
        theme: registered.theme
      };
    });
  }
  pluginRegistry$2.getThemes = getThemes;
  function getTryDescribeValues(plugins2) {
    return plugins2.map((plugin2) => add(plugin2).tryDescribeValue);
  }
  pluginRegistry$2.getTryDescribeValues = getTryDescribeValues;
  function resolveDescriptorRef(tag2) {
    if (!descriptorRegistry.has(tag2))
      return null;
    const registered = descriptorRegistry.get(tag2);
    return {
      id: registered.tag2id.get(tag2),
      name: registered.name,
      serialization: {
        serializerVersion: registered.serializerVersion
      }
    };
  }
  pluginRegistry$2.resolveDescriptorRef = resolveDescriptorRef;
  return pluginRegistry$2;
}
var hasRequiredThemeUtils;
function requireThemeUtils() {
  if (hasRequiredThemeUtils)
    return themeUtils$3;
  hasRequiredThemeUtils = 1;
  const cloneDeep2 = cloneDeep_1;
  const merge2 = merge_1;
  const pluginRegistry2 = requirePluginRegistry();
  function freezeTheme(theme) {
    const queue = [theme];
    while (queue.length > 0) {
      const object2 = queue.shift();
      Object.freeze(object2);
      for (const key of Object.keys(object2)) {
        const value = object2[key];
        if (value !== null && typeof value === "object") {
          queue.push(value);
        }
      }
    }
    return theme;
  }
  const defaultTheme = freezeTheme({
    bigInt: { open: "", close: "" },
    boolean: { open: "", close: "" },
    circular: "[Circular]",
    date: {
      invalid: "invalid",
      value: { open: "", close: "" }
    },
    diffGutters: {
      actual: "- ",
      expected: "+ ",
      padding: "  "
    },
    error: {
      ctor: { open: "(", close: ")" },
      name: { open: "", close: "" }
    },
    function: {
      name: { open: "", close: "" },
      stringTag: { open: "", close: "" }
    },
    global: { open: "", close: "" },
    item: {
      after: ",",
      customFormat: null,
      increaseValueIndent: false
    },
    list: { openBracket: "[", closeBracket: "]" },
    mapEntry: {
      after: ",",
      separator: " => "
    },
    maxDepth: "…",
    null: { open: "", close: "" },
    number: { open: "", close: "" },
    object: {
      openBracket: "{",
      closeBracket: "}",
      ctor: { open: "", close: "" },
      stringTag: { open: "@", close: "" },
      secondaryStringTag: { open: "@", close: "" }
    },
    property: {
      after: ",",
      customFormat: null,
      keyBracket: { open: "[", close: "]" },
      separator: ": ",
      increaseValueIndent: false
    },
    regexp: {
      source: { open: "/", close: "/" },
      flags: { open: "", close: "" },
      separator: "---"
    },
    stats: { separator: "---" },
    string: {
      open: "",
      close: "",
      line: { open: "'", close: "'", escapeQuote: "'" },
      multiline: { start: "`", end: "`", escapeQuote: "`" },
      controlPicture: { open: "", close: "" },
      diff: {
        insert: { open: "", close: "" },
        delete: { open: "", close: "" },
        equal: { open: "", close: "" },
        insertLine: { open: "", close: "" },
        deleteLine: { open: "", close: "" }
      }
    },
    symbol: { open: "", close: "" },
    typedArray: {
      bytes: { open: "", close: "" }
    },
    undefined: { open: "", close: "" }
  });
  const pluginRefs = /* @__PURE__ */ new Map();
  pluginRefs.count = 0;
  const normalizedPluginThemes = /* @__PURE__ */ new Map();
  function normalizePlugins(plugins2) {
    if (!Array.isArray(plugins2) || plugins2.length === 0)
      return null;
    const refs = [];
    const themes = [];
    for (const fromPlugin of pluginRegistry2.getThemes(plugins2)) {
      if (!pluginRefs.has(fromPlugin.name)) {
        pluginRefs.set(fromPlugin.name, pluginRefs.count++);
      }
      refs.push(pluginRefs.get(fromPlugin.name));
      themes.push(fromPlugin.theme);
    }
    const ref = refs.join(".");
    if (normalizedPluginThemes.has(ref)) {
      return {
        ref,
        theme: normalizedPluginThemes.get(ref)
      };
    }
    const theme = freezeTheme(themes.reduce((acc, pluginTheme) => {
      return merge2(acc, pluginTheme);
    }, cloneDeep2(defaultTheme)));
    normalizedPluginThemes.set(ref, theme);
    return { ref, theme };
  }
  const normalizedCache = /* @__PURE__ */ new WeakMap();
  function normalize2(options) {
    options = Object.assign({ plugins: [], theme: null }, options);
    const normalizedPlugins = normalizePlugins(options.plugins);
    if (!options.theme) {
      return normalizedPlugins ? normalizedPlugins.theme : defaultTheme;
    }
    const entry = normalizedCache.get(options.theme) || { theme: null, withPlugins: /* @__PURE__ */ new Map() };
    if (!normalizedCache.has(options.theme))
      normalizedCache.set(options.theme, entry);
    if (normalizedPlugins) {
      if (entry.withPlugins.has(normalizedPlugins.ref)) {
        return entry.withPlugins.get(normalizedPlugins.ref);
      }
      const theme = freezeTheme(merge2(cloneDeep2(normalizedPlugins.theme), options.theme));
      entry.withPlugins.set(normalizedPlugins.ref, theme);
      return theme;
    }
    if (!entry.theme) {
      entry.theme = freezeTheme(merge2(cloneDeep2(defaultTheme), options.theme));
    }
    return entry.theme;
  }
  themeUtils$3.normalize = normalize2;
  const modifiers = /* @__PURE__ */ new WeakMap();
  function addModifier(descriptor, modifier) {
    if (modifiers.has(descriptor)) {
      modifiers.get(descriptor).add(modifier);
    } else {
      modifiers.set(descriptor, /* @__PURE__ */ new Set([modifier]));
    }
  }
  themeUtils$3.addModifier = addModifier;
  const modifierCache = /* @__PURE__ */ new WeakMap();
  const originalCache = /* @__PURE__ */ new WeakMap();
  function applyModifiers(descriptor, theme) {
    if (!modifiers.has(descriptor))
      return theme;
    return Array.from(modifiers.get(descriptor)).reduce((prev, modifier) => {
      const cache = modifierCache.get(modifier) || /* @__PURE__ */ new WeakMap();
      if (!modifierCache.has(modifier))
        modifierCache.set(modifier, cache);
      if (cache.has(prev))
        return cache.get(prev);
      const modifiedTheme = cloneDeep2(prev);
      modifier(modifiedTheme);
      freezeTheme(modifiedTheme);
      cache.set(prev, modifiedTheme);
      originalCache.set(modifiedTheme, theme);
      return modifiedTheme;
    }, theme);
  }
  themeUtils$3.applyModifiers = applyModifiers;
  function applyModifiersToOriginal(descriptor, theme) {
    return applyModifiers(descriptor, originalCache.get(theme) || theme);
  }
  themeUtils$3.applyModifiersToOriginal = applyModifiersToOriginal;
  return themeUtils$3;
}
const constants$9 = constants$s;
const lineBuilder$7 = lineBuilder$i;
const recursorUtils$4 = recursorUtils$d;
const themeUtils$2 = requireThemeUtils();
const DEEP_EQUAL$8 = constants$9.DEEP_EQUAL;
const UNEQUAL$9 = constants$9.UNEQUAL;
const SHALLOW_EQUAL$3 = constants$9.SHALLOW_EQUAL;
function describe$b(keyDescriptor, valueDescriptor) {
  const keyIsPrimitive = keyDescriptor.isPrimitive === true;
  const valueIsPrimitive = valueDescriptor.isPrimitive === true;
  return new MapEntry(keyDescriptor, valueDescriptor, keyIsPrimitive, valueIsPrimitive);
}
mapEntry.describe = describe$b;
function deserialize$2(state, recursor) {
  const keyIsPrimitive = state[0];
  const valueIsPrimitive = state[1];
  const keyDescriptor = recursor();
  const valueDescriptor = recursor();
  return new MapEntry(keyDescriptor, valueDescriptor, keyIsPrimitive, valueIsPrimitive);
}
mapEntry.deserialize = deserialize$2;
const tag$6 = Symbol("MapEntry");
mapEntry.tag = tag$6;
function mergeWithKey(theme, key, values) {
  const lines = lineBuilder$7.buffer();
  const keyRemainder = lineBuilder$7.buffer();
  for (const line of key) {
    if (!line.isLast && !line.hasGutter) {
      lines.append(line);
    } else {
      keyRemainder.append(line);
    }
  }
  for (const value of values) {
    lines.append(keyRemainder.mergeWithInfix(theme.mapEntry.separator, value).withLastPostfixed(theme.mapEntry.after));
  }
  return lines;
}
class MapEntry {
  constructor(key, value, keyIsPrimitive, valueIsPrimitive) {
    this.key = key;
    this.value = value;
    this.keyIsPrimitive = keyIsPrimitive;
    this.valueIsPrimitive = valueIsPrimitive;
  }
  createRecursor() {
    let emitKey = true;
    let emitValue = true;
    return () => {
      if (emitKey) {
        emitKey = false;
        return this.key;
      }
      if (emitValue) {
        emitValue = false;
        return this.value;
      }
      return null;
    };
  }
  compare(expected) {
    if (this.tag !== expected.tag)
      return UNEQUAL$9;
    if (this.keyIsPrimitive !== expected.keyIsPrimitive)
      return UNEQUAL$9;
    if (this.valueIsPrimitive !== expected.valueIsPrimitive)
      return UNEQUAL$9;
    if (!this.keyIsPrimitive)
      return SHALLOW_EQUAL$3;
    const keyResult = this.key.compare(expected.key);
    if (keyResult !== DEEP_EQUAL$8)
      return keyResult;
    if (!this.valueIsPrimitive)
      return SHALLOW_EQUAL$3;
    return this.value.compare(expected.value);
  }
  formatDeep(theme, indent) {
    if (!this.keyIsPrimitive || typeof this.value.formatDeep !== "function")
      return null;
    const value = this.value.formatDeep(themeUtils$2.applyModifiersToOriginal(this.value, theme), indent);
    if (value === null)
      return null;
    const key = this.key.formatDeep(themeUtils$2.applyModifiersToOriginal(this.key, theme), indent);
    return mergeWithKey(theme, key, [value]);
  }
  formatShallow(theme, indent) {
    let key = null;
    const values = [];
    return {
      append: (formatted, origin) => {
        if (this.key === origin) {
          key = formatted;
        } else {
          values.push(formatted);
        }
      },
      finalize() {
        return mergeWithKey(theme, key, values);
      }
    };
  }
  diffDeep(expected, theme, indent, invert) {
    if (this.tag !== expected.tag || typeof this.value.diffDeep !== "function")
      return null;
    if (!this.keyIsPrimitive || !expected.keyIsPrimitive || this.key.compare(expected.key) !== DEEP_EQUAL$8) {
      return null;
    }
    const diff2 = this.value.diffDeep(expected.value, themeUtils$2.applyModifiersToOriginal(this.value, theme), indent, invert);
    if (diff2 === null)
      return null;
    const key = this.key.formatDeep(themeUtils$2.applyModifiersToOriginal(this.key, theme), indent, "");
    return mergeWithKey(theme, key, [diff2]);
  }
  prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape2, isCircular) {
    if (isCircular(this.value) || isCircular(expected.value))
      return { compareResult: UNEQUAL$9 };
    const compareResult = this.compare(expected);
    const keysAreEqual = this.tag === expected.tag && this.key.compare(expected.key) === DEEP_EQUAL$8;
    if (compareResult === DEEP_EQUAL$8 || keysAreEqual)
      return { compareResult };
    const lhsFork = recursorUtils$4.fork(lhsRecursor);
    const rhsFork = recursorUtils$4.fork(rhsRecursor);
    const initialExpected = expected;
    let expectedIsMissing = false;
    while (!expectedIsMissing && expected !== null && this.tag === expected.tag) {
      if (expected.keyIsPrimitive) {
        expectedIsMissing = this.key.compare(expected.key) !== UNEQUAL$9;
      } else {
        expectedIsMissing = compareComplexShape2(this.key, expected.key) !== UNEQUAL$9;
      }
      expected = rhsFork.shared();
    }
    let actualIsExtraneous = false;
    if (this.tag === initialExpected.tag) {
      if (initialExpected.keyIsPrimitive) {
        let actual = this;
        while (!actualIsExtraneous && actual !== null && this.tag === actual.tag) {
          if (actual.keyIsPrimitive) {
            actualIsExtraneous = initialExpected.key.compare(actual.key) === DEEP_EQUAL$8;
          }
          actual = lhsFork.shared();
        }
      } else {
        let actual = this;
        while (!actualIsExtraneous && actual !== null && this.tag === actual.tag) {
          if (!actual.keyIsPrimitive) {
            actualIsExtraneous = compareComplexShape2(actual.key, initialExpected.key) !== UNEQUAL$9;
          }
          actual = lhsFork.shared();
        }
      }
    }
    if (actualIsExtraneous && !expectedIsMissing) {
      return {
        actualIsExtraneous: true,
        lhsRecursor: lhsFork.recursor,
        rhsRecursor: recursorUtils$4.unshift(rhsFork.recursor, initialExpected)
      };
    }
    if (expectedIsMissing && !actualIsExtraneous) {
      return {
        expectedIsMissing: true,
        lhsRecursor: recursorUtils$4.unshift(lhsFork.recursor, this),
        rhsRecursor: rhsFork.recursor
      };
    }
    let mustRecurse = false;
    if (!this.keyIsPrimitive && !initialExpected.keyIsPrimitive) {
      if (this.valueIsPrimitive || initialExpected.valueIsPrimitive) {
        mustRecurse = this.value.compare(initialExpected.value) !== UNEQUAL$9;
      } else {
        mustRecurse = compareComplexShape2(this.value, initialExpected.value) !== UNEQUAL$9;
      }
    }
    return {
      mustRecurse,
      isUnequal: !mustRecurse,
      lhsRecursor: lhsFork.recursor,
      rhsRecursor: rhsFork.recursor
    };
  }
  serialize() {
    return [this.keyIsPrimitive, this.valueIsPrimitive];
  }
}
Object.defineProperty(MapEntry.prototype, "isMapEntry", { value: true });
Object.defineProperty(MapEntry.prototype, "tag", { value: tag$6 });
var bigInt = {};
const constants$8 = constants$s;
const formatUtils$4 = formatUtils$f;
const lineBuilder$6 = lineBuilder$i;
const DEEP_EQUAL$7 = constants$8.DEEP_EQUAL;
const UNEQUAL$8 = constants$8.UNEQUAL;
function describe$a(value) {
  return new BigIntValue(value);
}
bigInt.describe = describe$a;
bigInt.deserialize = describe$a;
const tag$5 = Symbol("BigIntValue");
bigInt.tag = tag$5;
class BigIntValue {
  constructor(value) {
    this.value = value;
  }
  compare(expected) {
    return expected.tag === tag$5 && Object.is(this.value, expected.value) ? DEEP_EQUAL$7 : UNEQUAL$8;
  }
  formatDeep(theme) {
    return lineBuilder$6.single(formatUtils$4.wrap(theme.bigInt, `${this.value}n`));
  }
  serialize() {
    return this.value;
  }
}
Object.defineProperty(BigIntValue.prototype, "isPrimitive", { value: true });
Object.defineProperty(BigIntValue.prototype, "tag", { value: tag$5 });
var boolean = {};
const constants$7 = constants$s;
const formatUtils$3 = formatUtils$f;
const lineBuilder$5 = lineBuilder$i;
const DEEP_EQUAL$6 = constants$7.DEEP_EQUAL;
const UNEQUAL$7 = constants$7.UNEQUAL;
function describe$9(value) {
  return new BooleanValue(value);
}
boolean.describe = describe$9;
boolean.deserialize = describe$9;
const tag$4 = Symbol("BooleanValue");
boolean.tag = tag$4;
class BooleanValue {
  constructor(value) {
    this.value = value;
  }
  compare(expected) {
    return this.tag === expected.tag && this.value === expected.value ? DEEP_EQUAL$6 : UNEQUAL$7;
  }
  formatDeep(theme) {
    return lineBuilder$5.single(formatUtils$3.wrap(theme.boolean, this.value === true ? "true" : "false"));
  }
  serialize() {
    return this.value;
  }
}
Object.defineProperty(BooleanValue.prototype, "isPrimitive", { value: true });
Object.defineProperty(BooleanValue.prototype, "tag", { value: tag$4 });
var _null = {};
const constants$6 = constants$s;
const formatUtils$2 = formatUtils$f;
const lineBuilder$4 = lineBuilder$i;
const DEEP_EQUAL$5 = constants$6.DEEP_EQUAL;
const UNEQUAL$6 = constants$6.UNEQUAL;
function describe$8() {
  return new NullValue();
}
_null.describe = describe$8;
_null.deserialize = describe$8;
const tag$3 = Symbol("NullValue");
_null.tag = tag$3;
class NullValue {
  compare(expected) {
    return expected.tag === tag$3 ? DEEP_EQUAL$5 : UNEQUAL$6;
  }
  formatDeep(theme) {
    return lineBuilder$4.single(formatUtils$2.wrap(theme.null, "null"));
  }
}
Object.defineProperty(NullValue.prototype, "isPrimitive", { value: true });
Object.defineProperty(NullValue.prototype, "tag", { value: tag$3 });
var number = {};
const constants$5 = constants$s;
const formatUtils$1 = formatUtils$f;
const lineBuilder$3 = lineBuilder$i;
const DEEP_EQUAL$4 = constants$5.DEEP_EQUAL;
const UNEQUAL$5 = constants$5.UNEQUAL;
function describe$7(value) {
  return new NumberValue(value);
}
number.describe = describe$7;
number.deserialize = describe$7;
const tag$2 = Symbol("NumberValue");
number.tag = tag$2;
class NumberValue {
  constructor(value) {
    this.value = value;
  }
  compare(expected) {
    return expected.tag === tag$2 && Object.is(this.value, expected.value) ? DEEP_EQUAL$4 : UNEQUAL$5;
  }
  formatDeep(theme) {
    const string2 = Object.is(this.value, -0) ? "-0" : String(this.value);
    return lineBuilder$3.single(formatUtils$1.wrap(theme.number, string2));
  }
  serialize() {
    return this.value;
  }
}
Object.defineProperty(NumberValue.prototype, "isPrimitive", { value: true });
Object.defineProperty(NumberValue.prototype, "tag", { value: tag$2 });
var _undefined = {};
const constants$4 = constants$s;
const formatUtils = formatUtils$f;
const lineBuilder$2 = lineBuilder$i;
const DEEP_EQUAL$3 = constants$4.DEEP_EQUAL;
const UNEQUAL$4 = constants$4.UNEQUAL;
function describe$6() {
  return new UndefinedValue();
}
_undefined.describe = describe$6;
_undefined.deserialize = describe$6;
const tag$1 = Symbol("UndefinedValue");
_undefined.tag = tag$1;
class UndefinedValue {
  compare(expected) {
    return expected.tag === tag$1 ? DEEP_EQUAL$3 : UNEQUAL$4;
  }
  formatDeep(theme) {
    return lineBuilder$2.single(formatUtils.wrap(theme.undefined, "undefined"));
  }
}
Object.defineProperty(UndefinedValue.prototype, "isPrimitive", { value: true });
Object.defineProperty(UndefinedValue.prototype, "tag", { value: tag$1 });
const Registry2 = Registry_1;
const argumentsValue$1 = _arguments;
const arrayBufferValue$1 = arrayBuffer;
const boxedValue$1 = boxed;
const dataViewValue$1 = dataView;
const dateValue$1 = date;
const errorValue$1 = error;
const functionValue$1 = _function$1;
const globalValue$1 = global$2;
const mapValue$1 = map$1;
const objectValue$1 = object$b;
const promiseValue$1 = promise;
const regexpValue$1 = regexp;
const setValue$1 = set$1;
const typedArrayValue$1 = typedArray$2;
const getCtor = getCtor_1;
const getStringTag = getStringTagExports;
const itemDescriptor$1 = item;
const mapEntryDescriptor$1 = mapEntry;
const propertyDescriptor$1 = property;
const pluginRegistry$1 = requirePluginRegistry();
const bigIntValue$1 = bigInt;
const booleanValue$1 = boolean;
const nullValue$1 = _null;
const numberValue$1 = number;
const stringValue$1 = string$1;
const symbolValue$1 = symbol;
const undefinedValue$1 = _undefined;
const SpecializedComplexes = /* @__PURE__ */ new Map([
  ["Arguments", argumentsValue$1.describe],
  ["ArrayBuffer", arrayBufferValue$1.describe],
  ["DataView", dataViewValue$1.describe],
  ["Date", dateValue$1.describe],
  ["Error", errorValue$1.describe],
  ["Float32Array", typedArrayValue$1.describe],
  ["Float64Array", typedArrayValue$1.describe],
  ["Function", functionValue$1.describe],
  ["GeneratorFunction", functionValue$1.describe],
  ["global", globalValue$1.describe],
  ["Int16Array", typedArrayValue$1.describe],
  ["Int32Array", typedArrayValue$1.describe],
  ["Int8Array", typedArrayValue$1.describe],
  ["Map", mapValue$1.describe],
  ["Promise", promiseValue$1.describe],
  ["RegExp", regexpValue$1.describe],
  ["Set", setValue$1.describe],
  ["Uint16Array", typedArrayValue$1.describe],
  ["Uint32Array", typedArrayValue$1.describe],
  ["Uint8Array", typedArrayValue$1.describe],
  ["Uint8ClampedArray", typedArrayValue$1.describe]
]);
function describePrimitive(value) {
  if (value === null)
    return nullValue$1.describe();
  if (value === void 0)
    return undefinedValue$1.describe();
  if (value === true || value === false)
    return booleanValue$1.describe(value);
  const type2 = typeof value;
  if (type2 === "bigint")
    return bigIntValue$1.describe(value);
  if (type2 === "number")
    return numberValue$1.describe(value);
  if (type2 === "string")
    return stringValue$1.describe(value);
  if (type2 === "symbol")
    return symbolValue$1.describe(value);
  return null;
}
function unboxComplex(tag2, complex) {
  if (typeof complex.valueOf === "function") {
    const value = complex.valueOf();
    if (value !== complex)
      return describePrimitive(value);
  }
  return null;
}
function registerPlugins(plugins2) {
  if (!Array.isArray(plugins2) || plugins2.length === 0)
    return () => null;
  const tryFns = pluginRegistry$1.getTryDescribeValues(plugins2);
  return (value, stringTag2, ctor) => {
    for (const tryDescribeValue of tryFns) {
      const describeValue = tryDescribeValue(value, stringTag2, ctor);
      if (describeValue)
        return describeValue;
    }
    return null;
  };
}
function describeComplex(value, registry, tryPlugins, describeAny, describeItem2, describeMapEntry2, describeProperty) {
  if (registry.has(value))
    return registry.get(value);
  const stringTag2 = getStringTag(value);
  const ctor = getCtor(stringTag2, value);
  const pointer2 = registry.alloc(value);
  let unboxed;
  let describeValue = tryPlugins(value, stringTag2, ctor);
  if (describeValue === null) {
    if (SpecializedComplexes.has(stringTag2)) {
      describeValue = SpecializedComplexes.get(stringTag2);
    } else {
      unboxed = unboxComplex(stringTag2, value);
      if (unboxed !== null) {
        describeValue = boxedValue$1.describe;
      } else {
        describeValue = objectValue$1.describe;
      }
    }
  }
  const descriptor = describeValue({
    ctor,
    describeAny,
    describeItem: describeItem2,
    describeMapEntry: describeMapEntry2,
    describeProperty,
    pointer: pointer2.index,
    stringTag: stringTag2,
    unboxed,
    value
  });
  pointer2.descriptor = descriptor;
  return descriptor;
}
const describeItem = (index, valueDescriptor) => {
  return valueDescriptor.isPrimitive === true ? itemDescriptor$1.describePrimitive(index, valueDescriptor) : itemDescriptor$1.describeComplex(index, valueDescriptor);
};
const describeMapEntry = (keyDescriptor, valueDescriptor) => {
  return mapEntryDescriptor$1.describe(keyDescriptor, valueDescriptor);
};
function describe$5(value, options) {
  const primitive = describePrimitive(value);
  if (primitive !== null)
    return primitive;
  const registry = new Registry2();
  const tryPlugins = registerPlugins(options && options.plugins);
  const curriedComplex = (c) => {
    return describeComplex(c, registry, tryPlugins, describeAny, describeItem, describeMapEntry, describeProperty);
  };
  const describeAny = (any) => {
    const descriptor = describePrimitive(any);
    return descriptor !== null ? descriptor : curriedComplex(any);
  };
  const describeProperty = (key, valueDescriptor) => {
    const keyDescriptor = describePrimitive(key);
    return valueDescriptor.isPrimitive === true ? propertyDescriptor$1.describePrimitive(keyDescriptor, valueDescriptor) : propertyDescriptor$1.describeComplex(keyDescriptor, valueDescriptor);
  };
  return curriedComplex(value);
}
var describe_1$1 = describe$5;
const argumentsObject = _arguments.tag;
const constants$3 = constants$s;
const AMBIGUOUS$2 = constants$3.AMBIGUOUS;
const SHALLOW_EQUAL$2 = constants$3.SHALLOW_EQUAL;
function shouldCompareDeep$2(result, lhs, rhs) {
  if (result === SHALLOW_EQUAL$2)
    return true;
  if (result !== AMBIGUOUS$2)
    return false;
  return lhs.tag === argumentsObject || lhs.isProperty === true;
}
var shouldCompareDeep_1 = shouldCompareDeep$2;
var symbolProperties$2 = {};
const constants$2 = constants$s;
const recursorUtils$3 = recursorUtils$d;
const DEEP_EQUAL$2 = constants$2.DEEP_EQUAL;
const SHALLOW_EQUAL$1 = constants$2.SHALLOW_EQUAL;
const UNEQUAL$3 = constants$2.UNEQUAL;
class Comparable {
  constructor(properties) {
    this.properties = properties;
    this.ordered = properties.slice();
  }
  createRecursor() {
    const length2 = this.ordered.length;
    let index = 0;
    return () => {
      if (index === length2)
        return null;
      return this.ordered[index++];
    };
  }
  compare(expected) {
    if (this.properties.length !== expected.properties.length)
      return UNEQUAL$3;
    const ordered = [];
    const processed = /* @__PURE__ */ new Set();
    for (const property2 of this.properties) {
      let extraneous = true;
      for (const other of expected.properties) {
        if (processed.has(other.key))
          continue;
        if (property2.key.compare(other.key) === DEEP_EQUAL$2) {
          extraneous = false;
          processed.add(other.key);
          ordered.push(other);
          break;
        }
      }
      if (extraneous)
        return UNEQUAL$3;
    }
    expected.ordered = ordered;
    return SHALLOW_EQUAL$1;
  }
  prepareDiff(expected) {
    const missingProperties = [];
    const ordered = [];
    const processed = /* @__PURE__ */ new Set();
    for (const other of expected.properties) {
      let missing = true;
      for (const property2 of this.properties) {
        if (processed.has(property2.key))
          continue;
        if (property2.key.compare(other.key) === DEEP_EQUAL$2) {
          missing = false;
          processed.add(property2.key);
          ordered.push(other);
          break;
        }
      }
      if (missing) {
        missingProperties.push(other);
      }
    }
    expected.ordered = ordered.concat(missingProperties);
    return { mustRecurse: true };
  }
}
Object.defineProperty(Comparable.prototype, "isSymbolPropertiesComparable", { value: true });
symbolProperties$2.Comparable = Comparable;
class Collector {
  constructor(firstProperty, recursor) {
    this.properties = [firstProperty];
    this.recursor = recursor;
    this.remainder = null;
  }
  collectAll() {
    do {
      const next = this.recursor();
      if (next && next.isProperty === true) {
        this.properties.push(next);
      } else {
        return next;
      }
    } while (true);
  }
  createRecursor() {
    return recursorUtils$3.singleValue(new Comparable(this.properties));
  }
}
Object.defineProperty(Collector.prototype, "isSymbolPropertiesCollector", { value: true });
symbolProperties$2.Collector = Collector;
const Circular$2 = Circular_1;
const constants$1 = constants$s;
const describe$4 = describe_1$1;
const recursorUtils$2 = recursorUtils$d;
const shouldCompareDeep$1 = shouldCompareDeep_1;
const symbolProperties$1 = symbolProperties$2;
const AMBIGUOUS$1 = constants$1.AMBIGUOUS;
const DEEP_EQUAL$1 = constants$1.DEEP_EQUAL;
const UNEQUAL$2 = constants$1.UNEQUAL;
function shortcircuitPrimitive(value) {
  if (value === null || value === void 0 || value === true || value === false)
    return true;
  const type2 = typeof value;
  if (type2 === "string" || type2 === "symbol")
    return true;
  if (type2 === "number")
    return !isNaN(value);
  return false;
}
function compareDescriptors$1(lhs, rhs) {
  const lhsCircular = new Circular$2();
  const rhsCircular = new Circular$2();
  const lhsStack = [];
  const rhsStack = [];
  let topIndex = -1;
  do {
    let result;
    if (lhsCircular.has(lhs)) {
      result = lhsCircular.get(lhs) === rhsCircular.get(rhs) ? DEEP_EQUAL$1 : UNEQUAL$2;
    } else if (rhsCircular.has(rhs)) {
      result = UNEQUAL$2;
    } else {
      result = lhs.compare(rhs);
    }
    if (result === UNEQUAL$2)
      return false;
    if (result !== DEEP_EQUAL$1) {
      if (!shouldCompareDeep$1(result, lhs))
        return false;
      if (result === AMBIGUOUS$1 && lhs.isProperty === true) {
        lhs = new symbolProperties$1.Collector(lhs, lhsStack[topIndex].recursor);
        rhs = new symbolProperties$1.Collector(rhs, rhsStack[topIndex].recursor);
        lhsStack[topIndex].recursor = recursorUtils$2.unshift(lhsStack[topIndex].recursor, lhs.collectAll());
        rhsStack[topIndex].recursor = recursorUtils$2.unshift(rhsStack[topIndex].recursor, rhs.collectAll());
      }
      lhsCircular.add(lhs);
      rhsCircular.add(rhs);
      lhsStack.push({ subject: lhs, recursor: lhs.createRecursor() });
      rhsStack.push({ subject: rhs, recursor: rhs.createRecursor() });
      topIndex++;
    }
    while (topIndex >= 0) {
      lhs = lhsStack[topIndex].recursor();
      rhs = rhsStack[topIndex].recursor();
      if (lhs !== null && rhs !== null) {
        break;
      }
      if (lhs === null && rhs === null) {
        const lhsRecord = lhsStack.pop();
        const rhsRecord = rhsStack.pop();
        lhsCircular.delete(lhsRecord.subject);
        rhsCircular.delete(rhsRecord.subject);
        topIndex--;
      } else {
        return false;
      }
    }
  } while (topIndex >= 0);
  return true;
}
compare$e.compareDescriptors = compareDescriptors$1;
function compare$1(actual, expected, options) {
  if (Object.is(actual, expected))
    return { pass: true };
  if (shortcircuitPrimitive(actual) || shortcircuitPrimitive(expected))
    return { pass: false };
  actual = describe$4(actual, options);
  expected = describe$4(expected, options);
  const pass = compareDescriptors$1(actual, expected);
  return { actual, expected, pass };
}
compare$e.compare = compare$1;
var diff$3 = {};
let Indenter$2 = class Indenter {
  constructor(level, step) {
    this.level = level;
    this.step = step;
    this.value = step.repeat(level);
  }
  increase() {
    return new Indenter(this.level + 1, this.step);
  }
  decrease() {
    return new Indenter(this.level - 1, this.step);
  }
  toString() {
    return this.value;
  }
};
var Indenter_1 = Indenter$2;
const Circular$1 = Circular_1;
const Indenter$1 = Indenter_1;
const constants = constants$s;
const describe$3 = describe_1$1;
const lineBuilder$1 = lineBuilder$i;
const recursorUtils$1 = recursorUtils$d;
const shouldCompareDeep = shouldCompareDeep_1;
const symbolProperties = symbolProperties$2;
const themeUtils$1 = requireThemeUtils();
const AMBIGUOUS = constants.AMBIGUOUS;
const DEEP_EQUAL = constants.DEEP_EQUAL;
const UNEQUAL$1 = constants.UNEQUAL;
const SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
const NOOP = Symbol("NOOP");
const alwaysFormat$1 = () => true;
function compareComplexShape(lhs, rhs) {
  let result = lhs.compare(rhs);
  if (result === DEEP_EQUAL)
    return DEEP_EQUAL;
  if (result === UNEQUAL$1 || !shouldCompareDeep(result, lhs))
    return UNEQUAL$1;
  let collectedSymbolProperties = false;
  let lhsRecursor = lhs.createRecursor();
  let rhsRecursor = rhs.createRecursor();
  do {
    lhs = lhsRecursor();
    rhs = rhsRecursor();
    if (lhs === null && rhs === null)
      return SHALLOW_EQUAL;
    if (lhs === null || rhs === null)
      return UNEQUAL$1;
    result = lhs.compare(rhs);
    if (result === UNEQUAL$1)
      return UNEQUAL$1;
    if (result === AMBIGUOUS && lhs.isProperty === true && !collectedSymbolProperties && shouldCompareDeep(result, lhs)) {
      collectedSymbolProperties = true;
      const lhsCollector = new symbolProperties.Collector(lhs, lhsRecursor);
      const rhsCollector = new symbolProperties.Collector(rhs, rhsRecursor);
      lhsRecursor = recursorUtils$1.sequence(
        lhsCollector.createRecursor(),
        recursorUtils$1.unshift(lhsRecursor, lhsCollector.collectAll())
      );
      rhsRecursor = recursorUtils$1.sequence(
        rhsCollector.createRecursor(),
        recursorUtils$1.unshift(rhsRecursor, rhsCollector.collectAll())
      );
    }
  } while (true);
}
function diffDescriptors$2(lhs, rhs, options) {
  const theme = themeUtils$1.normalize(options);
  const invert = options ? options.invert === true : false;
  const lhsCircular = new Circular$1();
  const rhsCircular = new Circular$1();
  const maxDepth = options && options.maxDepth || 0;
  let indent = new Indenter$1(0, "  ");
  const lhsStack = [];
  const rhsStack = [];
  let topIndex = -1;
  const buffer = lineBuilder$1.buffer();
  const diffStack = [];
  let diffIndex = -1;
  const isCircular = (descriptor) => lhsCircular.has(descriptor) || rhsCircular.has(descriptor);
  const format2 = (builder, subject, circular, depthOffset = 0) => {
    if (diffIndex >= 0 && !diffStack[diffIndex].shouldFormat(subject))
      return;
    if (circular.has(subject)) {
      diffStack[diffIndex].formatter.append(builder.single(theme.circular));
      return;
    }
    const formatStack = [];
    let formatIndex = -1;
    do {
      if (circular.has(subject)) {
        formatStack[formatIndex].formatter.append(builder.single(theme.circular), subject);
      } else {
        let didFormat = false;
        if (typeof subject.formatDeep === "function") {
          let formatted = subject.formatDeep(themeUtils$1.applyModifiers(subject, theme), indent);
          if (formatted !== null) {
            didFormat = true;
            if (formatIndex === -1) {
              formatted = builder.setDefaultGutter(formatted);
              if (diffIndex === -1) {
                buffer.append(formatted);
              } else {
                diffStack[diffIndex].formatter.append(formatted, subject);
              }
            } else {
              formatStack[formatIndex].formatter.append(formatted, subject);
            }
          }
        }
        if (!didFormat && typeof subject.formatShallow === "function") {
          const formatter = subject.formatShallow(themeUtils$1.applyModifiers(subject, theme), indent);
          const recursor = subject.createRecursor();
          if (formatter.increaseIndent && maxDepth > 0 && indent.level === maxDepth + depthOffset) {
            const isEmpty = recursor() === null;
            let formatted = !isEmpty && typeof formatter.maxDepth === "function" ? formatter.maxDepth() : formatter.finalize();
            if (formatIndex === -1) {
              formatted = builder.setDefaultGutter(formatted);
              diffStack[diffIndex].formatter.append(formatted, subject);
            } else {
              formatStack[formatIndex].formatter.append(formatted, subject);
            }
          } else {
            formatStack.push({
              formatter,
              recursor,
              decreaseIndent: formatter.increaseIndent,
              shouldFormat: formatter.shouldFormat || alwaysFormat$1,
              subject
            });
            formatIndex++;
            if (formatter.increaseIndent)
              indent = indent.increase();
            circular.add(subject);
          }
        }
      }
      while (formatIndex >= 0) {
        do {
          subject = formatStack[formatIndex].recursor();
        } while (subject && !formatStack[formatIndex].shouldFormat(subject));
        if (subject) {
          break;
        }
        const record = formatStack.pop();
        formatIndex--;
        if (record.decreaseIndent)
          indent = indent.decrease();
        circular.delete(record.subject);
        let formatted = record.formatter.finalize();
        if (formatIndex === -1) {
          formatted = builder.setDefaultGutter(formatted);
          if (diffIndex === -1) {
            buffer.append(formatted);
          } else {
            diffStack[diffIndex].formatter.append(formatted, record.subject);
          }
        } else {
          formatStack[formatIndex].formatter.append(formatted, record.subject);
        }
      }
    } while (formatIndex >= 0);
  };
  do {
    let compareResult = NOOP;
    if (lhsCircular.has(lhs)) {
      compareResult = lhsCircular.get(lhs) === rhsCircular.get(rhs) ? DEEP_EQUAL : UNEQUAL$1;
    } else if (rhsCircular.has(rhs)) {
      compareResult = UNEQUAL$1;
    }
    let firstPassSymbolProperty = false;
    if (lhs.isProperty === true) {
      compareResult = lhs.compare(rhs);
      if (compareResult === AMBIGUOUS) {
        const parent = lhsStack[topIndex].subject;
        firstPassSymbolProperty = parent.isSymbolPropertiesCollector !== true && parent.isSymbolPropertiesComparable !== true;
      }
    }
    let didFormat = false;
    let mustRecurse = false;
    if (compareResult !== DEEP_EQUAL && !firstPassSymbolProperty && typeof lhs.prepareDiff === "function") {
      const lhsRecursor = topIndex === -1 ? null : lhsStack[topIndex].recursor;
      const rhsRecursor = topIndex === -1 ? null : rhsStack[topIndex].recursor;
      const instructions = lhs.prepareDiff(
        rhs,
        lhsRecursor,
        rhsRecursor,
        compareComplexShape,
        isCircular
      );
      if (instructions !== null) {
        if (topIndex >= 0) {
          if (typeof instructions.lhsRecursor === "function") {
            lhsStack[topIndex].recursor = instructions.lhsRecursor;
          }
          if (typeof instructions.rhsRecursor === "function") {
            rhsStack[topIndex].recursor = instructions.rhsRecursor;
          }
        }
        if (instructions.compareResult) {
          compareResult = instructions.compareResult;
        }
        if (instructions.mustRecurse === true) {
          mustRecurse = true;
        } else {
          if (instructions.actualIsExtraneous === true) {
            format2(lineBuilder$1.actual, lhs, lhsCircular);
            didFormat = true;
          } else if (instructions.multipleAreExtraneous === true) {
            for (const extraneous of instructions.descriptors) {
              format2(lineBuilder$1.actual, extraneous, lhsCircular);
            }
            didFormat = true;
          } else if (instructions.expectedIsMissing === true) {
            format2(lineBuilder$1.expected, rhs, rhsCircular);
            didFormat = true;
          } else if (instructions.multipleAreMissing === true) {
            for (const missing of instructions.descriptors) {
              format2(lineBuilder$1.expected, missing, rhsCircular);
            }
            didFormat = true;
          } else if (instructions.isUnequal === true) {
            format2(lineBuilder$1.actual, lhs, lhsCircular);
            format2(lineBuilder$1.expected, rhs, rhsCircular);
            didFormat = true;
          } else if (!instructions.compareResult) {
            throw new Error("Illegal result of prepareDiff()");
          }
        }
      }
    }
    if (!didFormat) {
      if (compareResult === NOOP) {
        compareResult = lhs.compare(rhs);
      }
      if (!mustRecurse) {
        mustRecurse = shouldCompareDeep(compareResult, lhs);
      }
      if (compareResult === DEEP_EQUAL) {
        format2(lineBuilder$1, lhs, lhsCircular);
      } else if (mustRecurse) {
        if (compareResult === AMBIGUOUS && lhs.isProperty === true) {
          lhs = new symbolProperties.Collector(lhs, lhsStack[topIndex].recursor);
          rhs = new symbolProperties.Collector(rhs, rhsStack[topIndex].recursor);
          lhsStack[topIndex].recursor = recursorUtils$1.unshift(lhsStack[topIndex].recursor, lhs.collectAll());
          rhsStack[topIndex].recursor = recursorUtils$1.unshift(rhsStack[topIndex].recursor, rhs.collectAll());
        }
        if (typeof lhs.diffShallow === "function") {
          const formatter = lhs.diffShallow(rhs, themeUtils$1.applyModifiers(lhs, theme), indent);
          diffStack.push({
            formatter,
            origin: lhs,
            decreaseIndent: formatter.increaseIndent,
            exceedsMaxDepth: formatter.increaseIndent && maxDepth > 0 && indent.level >= maxDepth,
            shouldFormat: formatter.shouldFormat || alwaysFormat$1
          });
          diffIndex++;
          if (formatter.increaseIndent)
            indent = indent.increase();
        } else if (typeof lhs.formatShallow === "function") {
          const formatter = lhs.formatShallow(themeUtils$1.applyModifiers(lhs, theme), indent);
          diffStack.push({
            formatter,
            decreaseIndent: formatter.increaseIndent,
            exceedsMaxDepth: formatter.increaseIndent && maxDepth > 0 && indent.level >= maxDepth,
            shouldFormat: formatter.shouldFormat || alwaysFormat$1,
            subject: lhs
          });
          diffIndex++;
          if (formatter.increaseIndent)
            indent = indent.increase();
        }
        lhsCircular.add(lhs);
        rhsCircular.add(rhs);
        lhsStack.push({ diffIndex, subject: lhs, recursor: lhs.createRecursor() });
        rhsStack.push({ diffIndex, subject: rhs, recursor: rhs.createRecursor() });
        topIndex++;
      } else {
        const diffed = typeof lhs.diffDeep === "function" ? lhs.diffDeep(rhs, themeUtils$1.applyModifiers(lhs, theme), indent, invert) : null;
        if (diffed === null) {
          format2(lineBuilder$1.actual, lhs, lhsCircular);
          format2(lineBuilder$1.expected, rhs, rhsCircular);
        } else {
          if (diffIndex === -1) {
            buffer.append(diffed);
          } else {
            diffStack[diffIndex].formatter.append(diffed, lhs);
          }
        }
      }
    }
    while (topIndex >= 0) {
      lhs = lhsStack[topIndex].recursor();
      rhs = rhsStack[topIndex].recursor();
      if (lhs !== null && rhs !== null) {
        break;
      }
      if (lhs === null && rhs === null) {
        const lhsRecord = lhsStack.pop();
        const rhsRecord = rhsStack.pop();
        lhsCircular.delete(lhsRecord.subject);
        rhsCircular.delete(rhsRecord.subject);
        topIndex--;
        if (lhsRecord.diffIndex === diffIndex) {
          const record = diffStack.pop();
          diffIndex--;
          if (record.decreaseIndent)
            indent = indent.decrease();
          let formatted = record.formatter.finalize();
          if (record.exceedsMaxDepth && !formatted.hasGutter) {
            const subject = lhsRecord.subject;
            const formatter = subject.formatShallow(themeUtils$1.applyModifiers(subject, theme), indent);
            const isEmpty = subject.createRecursor()() === null;
            formatted = !isEmpty && typeof formatter.maxDepth === "function" ? formatter.maxDepth() : formatter.finalize();
          }
          if (diffIndex === -1) {
            buffer.append(formatted);
          } else {
            diffStack[diffIndex].formatter.append(formatted, record.subject);
          }
        }
      } else {
        let builder, circular, stack, subject;
        if (lhs === null) {
          builder = lineBuilder$1.expected;
          circular = rhsCircular;
          stack = rhsStack;
          subject = rhs;
        } else {
          builder = lineBuilder$1.actual;
          circular = lhsCircular;
          stack = lhsStack;
          subject = lhs;
        }
        do {
          format2(builder, subject, circular, indent.level);
          subject = stack[topIndex].recursor();
        } while (subject !== null);
      }
    }
  } while (topIndex >= 0);
  return buffer.toString({ diff: true, invert, theme });
}
diff$3.diffDescriptors = diffDescriptors$2;
function diff$2(actual, expected, options) {
  return diffDescriptors$2(describe$3(actual, options), describe$3(expected, options), options);
}
diff$3.diff = diff$2;
var format$2 = {};
const Circular2 = Circular_1;
const Indenter2 = Indenter_1;
const describe$2 = describe_1$1;
const lineBuilder = lineBuilder$i;
const themeUtils = requireThemeUtils();
const alwaysFormat = () => true;
const fixedIndent = new Indenter2(0, "  ");
function formatDescriptor$1(subject, options) {
  const theme = themeUtils.normalize(options);
  if (subject.isPrimitive === true) {
    const formatted = subject.formatDeep(themeUtils.applyModifiers(subject, theme), fixedIndent);
    return formatted.toString({ diff: false });
  }
  const circular = new Circular2();
  const maxDepth = options && options.maxDepth || 0;
  let indent = fixedIndent;
  const buffer = lineBuilder.buffer();
  const stack = [];
  let topIndex = -1;
  do {
    if (circular.has(subject)) {
      stack[topIndex].formatter.append(lineBuilder.single(theme.circular), subject);
    } else {
      let didFormat = false;
      if (typeof subject.formatDeep === "function") {
        const formatted = subject.formatDeep(themeUtils.applyModifiers(subject, theme), indent);
        if (formatted !== null) {
          didFormat = true;
          if (topIndex === -1) {
            buffer.append(formatted);
          } else {
            stack[topIndex].formatter.append(formatted, subject);
          }
        }
      }
      if (!didFormat && typeof subject.formatShallow === "function") {
        const formatter = subject.formatShallow(themeUtils.applyModifiers(subject, theme), indent);
        const recursor = subject.createRecursor();
        if (formatter.increaseIndent && maxDepth > 0 && indent.level === maxDepth) {
          const isEmpty = recursor() === null;
          const formatted = !isEmpty && typeof formatter.maxDepth === "function" ? formatter.maxDepth() : formatter.finalize();
          stack[topIndex].formatter.append(formatted, subject);
        } else {
          stack.push({
            formatter,
            recursor,
            decreaseIndent: formatter.increaseIndent,
            shouldFormat: formatter.shouldFormat || alwaysFormat,
            subject
          });
          topIndex++;
          if (formatter.increaseIndent)
            indent = indent.increase();
          circular.add(subject);
        }
      }
    }
    while (topIndex >= 0) {
      do {
        subject = stack[topIndex].recursor();
      } while (subject && !stack[topIndex].shouldFormat(subject));
      if (subject) {
        break;
      }
      const record = stack.pop();
      topIndex--;
      if (record.decreaseIndent)
        indent = indent.decrease();
      circular.delete(record.subject);
      const formatted = record.formatter.finalize();
      if (topIndex === -1) {
        buffer.append(formatted);
      } else {
        stack[topIndex].formatter.append(formatted, record.subject);
      }
    }
  } while (topIndex >= 0);
  return buffer.toString({ diff: false });
}
format$2.formatDescriptor = formatDescriptor$1;
function format$1(value, options) {
  return formatDescriptor$1(describe$2(value, options), options);
}
format$2.format = format$1;
var serialize$4 = {};
var md5 = { exports: {} };
(function(module) {
  (function($) {
    function safeAdd(x, y2) {
      var lsw = (x & 65535) + (y2 & 65535);
      var msw = (x >> 16) + (y2 >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b2, x, s, t2) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t2)), s), b2);
    }
    function md5ff(a, b2, c, d, x, s, t2) {
      return md5cmn(b2 & c | ~b2 & d, a, b2, x, s, t2);
    }
    function md5gg(a, b2, c, d, x, s, t2) {
      return md5cmn(b2 & d | c & ~d, a, b2, x, s, t2);
    }
    function md5hh(a, b2, c, d, x, s, t2) {
      return md5cmn(b2 ^ c ^ d, a, b2, x, s, t2);
    }
    function md5ii(a, b2, c, d, x, s, t2) {
      return md5cmn(c ^ (b2 | ~d), a, b2, x, s, t2);
    }
    function binlMD5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[(len + 64 >>> 9 << 4) + 14] = len;
      var i2;
      var olda;
      var oldb;
      var oldc;
      var oldd;
      var a = 1732584193;
      var b2 = -271733879;
      var c = -1732584194;
      var d = 271733878;
      for (i2 = 0; i2 < x.length; i2 += 16) {
        olda = a;
        oldb = b2;
        oldc = c;
        oldd = d;
        a = md5ff(a, b2, c, d, x[i2], 7, -680876936);
        d = md5ff(d, a, b2, c, x[i2 + 1], 12, -389564586);
        c = md5ff(c, d, a, b2, x[i2 + 2], 17, 606105819);
        b2 = md5ff(b2, c, d, a, x[i2 + 3], 22, -1044525330);
        a = md5ff(a, b2, c, d, x[i2 + 4], 7, -176418897);
        d = md5ff(d, a, b2, c, x[i2 + 5], 12, 1200080426);
        c = md5ff(c, d, a, b2, x[i2 + 6], 17, -1473231341);
        b2 = md5ff(b2, c, d, a, x[i2 + 7], 22, -45705983);
        a = md5ff(a, b2, c, d, x[i2 + 8], 7, 1770035416);
        d = md5ff(d, a, b2, c, x[i2 + 9], 12, -1958414417);
        c = md5ff(c, d, a, b2, x[i2 + 10], 17, -42063);
        b2 = md5ff(b2, c, d, a, x[i2 + 11], 22, -1990404162);
        a = md5ff(a, b2, c, d, x[i2 + 12], 7, 1804603682);
        d = md5ff(d, a, b2, c, x[i2 + 13], 12, -40341101);
        c = md5ff(c, d, a, b2, x[i2 + 14], 17, -1502002290);
        b2 = md5ff(b2, c, d, a, x[i2 + 15], 22, 1236535329);
        a = md5gg(a, b2, c, d, x[i2 + 1], 5, -165796510);
        d = md5gg(d, a, b2, c, x[i2 + 6], 9, -1069501632);
        c = md5gg(c, d, a, b2, x[i2 + 11], 14, 643717713);
        b2 = md5gg(b2, c, d, a, x[i2], 20, -373897302);
        a = md5gg(a, b2, c, d, x[i2 + 5], 5, -701558691);
        d = md5gg(d, a, b2, c, x[i2 + 10], 9, 38016083);
        c = md5gg(c, d, a, b2, x[i2 + 15], 14, -660478335);
        b2 = md5gg(b2, c, d, a, x[i2 + 4], 20, -405537848);
        a = md5gg(a, b2, c, d, x[i2 + 9], 5, 568446438);
        d = md5gg(d, a, b2, c, x[i2 + 14], 9, -1019803690);
        c = md5gg(c, d, a, b2, x[i2 + 3], 14, -187363961);
        b2 = md5gg(b2, c, d, a, x[i2 + 8], 20, 1163531501);
        a = md5gg(a, b2, c, d, x[i2 + 13], 5, -1444681467);
        d = md5gg(d, a, b2, c, x[i2 + 2], 9, -51403784);
        c = md5gg(c, d, a, b2, x[i2 + 7], 14, 1735328473);
        b2 = md5gg(b2, c, d, a, x[i2 + 12], 20, -1926607734);
        a = md5hh(a, b2, c, d, x[i2 + 5], 4, -378558);
        d = md5hh(d, a, b2, c, x[i2 + 8], 11, -2022574463);
        c = md5hh(c, d, a, b2, x[i2 + 11], 16, 1839030562);
        b2 = md5hh(b2, c, d, a, x[i2 + 14], 23, -35309556);
        a = md5hh(a, b2, c, d, x[i2 + 1], 4, -1530992060);
        d = md5hh(d, a, b2, c, x[i2 + 4], 11, 1272893353);
        c = md5hh(c, d, a, b2, x[i2 + 7], 16, -155497632);
        b2 = md5hh(b2, c, d, a, x[i2 + 10], 23, -1094730640);
        a = md5hh(a, b2, c, d, x[i2 + 13], 4, 681279174);
        d = md5hh(d, a, b2, c, x[i2], 11, -358537222);
        c = md5hh(c, d, a, b2, x[i2 + 3], 16, -722521979);
        b2 = md5hh(b2, c, d, a, x[i2 + 6], 23, 76029189);
        a = md5hh(a, b2, c, d, x[i2 + 9], 4, -640364487);
        d = md5hh(d, a, b2, c, x[i2 + 12], 11, -421815835);
        c = md5hh(c, d, a, b2, x[i2 + 15], 16, 530742520);
        b2 = md5hh(b2, c, d, a, x[i2 + 2], 23, -995338651);
        a = md5ii(a, b2, c, d, x[i2], 6, -198630844);
        d = md5ii(d, a, b2, c, x[i2 + 7], 10, 1126891415);
        c = md5ii(c, d, a, b2, x[i2 + 14], 15, -1416354905);
        b2 = md5ii(b2, c, d, a, x[i2 + 5], 21, -57434055);
        a = md5ii(a, b2, c, d, x[i2 + 12], 6, 1700485571);
        d = md5ii(d, a, b2, c, x[i2 + 3], 10, -1894986606);
        c = md5ii(c, d, a, b2, x[i2 + 10], 15, -1051523);
        b2 = md5ii(b2, c, d, a, x[i2 + 1], 21, -2054922799);
        a = md5ii(a, b2, c, d, x[i2 + 8], 6, 1873313359);
        d = md5ii(d, a, b2, c, x[i2 + 15], 10, -30611744);
        c = md5ii(c, d, a, b2, x[i2 + 6], 15, -1560198380);
        b2 = md5ii(b2, c, d, a, x[i2 + 13], 21, 1309151649);
        a = md5ii(a, b2, c, d, x[i2 + 4], 6, -145523070);
        d = md5ii(d, a, b2, c, x[i2 + 11], 10, -1120210379);
        c = md5ii(c, d, a, b2, x[i2 + 2], 15, 718787259);
        b2 = md5ii(b2, c, d, a, x[i2 + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b2 = safeAdd(b2, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [a, b2, c, d];
    }
    function binl2rstr(input2) {
      var i2;
      var output = "";
      var length32 = input2.length * 32;
      for (i2 = 0; i2 < length32; i2 += 8) {
        output += String.fromCharCode(input2[i2 >> 5] >>> i2 % 32 & 255);
      }
      return output;
    }
    function rstr2binl(input2) {
      var i2;
      var output = [];
      output[(input2.length >> 2) - 1] = void 0;
      for (i2 = 0; i2 < output.length; i2 += 1) {
        output[i2] = 0;
      }
      var length8 = input2.length * 8;
      for (i2 = 0; i2 < length8; i2 += 8) {
        output[i2 >> 5] |= (input2.charCodeAt(i2 / 8) & 255) << i2 % 32;
      }
      return output;
    }
    function rstrMD5(s) {
      return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
    }
    function rstrHMACMD5(key, data) {
      var i2;
      var bkey = rstr2binl(key);
      var ipad = [];
      var opad = [];
      var hash;
      ipad[15] = opad[15] = void 0;
      if (bkey.length > 16) {
        bkey = binlMD5(bkey, key.length * 8);
      }
      for (i2 = 0; i2 < 16; i2 += 1) {
        ipad[i2] = bkey[i2] ^ 909522486;
        opad[i2] = bkey[i2] ^ 1549556828;
      }
      hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
      return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
    }
    function rstr2hex(input2) {
      var hexTab = "0123456789abcdef";
      var output = "";
      var x;
      var i2;
      for (i2 = 0; i2 < input2.length; i2 += 1) {
        x = input2.charCodeAt(i2);
        output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15);
      }
      return output;
    }
    function str2rstrUTF8(input2) {
      return unescape(encodeURIComponent(input2));
    }
    function rawMD5(s) {
      return rstrMD5(str2rstrUTF8(s));
    }
    function hexMD5(s) {
      return rstr2hex(rawMD5(s));
    }
    function rawHMACMD5(k, d) {
      return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
    }
    function hexHMACMD5(k, d) {
      return rstr2hex(rawHMACMD5(k, d));
    }
    function md52(string2, key, raw) {
      if (!key) {
        if (!raw) {
          return hexMD5(string2);
        }
        return rawMD5(string2);
      }
      if (!raw) {
        return hexHMACMD5(key, string2);
      }
      return rawHMACMD5(key, string2);
    }
    if (module.exports) {
      module.exports = md52;
    } else {
      $.md5 = md52;
    }
  })(commonjsGlobal$1);
})(md5);
var md5Exports = md5.exports;
const blueimpMd5 = md5Exports;
var browser = (data) => {
  if (Array.isArray(data)) {
    data = data.join("");
  }
  return blueimpMd5(data);
};
var encoder$1 = {};
var Symbol$1 = _Symbol, isArguments3 = isArguments_1, isArray = isArray_1;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray(value) || isArguments3(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array2, depth, predicate, isStrict, result) {
  var index = -1, length2 = array2.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length2) {
    var value = array2[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
var INFINITY = 1 / 0;
function flattenDeep$1(array2) {
  var length2 = array2 == null ? 0 : array2.length;
  return length2 ? baseFlatten(array2, INFINITY) : [];
}
var flattenDeep_1 = flattenDeep$1;
const flattenDeep = flattenDeep_1;
const valueTypes = {
  zero: 0,
  int8: 1,
  // Note that the hex value equals the number of bytes required
  int16: 2,
  // to store the integer.
  int24: 3,
  int32: 4,
  int40: 5,
  int48: 6,
  numberString: 7,
  negativeZero: 8,
  notANumber: 9,
  infinity: 10,
  negativeInfinity: 11,
  bigInt: 12,
  undefined: 13,
  null: 14,
  true: 15,
  false: 16,
  utf8: 17,
  bytes: 18,
  list: 19,
  descriptor: 20
};
const descriptorSymbol = Symbol("descriptor");
encoder$1.descriptorSymbol = descriptorSymbol;
function encodeInteger(type2, value) {
  const encoded = Buffer.alloc(type2);
  encoded.writeIntLE(value, 0, type2);
  return [type2, encoded];
}
function encodeValue(value) {
  if (Object.is(value, 0))
    return valueTypes.zero;
  if (Object.is(value, -0))
    return valueTypes.negativeZero;
  if (Object.is(value, NaN))
    return valueTypes.notANumber;
  if (value === Infinity)
    return valueTypes.infinity;
  if (value === -Infinity)
    return valueTypes.negativeInfinity;
  if (value === void 0)
    return valueTypes.undefined;
  if (value === null)
    return valueTypes.null;
  if (value === true)
    return valueTypes.true;
  if (value === false)
    return valueTypes.false;
  const type2 = typeof value;
  if (type2 === "number") {
    if (Number.isInteger(value)) {
      if (value >= -128 && value < 128)
        return encodeInteger(valueTypes.int8, value);
      if (value >= -32768 && value < 32768)
        return encodeInteger(valueTypes.int16, value);
      if (value >= -8388608 && value < 8388608)
        return encodeInteger(valueTypes.int24, value);
      if (value >= -2147483648 && value < 2147483648)
        return encodeInteger(valueTypes.int32, value);
      if (value >= -549755813888 && value < 549755813888)
        return encodeInteger(valueTypes.int40, value);
      if (value >= -140737488355328 && value < 140737488355328)
        return encodeInteger(valueTypes.int48, value);
    }
    const encoded = Buffer.from(String(value), "utf8");
    return [valueTypes.numberString, encodeValue(encoded.length), encoded];
  }
  if (type2 === "string") {
    const encoded = Buffer.from(value, "utf8");
    return [valueTypes.utf8, encodeValue(encoded.length), encoded];
  }
  if (type2 === "bigint") {
    const encoded = Buffer.from(String(value), "utf8");
    return [valueTypes.bigInt, encodeValue(encoded.length), encoded];
  }
  if (Buffer.isBuffer(value)) {
    return [valueTypes.bytes, encodeValue(value.byteLength), value];
  }
  if (Array.isArray(value)) {
    return [
      value[descriptorSymbol] === true ? valueTypes.descriptor : valueTypes.list,
      encodeValue(value.length),
      value.map((x) => encodeValue(x))
    ];
  }
  const hex = `0x${type2.toString(16).toUpperCase()}`;
  throw new TypeError(`Unexpected value with type ${hex}`);
}
function decodeValue(buffer, byteOffset) {
  const type2 = buffer.readUInt8(byteOffset);
  byteOffset += 1;
  if (type2 === valueTypes.zero)
    return { byteOffset, value: 0 };
  if (type2 === valueTypes.negativeZero)
    return { byteOffset, value: -0 };
  if (type2 === valueTypes.notANumber)
    return { byteOffset, value: NaN };
  if (type2 === valueTypes.infinity)
    return { byteOffset, value: Infinity };
  if (type2 === valueTypes.negativeInfinity)
    return { byteOffset, value: -Infinity };
  if (type2 === valueTypes.undefined)
    return { byteOffset, value: void 0 };
  if (type2 === valueTypes.null)
    return { byteOffset, value: null };
  if (type2 === valueTypes.true)
    return { byteOffset, value: true };
  if (type2 === valueTypes.false)
    return { byteOffset, value: false };
  if (type2 === valueTypes.int8 || type2 === valueTypes.int16 || type2 === valueTypes.int24 || type2 === valueTypes.int32 || type2 === valueTypes.int40 || type2 === valueTypes.int48) {
    const value = buffer.readIntLE(byteOffset, type2);
    byteOffset += type2;
    return { byteOffset, value };
  }
  if (type2 === valueTypes.numberString || type2 === valueTypes.utf8 || type2 === valueTypes.bytes || type2 === valueTypes.bigInt) {
    const length2 = decodeValue(buffer, byteOffset);
    const start = length2.byteOffset;
    const end = start + length2.value;
    if (type2 === valueTypes.numberString) {
      const value2 = Number(buffer.toString("utf8", start, end));
      return { byteOffset: end, value: value2 };
    }
    if (type2 === valueTypes.utf8) {
      const value2 = buffer.toString("utf8", start, end);
      return { byteOffset: end, value: value2 };
    }
    if (type2 === valueTypes.bigInt) {
      const value2 = BigInt(buffer.toString("utf8", start, end));
      return { byteOffset: end, value: value2 };
    }
    const value = buffer.slice(start, end);
    return { byteOffset: end, value };
  }
  if (type2 === valueTypes.list || type2 === valueTypes.descriptor) {
    const length2 = decodeValue(buffer, byteOffset);
    byteOffset = length2.byteOffset;
    const value = new Array(length2.value);
    if (type2 === valueTypes.descriptor) {
      value[descriptorSymbol] = true;
    }
    for (let index = 0; index < length2.value; index++) {
      const item2 = decodeValue(buffer, byteOffset);
      byteOffset = item2.byteOffset;
      value[index] = item2.value;
    }
    return { byteOffset, value };
  }
  const hex = `0x${type2.toString(16).toUpperCase()}`;
  throw new TypeError(`Could not decode type ${hex}`);
}
function buildBuffer(numberOrArray) {
  if (typeof numberOrArray === "number") {
    const byte = Buffer.alloc(1);
    byte.writeUInt8(numberOrArray);
    return byte;
  }
  const array2 = flattenDeep(numberOrArray);
  const buffers = new Array(array2.length);
  let byteLength = 0;
  for (const [index, element] of array2.entries()) {
    if (typeof element === "number") {
      byteLength += 1;
      const byte = Buffer.alloc(1);
      byte.writeUInt8(element);
      buffers[index] = byte;
    } else {
      byteLength += element.byteLength;
      buffers[index] = element;
    }
  }
  return Buffer.concat(buffers, byteLength);
}
function encode(serializerVersion, rootRecord, usedPlugins) {
  const buffers = [];
  let byteOffset = 0;
  const versionHeader = Buffer.alloc(2);
  versionHeader.writeUInt16LE(serializerVersion);
  buffers.push(versionHeader);
  byteOffset += versionHeader.byteLength;
  const rootOffset = Buffer.alloc(4);
  buffers.push(rootOffset);
  byteOffset += rootOffset.byteLength;
  const numPlugins = buildBuffer(encodeValue(usedPlugins.size));
  buffers.push(numPlugins);
  byteOffset += numPlugins.byteLength;
  for (const name2 of usedPlugins.keys()) {
    const plugin2 = usedPlugins.get(name2);
    const record = buildBuffer([
      encodeValue(name2),
      encodeValue(plugin2.serializerVersion)
    ]);
    buffers.push(record);
    byteOffset += record.byteLength;
  }
  const queue = [rootRecord];
  const pointers = [rootOffset];
  while (queue.length > 0) {
    pointers.shift().writeUInt32LE(byteOffset, 0);
    const record = queue.shift();
    const recordHeader = buildBuffer([
      encodeValue(record.pluginIndex),
      encodeValue(record.id),
      encodeValue(record.children.length)
    ]);
    buffers.push(recordHeader);
    byteOffset += recordHeader.byteLength;
    for (const child of record.children) {
      queue.push(child);
      const pointer2 = Buffer.alloc(4);
      pointers.push(pointer2);
      buffers.push(pointer2);
      byteOffset += 4;
    }
    const state = buildBuffer(encodeValue(record.state));
    buffers.push(state);
    byteOffset += state.byteLength;
  }
  return Buffer.concat(buffers, byteOffset);
}
encoder$1.encode = encode;
function decodePlugins(buffer) {
  const $numPlugins = decodeValue(buffer, 0);
  let byteOffset = $numPlugins.byteOffset;
  const usedPlugins = /* @__PURE__ */ new Map();
  const lastIndex = $numPlugins.value;
  for (let index = 1; index <= lastIndex; index++) {
    const $name = decodeValue(buffer, byteOffset);
    const name2 = $name.value;
    byteOffset = $name.byteOffset;
    const serializerVersion = decodeValue(buffer, byteOffset).value;
    usedPlugins.set(index, { name: name2, serializerVersion });
  }
  return usedPlugins;
}
encoder$1.decodePlugins = decodePlugins;
function decodeRecord(buffer, byteOffset) {
  const $pluginIndex = decodeValue(buffer, byteOffset);
  const pluginIndex = $pluginIndex.value;
  byteOffset = $pluginIndex.byteOffset;
  const $id = decodeValue(buffer, byteOffset);
  const id = $id.value;
  byteOffset = $id.byteOffset;
  const $numPointers = decodeValue(buffer, byteOffset);
  const numPointers = $numPointers.value;
  byteOffset = $numPointers.byteOffset;
  const pointerAddresses = new Array(numPointers);
  for (let index = 0; index < numPointers; index++) {
    pointerAddresses[index] = buffer.readUInt32LE(byteOffset);
    byteOffset += 4;
  }
  const state = decodeValue(buffer, byteOffset).value;
  return { id, pluginIndex, state, pointerAddresses };
}
encoder$1.decodeRecord = decodeRecord;
function extractVersion(buffer) {
  return buffer.readUInt16LE(0);
}
encoder$1.extractVersion = extractVersion;
function decode(buffer) {
  const rootOffset = buffer.readUInt32LE(2);
  const pluginBuffer = buffer.slice(6, rootOffset);
  const rootRecord = decodeRecord(buffer, rootOffset);
  return { pluginBuffer, rootRecord };
}
encoder$1.decode = decode;
var pointer = {};
const UNEQUAL = constants$s.UNEQUAL;
function describe$1(index) {
  return new Pointer(index);
}
pointer.describe = describe$1;
pointer.deserialize = describe$1;
const tag = Symbol("Pointer");
pointer.tag = tag;
class Pointer {
  constructor(index) {
    this.index = index;
  }
  // Pointers cannot be compared, and are not expected to be part of the
  // comparisons.
  compare(expected) {
    return UNEQUAL;
  }
  serialize() {
    return this.index;
  }
}
Object.defineProperty(Pointer.prototype, "isPointer", { value: true });
Object.defineProperty(Pointer.prototype, "tag", { value: tag });
const md5hex = browser;
const argumentsValue = _arguments;
const arrayBufferValue = arrayBuffer;
const boxedValue = boxed;
const dataViewValue = dataView;
const dateValue = date;
const errorValue = error;
const functionValue = _function$1;
const globalValue = global$2;
const mapValue = map$1;
const objectValue = object$b;
const promiseValue = promise;
const regexpValue = regexp;
const setValue = set$1;
const typedArrayValue = typedArray$2;
const encoder = encoder$1;
const itemDescriptor = item;
const mapEntryDescriptor = mapEntry;
const pointerDescriptor = pointer;
const propertyDescriptor = property;
const statsDescriptors = stats$1;
const pluginRegistry = requirePluginRegistry();
const bigIntValue = bigInt;
const booleanValue = boolean;
const nullValue = _null;
const numberValue = number;
const stringValue = string$1;
const symbolValue = symbol;
const undefinedValue = _undefined;
const recursorUtils = recursorUtils$d;
const VERSION = 3;
const mappings = [
  [1, bigIntValue.tag, bigIntValue.deserialize],
  [2, booleanValue.tag, booleanValue.deserialize],
  [3, nullValue.tag, nullValue.deserialize],
  [4, numberValue.tag, numberValue.deserialize],
  [5, stringValue.tag, stringValue.deserialize],
  [6, symbolValue.tag, symbolValue.deserialize],
  [7, undefinedValue.tag, undefinedValue.deserialize],
  [8, objectValue.tag, objectValue.deserialize],
  [9, statsDescriptors.iterableTag, statsDescriptors.deserializeIterableStats],
  [10, statsDescriptors.listTag, statsDescriptors.deserializeListStats],
  [11, itemDescriptor.complexTag, itemDescriptor.deserializeComplex],
  [12, itemDescriptor.primitiveTag, itemDescriptor.deserializePrimitive],
  [13, statsDescriptors.propertyTag, statsDescriptors.deserializePropertyStats],
  [14, propertyDescriptor.complexTag, propertyDescriptor.deserializeComplex],
  [15, propertyDescriptor.primitiveTag, propertyDescriptor.deserializePrimitive],
  [16, pointerDescriptor.tag, pointerDescriptor.deserialize],
  [17, mapValue.tag, mapValue.deserialize],
  [18, mapEntryDescriptor.tag, mapEntryDescriptor.deserialize],
  [19, argumentsValue.tag, argumentsValue.deserialize],
  [20, arrayBufferValue.tag, arrayBufferValue.deserialize],
  [21, boxedValue.tag, boxedValue.deserialize],
  [22, dataViewValue.tag, dataViewValue.deserialize],
  [23, dateValue.tag, dateValue.deserialize],
  [24, errorValue.tag, errorValue.deserialize],
  [25, functionValue.tag, functionValue.deserialize],
  [26, globalValue.tag, globalValue.deserialize],
  [27, promiseValue.tag, promiseValue.deserialize],
  [28, regexpValue.tag, regexpValue.deserialize],
  [29, setValue.tag, setValue.deserialize],
  [30, typedArrayValue.tag, typedArrayValue.deserialize],
  [31, typedArrayValue.bytesTag, typedArrayValue.deserializeBytes]
];
const tag2id = new Map(mappings.map((mapping) => [mapping[1], mapping[0]]));
const id2deserialize = new Map(mappings.map((mapping) => [mapping[0], mapping[2]]));
class DescriptorSerializationError extends Error {
  constructor(descriptor) {
    super("Could not serialize descriptor");
    this.name = "DescriptorSerializationError";
    this.descriptor = descriptor;
  }
}
class MissingPluginError extends Error {
  constructor(pluginName) {
    super(`Could not deserialize buffer: missing plugin ${JSON.stringify(pluginName)}`);
    this.name = "MissingPluginError";
    this.pluginName = pluginName;
  }
}
class PointerLookupError extends Error {
  constructor(index) {
    super(`Could not deserialize buffer: pointer ${index} could not be resolved`);
    this.name = "PointerLookupError";
    this.index = index;
  }
}
class UnsupportedPluginError extends Error {
  constructor(pluginName, serializerVersion) {
    super(`Could not deserialize buffer: plugin ${JSON.stringify(pluginName)} expects a different serialization`);
    this.name = "UnsupportedPluginError";
    this.pluginName = pluginName;
    this.serializerVersion = serializerVersion;
  }
}
class UnsupportedVersion extends Error {
  // eslint-disable-line unicorn/custom-error-definition
  constructor(serializerVersion) {
    super("Could not deserialize buffer: a different serialization was expected");
    this.name = "UnsupportedVersion";
    this.serializerVersion = serializerVersion;
  }
}
function shallowSerializeDescriptor(descriptor, resolvePluginRef) {
  if (!descriptor.serialize)
    return void 0;
  return serializeState(descriptor.serialize(), resolvePluginRef);
}
function serializeState(state, resolvePluginRef) {
  if (Array.isArray(state))
    return state.map((x) => serializeState(x));
  if (state && state.tag) {
    let id, pluginIndex;
    if (tag2id.has(state.tag)) {
      id = tag2id.get(state.tag);
      pluginIndex = 0;
    } else {
      const ref = resolvePluginRef(state.tag);
      if (ref) {
        id = ref.id;
        pluginIndex = ref.pluginIndex;
      }
    }
    if (id !== void 0) {
      const serialized = [pluginIndex, id, shallowSerializeDescriptor(state, resolvePluginRef)];
      serialized[encoder.descriptorSymbol] = true;
      return serialized;
    }
  }
  return state;
}
function serialize$3(descriptor) {
  const usedPlugins = /* @__PURE__ */ new Map();
  const resolvePluginRef = (tag2) => {
    const ref = pluginRegistry.resolveDescriptorRef(tag2);
    if (!ref)
      return null;
    if (!usedPlugins.has(ref.name)) {
      const index = usedPlugins.size + 1;
      usedPlugins.set(ref.name, Object.assign({ index }, ref.serialization));
    }
    return {
      id: ref.id,
      pluginIndex: usedPlugins.get(ref.name).index
    };
  };
  const seen = /* @__PURE__ */ new Set();
  const stack = [];
  let topIndex = -1;
  let rootRecord;
  do {
    if (descriptor.isComplex === true) {
      if (seen.has(descriptor.pointer)) {
        descriptor = pointerDescriptor.describe(descriptor.pointer);
      } else {
        seen.add(descriptor.pointer);
      }
    }
    let id;
    let pluginIndex = 0;
    if (tag2id.has(descriptor.tag)) {
      id = tag2id.get(descriptor.tag);
    } else {
      const ref = resolvePluginRef(descriptor.tag);
      if (!ref)
        throw new DescriptorSerializationError(descriptor);
      id = ref.id;
      pluginIndex = ref.pluginIndex;
    }
    const record = {
      id,
      pluginIndex,
      children: [],
      state: shallowSerializeDescriptor(descriptor, resolvePluginRef)
    };
    if (!rootRecord) {
      rootRecord = record;
    } else {
      stack[topIndex].children.push(record);
    }
    if (descriptor.createRecursor) {
      stack.push({ recursor: descriptor.createRecursor(), children: record.children });
      topIndex++;
    }
    while (topIndex >= 0) {
      descriptor = stack[topIndex].recursor();
      if (descriptor === null) {
        stack.pop();
        topIndex--;
      } else {
        break;
      }
    }
  } while (topIndex >= 0);
  return encoder.encode(VERSION, rootRecord, usedPlugins);
}
serialize$4.serialize = serialize$3;
function deserializeState(state, getDescriptorDeserializer) {
  if (state && state[encoder.descriptorSymbol] === true) {
    return shallowDeserializeDescriptor(state, getDescriptorDeserializer);
  }
  return Array.isArray(state) ? state.map((item2) => deserializeState(item2, getDescriptorDeserializer)) : state;
}
function shallowDeserializeDescriptor(entry, getDescriptorDeserializer) {
  const deserializeDescriptor = getDescriptorDeserializer(entry[0], entry[1]);
  return deserializeDescriptor(entry[2]);
}
function deserializeRecord(record, getDescriptorDeserializer, buffer) {
  const deserializeDescriptor = getDescriptorDeserializer(record.pluginIndex, record.id);
  const state = deserializeState(record.state, getDescriptorDeserializer);
  if (record.pointerAddresses.length === 0) {
    return deserializeDescriptor(state);
  }
  const endIndex = record.pointerAddresses.length;
  let index = 0;
  const recursor = () => {
    if (index === endIndex)
      return null;
    const recursorRecord = encoder.decodeRecord(buffer, record.pointerAddresses[index++]);
    return deserializeRecord(recursorRecord, getDescriptorDeserializer, buffer);
  };
  return deserializeDescriptor(state, recursor);
}
function buildPluginMap(buffer, options) {
  const cache = options && options.deserializedPluginsCache;
  const cacheKey = md5hex(buffer);
  if (cache && cache.has(cacheKey))
    return cache.get(cacheKey);
  const decodedPlugins = encoder.decodePlugins(buffer);
  if (decodedPlugins.size === 0) {
    const pluginMap2 = /* @__PURE__ */ new Map();
    if (cache)
      cache.set(cacheKey, pluginMap2);
    return pluginMap2;
  }
  const deserializerLookup = /* @__PURE__ */ new Map();
  if (Array.isArray(options && options.plugins)) {
    for (const deserializer of pluginRegistry.getDeserializers(options.plugins)) {
      deserializerLookup.set(deserializer.name, deserializer);
    }
  }
  const pluginMap = /* @__PURE__ */ new Map();
  for (const index of decodedPlugins.keys()) {
    const used = decodedPlugins.get(index);
    const pluginName = used.name;
    const serializerVersion = used.serializerVersion;
    if (!deserializerLookup.has(pluginName)) {
      throw new MissingPluginError(pluginName);
    }
    if (serializerVersion !== deserializerLookup.get(pluginName).serializerVersion) {
      throw new UnsupportedPluginError(pluginName, serializerVersion);
    }
    pluginMap.set(index, deserializerLookup.get(pluginName).id2deserialize);
  }
  if (cache)
    cache.set(cacheKey, pluginMap);
  return pluginMap;
}
function deserialize$1(buffer, options) {
  const version2 = encoder.extractVersion(buffer);
  if (version2 !== VERSION)
    throw new UnsupportedVersion(version2);
  const decoded = encoder.decode(buffer);
  const pluginMap = buildPluginMap(decoded.pluginBuffer, options);
  const descriptorsByPointerIndex = /* @__PURE__ */ new Map();
  const mapPointerDescriptor = (descriptor) => {
    if (descriptor.isPointer === true) {
      if (descriptorsByPointerIndex.has(descriptor.index)) {
        return descriptorsByPointerIndex.get(descriptor.index);
      }
      if (typeof rootDescriptor.createRecursor === "function") {
        recursorUtils.consumeDeep(rootDescriptor.createRecursor());
        if (descriptorsByPointerIndex.has(descriptor.index)) {
          return descriptorsByPointerIndex.get(descriptor.index);
        }
      }
      throw new PointerLookupError(descriptor.index);
    }
    if (descriptor.isComplex === true) {
      descriptorsByPointerIndex.set(descriptor.pointer, descriptor);
    }
    return descriptor;
  };
  const getDescriptorDeserializer = (pluginIndex, id) => {
    return (state, recursor) => {
      const deserializeDescriptor = pluginIndex === 0 ? id2deserialize.get(id) : pluginMap.get(pluginIndex).get(id);
      return mapPointerDescriptor(deserializeDescriptor(state, recursor));
    };
  };
  const rootDescriptor = deserializeRecord(decoded.rootRecord, getDescriptorDeserializer, buffer);
  return rootDescriptor;
}
serialize$4.deserialize = deserialize$1;
const compare = compare$e;
const describe = describe_1$1;
const diff$1 = diff$3;
const format = format$2;
const serialize$2 = serialize$4;
var compare_1 = concordance$1.compare = compare.compare;
var compareDescriptors = concordance$1.compareDescriptors = compare.compareDescriptors;
var describe_1 = concordance$1.describe = describe;
var diff_1 = concordance$1.diff = diff$1.diff;
var diffDescriptors$1 = concordance$1.diffDescriptors = diff$1.diffDescriptors;
var format_1 = concordance$1.format = format.format;
var formatDescriptor = concordance$1.formatDescriptor = format.formatDescriptor;
var serialize_1 = concordance$1.serialize = serialize$2.serialize;
var deserialize = concordance$1.deserialize = serialize$2.deserialize;
const concordance = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  compare: compare_1,
  compareDescriptors,
  default: concordance$1,
  describe: describe_1,
  deserialize,
  diff: diff_1,
  diffDescriptors: diffDescriptors$1,
  format: format_1,
  formatDescriptor,
  serialize: serialize_1
}, [concordance$1]);
const concordanceModule = "default" in concordance ? concordance$1 : concordance;
function getConcordanceTheme() {
  const c = getColors();
  return {
    boolean: c.yellow,
    circular: c.gray("[Circular]"),
    date: {
      invalid: c.red("invalid"),
      value: c.blue
    },
    diffGutters: {
      actual: `  ${c.green("-")} `,
      expected: `  ${c.red("+")} `,
      padding: "    "
    },
    error: {
      ctor: { open: `${c.gray.open}(`, close: `)${c.gray.close}` },
      name: c.magenta
    },
    function: {
      name: c.blue,
      stringTag: c.magenta
    },
    global: c.magenta,
    item: { after: c.gray(",") },
    list: { openBracket: c.gray("["), closeBracket: c.gray("]") },
    mapEntry: { after: c.gray(",") },
    maxDepth: c.gray("…"),
    null: c.yellow,
    number: c.yellow,
    object: {
      openBracket: c.gray("{"),
      closeBracket: c.gray("}"),
      ctor: c.magenta,
      stringTag: { open: `${c.magenta.open}@`, close: c.magenta.close },
      secondaryStringTag: { open: `${c.gray.open}@`, close: c.gray.close }
    },
    property: {
      after: c.gray(","),
      keyBracket: { open: c.gray("["), close: c.gray("]") },
      valueFallback: c.gray("…")
    },
    regexp: {
      source: { open: `${c.blue.open}/`, close: `/${c.blue.close}` },
      flags: c.yellow
    },
    stats: { separator: c.gray("---") },
    string: {
      open: c.blue.open,
      close: c.blue.close,
      line: { open: c.blue("'"), close: c.blue("'") },
      multiline: { start: c.blue("`"), end: c.blue("`") },
      controlPicture: c.gray,
      diff: {
        insert: {
          open: c.bgGreen.open + c.black.open,
          close: c.black.close + c.bgGreen.close
        },
        delete: {
          open: c.bgRed.open + c.black.open,
          close: c.black.close + c.bgRed.close
        },
        equal: c.blue,
        insertLine: {
          open: c.green.open,
          close: c.green.close
        },
        deleteLine: {
          open: c.red.open,
          close: c.red.close
        }
      }
    },
    symbol: c.yellow,
    typedArray: {
      bytes: c.yellow
    },
    undefined: c.yellow
  };
}
function diffDescriptors(actual, expected, options) {
  return concordanceModule.diff(expected, actual, options);
}
function unifiedDiff(actual, expected, options = {}) {
  const theme = getConcordanceTheme();
  const diff2 = diffDescriptors(actual, expected, { theme });
  const { showLegend = true } = options;
  const counts = {
    "+": 0,
    "-": 0
  };
  const c = getColors();
  const plus = theme.diffGutters.actual;
  const minus = `  ${c.green("+")}`;
  const lines = diff2.split(/\r?\n/g);
  lines.forEach((line) => {
    if (line.startsWith(plus))
      counts["+"]++;
    else if (line.startsWith(minus))
      counts["-"]++;
  });
  let legend = "";
  if (showLegend) {
    legend = `  ${c.green(`- Expected  - ${counts["-"]}`)}
  ${c.red(`+ Received  + ${counts["+"]}`)}

`;
  }
  return legend + diff2.replace(/␊\s*$/mg, "");
}
function createChainable(keys2, fn2) {
  function create(context) {
    const chain2 = function(...args) {
      return fn2.apply(context, args);
    };
    Object.assign(chain2, fn2);
    chain2.withContext = () => chain2.bind(context);
    for (const key of keys2) {
      Object.defineProperty(chain2, key, {
        get() {
          return create({ ...context, [key]: true });
        }
      });
    }
    return chain2;
  }
  const chain = create({});
  chain.fn = fn2;
  return chain;
}
function getNames(task) {
  const names = [task.name];
  let current = task;
  while ((current == null ? void 0 : current.suite) || (current == null ? void 0 : current.file)) {
    current = current.suite || current.file;
    if (current == null ? void 0 : current.name)
      names.unshift(current.name);
  }
  return names;
}
function normalizeWindowsPath$1(input2 = "") {
  if (!input2 || !input2.includes("\\")) {
    return input2;
  }
  return input2.replace(/\\/g, "/");
}
const _UNC_REGEX = /^[/\\]{2}/;
const _IS_ABSOLUTE_RE$1 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
const normalize = function(path) {
  if (path.length === 0) {
    return ".";
  }
  path = normalizeWindowsPath$1(path);
  const isUNCPath = path.match(_UNC_REGEX);
  const isPathAbsolute = isAbsolute$1(path);
  const trailingSeparator = path[path.length - 1] === "/";
  path = normalizeString$1(path, !isPathAbsolute);
  if (path.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path += "/";
  }
  if (_DRIVE_LETTER_RE.test(path)) {
    path += "/";
  }
  if (isUNCPath) {
    if (!isPathAbsolute) {
      return `//./${path}`;
    }
    return `//${path}`;
  }
  return isPathAbsolute && !isAbsolute$1(path) ? `/${path}` : path;
};
const join = function(...arguments_) {
  if (arguments_.length === 0) {
    return ".";
  }
  let joined;
  for (const argument of arguments_) {
    if (argument && argument.length > 0) {
      if (joined === void 0) {
        joined = argument;
      } else {
        joined += `/${argument}`;
      }
    }
  }
  if (joined === void 0) {
    return ".";
  }
  return normalize(joined.replace(/\/\/+/g, "/"));
};
function normalizeString$1(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute$1 = function(p) {
  return _IS_ABSOLUTE_RE$1.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath$1(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute$1(p) ? "/" : ".");
};
const fnMap = /* @__PURE__ */ new WeakMap();
const hooksMap = /* @__PURE__ */ new WeakMap();
function setFn(key, fn2) {
  fnMap.set(key, fn2);
}
function setHooks(key, hooks) {
  hooksMap.set(key, hooks);
}
function getHooks(key) {
  return hooksMap.get(key);
}
const collectorContext = {
  tasks: [],
  currentSuite: null
};
function collectTask(task) {
  var _a2;
  (_a2 = collectorContext.currentSuite) == null ? void 0 : _a2.tasks.push(task);
}
async function runWithSuite(suite2, fn2) {
  const prev = collectorContext.currentSuite;
  collectorContext.currentSuite = suite2;
  await fn2();
  collectorContext.currentSuite = prev;
}
function withTimeout(fn2, timeout, isHook = false) {
  if (timeout <= 0 || timeout === Infinity)
    return fn2;
  const { setTimeout, clearTimeout } = getSafeTimers();
  return (...args) => {
    return Promise.race([fn2(...args), new Promise((resolve2, reject) => {
      var _a2;
      const timer = setTimeout(() => {
        clearTimeout(timer);
        reject(new Error(makeTimeoutMsg(isHook, timeout)));
      }, timeout);
      (_a2 = timer.unref) == null ? void 0 : _a2.call(timer);
    })]);
  };
}
function createTestContext(test3, runner2) {
  var _a2;
  const context = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  context.meta = test3;
  context.onTestFailed = (fn2) => {
    test3.onFailed || (test3.onFailed = []);
    test3.onFailed.push(fn2);
  };
  return ((_a2 = runner2.extendTestContext) == null ? void 0 : _a2.call(runner2, context)) || context;
}
function makeTimeoutMsg(isHook, timeout) {
  return `${isHook ? "Hook" : "Test"} timed out in ${timeout}ms.
If this is a long-running ${isHook ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${isHook ? "hookTimeout" : "testTimeout"}".`;
}
var version = "0.31.1";
function getVersion() {
  return globalThis.__vitest_runner_version__ || version;
}
function checkVersion() {
  const collectVersion = getVersion();
  if (collectVersion !== version) {
    const error2 = `Version mismatch: Vitest started as ${collectVersion}, but tests are collected with ${version} version.

- If you are using global Vitest, make sure your package has the same version.
- If you have a monorepo setup, make sure your main package has the same version as your test packages.`;
    throw new Error(error2);
  }
}
const suite = createSuite();
const test$2 = createTest(
  function(name2, fn2, options) {
    checkVersion();
    getCurrentSuite().test.fn.call(this, name2, fn2, options);
  }
);
let runner;
let defaultSuite;
function getCurrentSuite() {
  return collectorContext.currentSuite || defaultSuite;
}
function createSuiteHooks() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function createSuiteCollector(name2, factory = () => {
}, mode, concurrent, shuffle, suiteOptions) {
  const tasks = [];
  const factoryQueue = [];
  let suite2;
  initSuite();
  const test22 = createTest(function(name22, fn2 = noop, options) {
    const mode2 = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    if (typeof options === "number")
      options = { timeout: options };
    if (typeof suiteOptions === "object") {
      options = {
        repeats: suiteOptions.repeats,
        retry: suiteOptions.retry,
        ...options
      };
    }
    const test3 = {
      id: "",
      type: "test",
      name: name22,
      mode: mode2,
      suite: void 0,
      fails: this.fails,
      retry: options == null ? void 0 : options.retry,
      repeats: options == null ? void 0 : options.repeats
    };
    if (this.concurrent || concurrent)
      test3.concurrent = true;
    if (shuffle)
      test3.shuffle = true;
    const context = createTestContext(test3, runner);
    Object.defineProperty(test3, "context", {
      value: context,
      enumerable: false
    });
    setFn(test3, withTimeout(
      () => fn2(context),
      (options == null ? void 0 : options.timeout) ?? runner.config.testTimeout
    ));
    tasks.push(test3);
  });
  const custom = function(name22 = "") {
    const self2 = this || {};
    const task = {
      id: "",
      name: name22,
      type: "custom",
      mode: self2.only ? "only" : self2.skip ? "skip" : self2.todo ? "todo" : "run"
    };
    tasks.push(task);
    return task;
  };
  const collector = {
    type: "collector",
    name: name2,
    mode,
    options: suiteOptions,
    test: test22,
    tasks,
    collect,
    custom,
    clear,
    on: addHook
  };
  function addHook(name22, ...fn2) {
    getHooks(suite2)[name22].push(...fn2);
  }
  function initSuite() {
    if (typeof suiteOptions === "number")
      suiteOptions = { timeout: suiteOptions };
    suite2 = {
      id: "",
      type: "suite",
      name: name2,
      mode,
      shuffle,
      tasks: []
    };
    setHooks(suite2, createSuiteHooks());
  }
  function clear() {
    tasks.length = 0;
    factoryQueue.length = 0;
    initSuite();
  }
  async function collect(file) {
    factoryQueue.length = 0;
    if (factory)
      await runWithSuite(collector, () => factory(test22));
    const allChildren = [];
    for (const i2 of [...factoryQueue, ...tasks])
      allChildren.push(i2.type === "collector" ? await i2.collect(file) : i2);
    suite2.file = file;
    suite2.tasks = allChildren;
    allChildren.forEach((task) => {
      task.suite = suite2;
      if (file)
        task.file = file;
    });
    return suite2;
  }
  collectTask(collector);
  return collector;
}
function createSuite() {
  function suiteFn(name2, factory, options) {
    var _a2;
    checkVersion();
    const mode = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    const currentSuite = getCurrentSuite();
    if (typeof options === "number")
      options = { timeout: options };
    if (currentSuite && typeof ((_a2 = currentSuite.options) == null ? void 0 : _a2.repeats) === "number") {
      options = { repeats: currentSuite.options.repeats, ...options };
    }
    return createSuiteCollector(name2, factory, mode, this.concurrent, this.shuffle, options);
  }
  suiteFn.each = function(cases, ...args) {
    const suite2 = this.withContext();
    if (Array.isArray(cases) && args.length)
      cases = formatTemplateString(cases, args);
    return (name2, fn2, options) => {
      const arrayOnlyCases = cases.every(Array.isArray);
      cases.forEach((i2, idx) => {
        const items = Array.isArray(i2) ? i2 : [i2];
        arrayOnlyCases ? suite2(formatTitle(name2, items, idx), () => fn2(...items), options) : suite2(formatTitle(name2, items, idx), () => fn2(i2), options);
      });
    };
  };
  suiteFn.skipIf = (condition) => condition ? suite.skip : suite;
  suiteFn.runIf = (condition) => condition ? suite : suite.skip;
  return createChainable(
    ["concurrent", "shuffle", "skip", "only", "todo"],
    suiteFn
  );
}
function createTest(fn2) {
  const testFn = fn2;
  testFn.each = function(cases, ...args) {
    const test22 = this.withContext();
    if (Array.isArray(cases) && args.length)
      cases = formatTemplateString(cases, args);
    return (name2, fn22, options) => {
      const arrayOnlyCases = cases.every(Array.isArray);
      cases.forEach((i2, idx) => {
        const items = Array.isArray(i2) ? i2 : [i2];
        arrayOnlyCases ? test22(formatTitle(name2, items, idx), () => fn22(...items), options) : test22(formatTitle(name2, items, idx), () => fn22(i2), options);
      });
    };
  };
  testFn.skipIf = (condition) => condition ? test$2.skip : test$2;
  testFn.runIf = (condition) => condition ? test$2 : test$2.skip;
  return createChainable(
    ["concurrent", "skip", "only", "todo", "fails"],
    testFn
  );
}
function formatTitle(template, items, idx) {
  if (template.includes("%#")) {
    template = template.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${idx}`).replace(/__vitest_escaped_%__/g, "%%");
  }
  const count = template.split("%").length - 1;
  let formatted = format$3(template, ...items.slice(0, count));
  if (isObject$b(items[0])) {
    formatted = formatted.replace(
      /\$([$\w_.]+)/g,
      (_, key) => {
        var _a2;
        return objDisplay$2(objectAttr(items[0], key), (_a2 = void 0) == null ? void 0 : _a2.chaiConfig);
      }
      // https://github.com/chaijs/chai/pull/1490
    );
  }
  return formatted;
}
function formatTemplateString(cases, args) {
  const header = cases.join("").trim().replace(/ /g, "").split("\n").map((i2) => i2.split("|"))[0];
  const res = [];
  for (let i2 = 0; i2 < Math.floor(args.length / header.length); i2++) {
    const oneCase = {};
    for (let j = 0; j < header.length; j++)
      oneCase[header[j]] = args[i2 * header.length + j];
    res.push(oneCase);
  }
  return res;
}
let _test;
function getCurrentTest() {
  return _test;
}
function getWorkerState() {
  return globalThis.__vitest_worker__;
}
function getCurrentEnvironment() {
  return globalThis.__vitest_environment__;
}
var _a;
const isNode = typeof process < "u" && typeof process.stdout < "u" && !((_a = process.versions) == null ? void 0 : _a.deno) && !globalThis.window;
isNode && process.platform === "win32";
function getRunMode() {
  return getWorkerState().config.mode;
}
function isRunningInBenchmark() {
  return getRunMode() === "benchmark";
}
function resetModules(modules, resetMocks = false) {
  const skipPaths = [
    // Vitest
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    // yarn's .store folder
    /vitest-virtual-\w+\/dist/,
    // cnpm
    /@vitest\/dist/,
    // don't clear mocks
    ...!resetMocks ? [/^mock:/] : []
  ];
  modules.forEach((mod, path) => {
    if (skipPaths.some((re2) => re2.test(path)))
      return;
    modules.invalidateModule(mod);
  });
}
var chai$3 = {};
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function exclude() {
  var excludes = [].slice.call(arguments);
  function excludeProps(res, obj) {
    Object.keys(obj).forEach(function(key) {
      if (!~excludes.indexOf(key))
        res[key] = obj[key];
    });
  }
  return function extendExclude() {
    var args = [].slice.call(arguments), i2 = 0, res = {};
    for (; i2 < args.length; i2++) {
      excludeProps(res, args[i2]);
    }
    return res;
  };
}
/*!
 * Primary Exports
 */
var assertionError = AssertionError$2;
function AssertionError$2(message, _props, ssf) {
  var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
  this.message = message || "Unspecified AssertionError";
  this.showDiff = false;
  for (var key in props) {
    this[key] = props[key];
  }
  ssf = ssf || AssertionError$2;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  } else {
    try {
      throw new Error();
    } catch (e) {
      this.stack = e.stack;
    }
  }
}
/*!
 * Inherit from Error.prototype
 */
AssertionError$2.prototype = Object.create(Error.prototype);
/*!
 * Statically set name
 */
AssertionError$2.prototype.name = "AssertionError";
/*!
 * Ensure correct constructor
 */
AssertionError$2.prototype.constructor = AssertionError$2;
AssertionError$2.prototype.toJSON = function(stack) {
  var extend = exclude("constructor", "toJSON", "stack"), props = extend({ name: this.name }, this);
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }
  return props;
};
var utils = {};
function hasProperty(obj, name2) {
  if (typeof obj === "undefined" || obj === null) {
    return false;
  }
  return name2 in Object(obj);
}
function parsePath(path) {
  var str = path.replace(/([^\\])\[/g, "$1.[");
  var parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function mapMatches(value) {
    if (value === "constructor" || value === "__proto__" || value === "prototype") {
      return {};
    }
    var regexp2 = /^\[(\d+)\]$/;
    var mArr = regexp2.exec(value);
    var parsed = null;
    if (mArr) {
      parsed = { i: parseFloat(mArr[1]) };
    } else {
      parsed = { p: value.replace(/\\([.[\]])/g, "$1") };
    }
    return parsed;
  });
}
function internalGetPathValue(obj, parsed, pathDepth) {
  var temporaryValue = obj;
  var res = null;
  pathDepth = typeof pathDepth === "undefined" ? parsed.length : pathDepth;
  for (var i2 = 0; i2 < pathDepth; i2++) {
    var part = parsed[i2];
    if (temporaryValue) {
      if (typeof part.p === "undefined") {
        temporaryValue = temporaryValue[part.i];
      } else {
        temporaryValue = temporaryValue[part.p];
      }
      if (i2 === pathDepth - 1) {
        res = temporaryValue;
      }
    }
  }
  return res;
}
function internalSetPathValue(obj, val, parsed) {
  var tempObj = obj;
  var pathDepth = parsed.length;
  var part = null;
  for (var i2 = 0; i2 < pathDepth; i2++) {
    var propName = null;
    var propVal = null;
    part = parsed[i2];
    if (i2 === pathDepth - 1) {
      propName = typeof part.p === "undefined" ? part.i : part.p;
      tempObj[propName] = val;
    } else if (typeof part.p !== "undefined" && tempObj[part.p]) {
      tempObj = tempObj[part.p];
    } else if (typeof part.i !== "undefined" && tempObj[part.i]) {
      tempObj = tempObj[part.i];
    } else {
      var next = parsed[i2 + 1];
      propName = typeof part.p === "undefined" ? part.i : part.p;
      propVal = typeof next.p === "undefined" ? [] : {};
      tempObj[propName] = propVal;
      tempObj = tempObj[propName];
    }
  }
}
function getPathInfo(obj, path) {
  var parsed = parsePath(path);
  var last = parsed[parsed.length - 1];
  var info = {
    parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: internalGetPathValue(obj, parsed)
  };
  info.exists = hasProperty(info.parent, info.name);
  return info;
}
function getPathValue(obj, path) {
  var info = getPathInfo(obj, path);
  return info.value;
}
function setPathValue(obj, path, val) {
  var parsed = parsePath(path);
  internalSetPathValue(obj, val, parsed);
  return obj;
}
var pathval = {
  hasProperty,
  getPathInfo,
  getPathValue,
  setPathValue
};
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var flag$5 = function flag(obj, key, value) {
  var flags = obj.__flags || (obj.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var flag$4 = flag$5;
var test$1 = function test(obj, args) {
  var negate = flag$4(obj, "negate"), expr = args[0];
  return negate ? !expr : expr;
};
var typeDetect$1 = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal$1, function() {
    var promiseExists = typeof Promise === "function";
    var globalObject2 = typeof self === "object" ? self : commonjsGlobal$1;
    var symbolExists = typeof Symbol !== "undefined";
    var mapExists = typeof Map !== "undefined";
    var setExists = typeof Set !== "undefined";
    var weakMapExists = typeof WeakMap !== "undefined";
    var weakSetExists = typeof WeakSet !== "undefined";
    var dataViewExists = typeof DataView !== "undefined";
    var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
    var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
    var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
    var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
    var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
    var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
    var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
    var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
    var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
    var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
    var toStringLeftSliceLength = 8;
    var toStringRightSliceLength = -1;
    function typeDetect2(obj) {
      var typeofObj = typeof obj;
      if (typeofObj !== "object") {
        return typeofObj;
      }
      if (obj === null) {
        return "null";
      }
      if (obj === globalObject2) {
        return "global";
      }
      if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
        return "Array";
      }
      if (typeof window === "object" && window !== null) {
        if (typeof window.location === "object" && obj === window.location) {
          return "Location";
        }
        if (typeof window.document === "object" && obj === window.document) {
          return "Document";
        }
        if (typeof window.navigator === "object") {
          if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
            return "MimeTypeArray";
          }
          if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
            return "PluginArray";
          }
        }
        if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
          if (obj.tagName === "BLOCKQUOTE") {
            return "HTMLQuoteElement";
          }
          if (obj.tagName === "TD") {
            return "HTMLTableDataCellElement";
          }
          if (obj.tagName === "TH") {
            return "HTMLTableHeaderCellElement";
          }
        }
      }
      var stringTag2 = symbolToStringTagExists && obj[Symbol.toStringTag];
      if (typeof stringTag2 === "string") {
        return stringTag2;
      }
      var objPrototype = Object.getPrototypeOf(obj);
      if (objPrototype === RegExp.prototype) {
        return "RegExp";
      }
      if (objPrototype === Date.prototype) {
        return "Date";
      }
      if (promiseExists && objPrototype === Promise.prototype) {
        return "Promise";
      }
      if (setExists && objPrototype === Set.prototype) {
        return "Set";
      }
      if (mapExists && objPrototype === Map.prototype) {
        return "Map";
      }
      if (weakSetExists && objPrototype === WeakSet.prototype) {
        return "WeakSet";
      }
      if (weakMapExists && objPrototype === WeakMap.prototype) {
        return "WeakMap";
      }
      if (dataViewExists && objPrototype === DataView.prototype) {
        return "DataView";
      }
      if (mapExists && objPrototype === mapIteratorPrototype) {
        return "Map Iterator";
      }
      if (setExists && objPrototype === setIteratorPrototype) {
        return "Set Iterator";
      }
      if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
        return "Array Iterator";
      }
      if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
        return "String Iterator";
      }
      if (objPrototype === null) {
        return "Object";
      }
      return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
    }
    return typeDetect2;
  });
})(typeDetect$1);
var typeDetectExports = typeDetect$1.exports;
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var AssertionError$1 = assertionError;
var flag$3 = flag$5;
var type$3 = typeDetectExports;
var expectTypes = function expectTypes2(obj, types2) {
  var flagMsg = flag$3(obj, "message");
  var ssfi = flag$3(obj, "ssfi");
  flagMsg = flagMsg ? flagMsg + ": " : "";
  obj = flag$3(obj, "object");
  types2 = types2.map(function(t2) {
    return t2.toLowerCase();
  });
  types2.sort();
  var str = types2.map(function(t2, index) {
    var art = ~["a", "e", "i", "o", "u"].indexOf(t2.charAt(0)) ? "an" : "a";
    var or = types2.length > 1 && index === types2.length - 1 ? "or " : "";
    return or + art + " " + t2;
  }).join(", ");
  var objType = type$3(obj).toLowerCase();
  if (!types2.some(function(expected) {
    return objType === expected;
  })) {
    throw new AssertionError$1(
      flagMsg + "object tested must be " + str + ", but " + objType + " given",
      void 0,
      ssfi
    );
  }
};
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var getActual$1 = function getActual(obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};
var toString$1 = Function.prototype.toString;
var functionNameMatch$1 = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
function getFuncName(aFunc) {
  if (typeof aFunc !== "function") {
    return null;
  }
  var name2 = "";
  if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
    var match = toString$1.call(aFunc).match(functionNameMatch$1);
    if (match) {
      name2 = match[1];
    }
  } else {
    name2 = aFunc.name;
  }
  return name2;
}
var getFuncName_1 = getFuncName;
var config$5 = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */
  includeStack: false,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */
  showDiff: true,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */
  useProxy: true,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"]
};
var loupe = loupeExports;
var config$4 = config$5;
var inspect_1 = inspect$2;
function inspect$2(obj, showHidden, depth, colors) {
  var options = {
    colors,
    depth: typeof depth === "undefined" ? 2 : depth,
    showHidden,
    truncate: config$4.truncateThreshold ? config$4.truncateThreshold : Infinity
  };
  return loupe.inspect(obj, options);
}
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var inspect$1 = inspect_1;
var config$3 = config$5;
var objDisplay$1 = function objDisplay(obj) {
  var str = inspect$1(obj), type2 = Object.prototype.toString.call(obj);
  if (config$3.truncateThreshold && str.length >= config$3.truncateThreshold) {
    if (type2 === "[object Function]") {
      return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
    } else if (type2 === "[object Array]") {
      return "[ Array(" + obj.length + ") ]";
    } else if (type2 === "[object Object]") {
      var keys2 = Object.keys(obj), kstr = keys2.length > 2 ? keys2.splice(0, 2).join(", ") + ", ..." : keys2.join(", ");
      return "{ Object (" + kstr + ") }";
    } else {
      return str;
    }
  } else {
    return str;
  }
};
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var flag$2 = flag$5, getActual2 = getActual$1, objDisplay2 = objDisplay$1;
var getMessage$1 = function getMessage(obj, args) {
  var negate = flag$2(obj, "negate"), val = flag$2(obj, "object"), expected = args[3], actual = getActual2(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag$2(obj, "message");
  if (typeof msg === "function")
    msg = msg();
  msg = msg || "";
  msg = msg.replace(/#\{this\}/g, function() {
    return objDisplay2(val);
  }).replace(/#\{act\}/g, function() {
    return objDisplay2(actual);
  }).replace(/#\{exp\}/g, function() {
    return objDisplay2(expected);
  });
  return flagMsg ? flagMsg + ": " + msg : msg;
};
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var transferFlags = function transferFlags2(assertion2, object2, includeAll) {
  var flags = assertion2.__flags || (assertion2.__flags = /* @__PURE__ */ Object.create(null));
  if (!object2.__flags) {
    object2.__flags = /* @__PURE__ */ Object.create(null);
  }
  includeAll = arguments.length === 3 ? includeAll : true;
  for (var flag3 in flags) {
    if (includeAll || flag3 !== "object" && flag3 !== "ssfi" && flag3 !== "lockSsfi" && flag3 != "message") {
      object2.__flags[flag3] = flags[flag3];
    }
  }
};
var deepEql = { exports: {} };
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var type$2 = typeDetectExports;
function FakeMap() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
FakeMap.prototype = {
  get: function get2(key) {
    return key[this._key];
  },
  set: function set(key, value) {
    if (Object.isExtensible(key)) {
      Object.defineProperty(key, this._key, {
        value,
        configurable: true
      });
    }
  }
};
var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  if (!memoizeMap || isPrimitive$1(leftHandOperand) || isPrimitive$1(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === "boolean") {
      return result;
    }
  }
  return null;
}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  if (!memoizeMap || isPrimitive$1(leftHandOperand) || isPrimitive$1(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}
/*!
 * Primary Export
 */
deepEql.exports = deepEqual;
deepEql.exports.MemoizeMap = MemoizeMap;
function deepEqual(leftHandOperand, rightHandOperand, options) {
  if (options && options.comparator) {
    return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }
  var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }
  return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}
function simpleEqual(leftHandOperand, rightHandOperand) {
  if (leftHandOperand === rightHandOperand) {
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }
  if (leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
  rightHandOperand !== rightHandOperand) {
    return true;
  }
  if (isPrimitive$1(leftHandOperand) || isPrimitive$1(rightHandOperand)) {
    return false;
  }
  return null;
}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
  var comparator2 = options && options.comparator;
  var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }
  if (comparator2) {
    var comparatorResult = comparator2(leftHandOperand, rightHandOperand);
    if (comparatorResult === false || comparatorResult === true) {
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      return simpleResult;
    }
  }
  var leftHandType = type$2(leftHandOperand);
  if (leftHandType !== type$2(rightHandOperand)) {
    memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);
  var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}
function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return leftHandOperand === rightHandOperand;
    case "Error":
      return keysEqual(leftHandOperand, rightHandOperand, ["name", "message", "code"], options);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return iterableEqual(leftHandOperand, rightHandOperand, options);
    case "RegExp":
      return regexpEqual(leftHandOperand, rightHandOperand);
    case "Generator":
      return generatorEqual(leftHandOperand, rightHandOperand, options);
    case "DataView":
      return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case "ArrayBuffer":
      return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case "Set":
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case "Map":
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return leftHandOperand.equals(rightHandOperand);
    case "Temporal.Duration":
      return leftHandOperand.total("nanoseconds") === rightHandOperand.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return leftHandOperand.toString() === rightHandOperand.toString();
    default:
      return objectEqual(leftHandOperand, rightHandOperand, options);
  }
}
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
function regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function entriesEqual(leftHandOperand, rightHandOperand, options) {
  if (leftHandOperand.size !== rightHandOperand.size) {
    return false;
  }
  if (leftHandOperand.size === 0) {
    return true;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(function gatherEntries(key, value) {
    leftHandItems.push([key, value]);
  });
  rightHandOperand.forEach(function gatherEntries(key, value) {
    rightHandItems.push([key, value]);
  });
  return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length2 = leftHandOperand.length;
  if (length2 !== rightHandOperand.length) {
    return false;
  }
  if (length2 === 0) {
    return true;
  }
  var index = -1;
  while (++index < length2) {
    if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
      return false;
    }
  }
  return true;
}
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function generatorEqual(leftHandOperand, rightHandOperand, options) {
  return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function hasIteratorFunction(target) {
  return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function getIteratorEntries(target) {
  if (hasIteratorFunction(target)) {
    try {
      return getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [generatorResult.value];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function getEnumerableKeys(target) {
  var keys2 = [];
  for (var key in target) {
    keys2.push(key);
  }
  return keys2;
}
function getEnumerableSymbols(target) {
  var keys2 = [];
  var allKeys = Object.getOwnPropertySymbols(target);
  for (var i2 = 0; i2 < allKeys.length; i2 += 1) {
    var key = allKeys[i2];
    if (Object.getOwnPropertyDescriptor(target, key).enumerable) {
      keys2.push(key);
    }
  }
  return keys2;
}
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function keysEqual(leftHandOperand, rightHandOperand, keys2, options) {
  var length2 = keys2.length;
  if (length2 === 0) {
    return true;
  }
  for (var i2 = 0; i2 < length2; i2 += 1) {
    if (deepEqual(leftHandOperand[keys2[i2]], rightHandOperand[keys2[i2]], options) === false) {
      return false;
    }
  }
  return true;
}
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = getEnumerableKeys(leftHandOperand);
  var rightHandKeys = getEnumerableKeys(rightHandOperand);
  var leftHandSymbols = getEnumerableSymbols(leftHandOperand);
  var rightHandSymbols = getEnumerableSymbols(rightHandOperand);
  leftHandKeys = leftHandKeys.concat(leftHandSymbols);
  rightHandKeys = rightHandKeys.concat(rightHandSymbols);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    if (iterableEqual(mapSymbols(leftHandKeys).sort(), mapSymbols(rightHandKeys).sort()) === false) {
      return false;
    }
    return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }
  var leftHandEntries = getIteratorEntries(leftHandOperand);
  var rightHandEntries = getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return iterableEqual(leftHandEntries, rightHandEntries, options);
  }
  if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
    return true;
  }
  return false;
}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function isPrimitive$1(value) {
  return value === null || typeof value !== "object";
}
function mapSymbols(arr) {
  return arr.map(function mapSymbol(entry) {
    if (typeof entry === "symbol") {
      return entry.toString();
    }
    return entry;
  });
}
var deepEqlExports = deepEql.exports;
var config$2 = config$5;
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var isProxyEnabled$1 = function isProxyEnabled() {
  return config$2.useProxy && typeof Proxy !== "undefined" && typeof Reflect !== "undefined";
};
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var addProperty$1;
var hasRequiredAddProperty;
function requireAddProperty() {
  if (hasRequiredAddProperty)
    return addProperty$1;
  hasRequiredAddProperty = 1;
  var chai2 = requireChai();
  var flag3 = flag$5;
  var isProxyEnabled3 = isProxyEnabled$1;
  var transferFlags$1 = transferFlags;
  addProperty$1 = function addProperty2(ctx, name2, getter) {
    getter = getter === void 0 ? function() {
    } : getter;
    Object.defineProperty(
      ctx,
      name2,
      {
        get: function propertyGetter() {
          if (!isProxyEnabled3() && !flag3(this, "lockSsfi")) {
            flag3(this, "ssfi", propertyGetter);
          }
          var result = getter.call(this);
          if (result !== void 0)
            return result;
          var newAssertion = new chai2.Assertion();
          transferFlags$1(this, newAssertion);
          return newAssertion;
        },
        configurable: true
      }
    );
  };
  return addProperty$1;
}
var fnLengthDesc = Object.getOwnPropertyDescriptor(function() {
}, "length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var addLengthGuard = function addLengthGuard2(fn2, assertionName, isChainable) {
  if (!fnLengthDesc.configurable)
    return fn2;
  Object.defineProperty(fn2, "length", {
    get: function() {
      if (isChainable) {
        throw Error("Invalid Chai property: " + assertionName + '.length. Due to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
      }
      throw Error("Invalid Chai property: " + assertionName + '.length. See docs for proper usage of "' + assertionName + '".');
    }
  });
  return fn2;
};
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var getProperties$1 = function getProperties(object2) {
  var result = Object.getOwnPropertyNames(object2);
  function addProperty2(property2) {
    if (result.indexOf(property2) === -1) {
      result.push(property2);
    }
  }
  var proto = Object.getPrototypeOf(object2);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty2);
    proto = Object.getPrototypeOf(proto);
  }
  return result;
};
var config$1 = config$5;
var flag$1 = flag$5;
var getProperties2 = getProperties$1;
var isProxyEnabled2 = isProxyEnabled$1;
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var builtins = ["__flags", "__methods", "_obj", "assert"];
var proxify = function proxify2(obj, nonChainableMethodName) {
  if (!isProxyEnabled2())
    return obj;
  return new Proxy(obj, {
    get: function proxyGetter(target, property2) {
      if (typeof property2 === "string" && config$1.proxyExcludedKeys.indexOf(property2) === -1 && !Reflect.has(target, property2)) {
        if (nonChainableMethodName) {
          throw Error("Invalid Chai property: " + nonChainableMethodName + "." + property2 + '. See docs for proper usage of "' + nonChainableMethodName + '".');
        }
        var suggestion = null;
        var suggestionDistance = 4;
        getProperties2(target).forEach(function(prop) {
          if (!Object.prototype.hasOwnProperty(prop) && builtins.indexOf(prop) === -1) {
            var dist = stringDistanceCapped(
              property2,
              prop,
              suggestionDistance
            );
            if (dist < suggestionDistance) {
              suggestion = prop;
              suggestionDistance = dist;
            }
          }
        });
        if (suggestion !== null) {
          throw Error("Invalid Chai property: " + property2 + '. Did you mean "' + suggestion + '"?');
        } else {
          throw Error("Invalid Chai property: " + property2);
        }
      }
      if (builtins.indexOf(property2) === -1 && !flag$1(target, "lockSsfi")) {
        flag$1(target, "ssfi", proxyGetter);
      }
      return Reflect.get(target, property2);
    }
  });
};
function stringDistanceCapped(strA, strB, cap) {
  if (Math.abs(strA.length - strB.length) >= cap) {
    return cap;
  }
  var memo = [];
  for (var i2 = 0; i2 <= strA.length; i2++) {
    memo[i2] = Array(strB.length + 1).fill(0);
    memo[i2][0] = i2;
  }
  for (var j = 0; j < strB.length; j++) {
    memo[0][j] = j;
  }
  for (var i2 = 1; i2 <= strA.length; i2++) {
    var ch = strA.charCodeAt(i2 - 1);
    for (var j = 1; j <= strB.length; j++) {
      if (Math.abs(i2 - j) >= cap) {
        memo[i2][j] = cap;
        continue;
      }
      memo[i2][j] = Math.min(
        memo[i2 - 1][j] + 1,
        memo[i2][j - 1] + 1,
        memo[i2 - 1][j - 1] + (ch === strB.charCodeAt(j - 1) ? 0 : 1)
      );
    }
  }
  return memo[strA.length][strB.length];
}
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var addMethod;
var hasRequiredAddMethod;
function requireAddMethod() {
  if (hasRequiredAddMethod)
    return addMethod;
  hasRequiredAddMethod = 1;
  var addLengthGuard$1 = addLengthGuard;
  var chai2 = requireChai();
  var flag3 = flag$5;
  var proxify$1 = proxify;
  var transferFlags$1 = transferFlags;
  addMethod = function addMethod2(ctx, name2, method) {
    var methodWrapper = function() {
      if (!flag3(this, "lockSsfi")) {
        flag3(this, "ssfi", methodWrapper);
      }
      var result = method.apply(this, arguments);
      if (result !== void 0)
        return result;
      var newAssertion = new chai2.Assertion();
      transferFlags$1(this, newAssertion);
      return newAssertion;
    };
    addLengthGuard$1(methodWrapper, name2, false);
    ctx[name2] = proxify$1(methodWrapper, name2);
  };
  return addMethod;
}
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var overwriteProperty;
var hasRequiredOverwriteProperty;
function requireOverwriteProperty() {
  if (hasRequiredOverwriteProperty)
    return overwriteProperty;
  hasRequiredOverwriteProperty = 1;
  var chai2 = requireChai();
  var flag3 = flag$5;
  var isProxyEnabled3 = isProxyEnabled$1;
  var transferFlags$1 = transferFlags;
  overwriteProperty = function overwriteProperty2(ctx, name2, getter) {
    var _get = Object.getOwnPropertyDescriptor(ctx, name2), _super = function() {
    };
    if (_get && "function" === typeof _get.get)
      _super = _get.get;
    Object.defineProperty(
      ctx,
      name2,
      {
        get: function overwritingPropertyGetter() {
          if (!isProxyEnabled3() && !flag3(this, "lockSsfi")) {
            flag3(this, "ssfi", overwritingPropertyGetter);
          }
          var origLockSsfi = flag3(this, "lockSsfi");
          flag3(this, "lockSsfi", true);
          var result = getter(_super).call(this);
          flag3(this, "lockSsfi", origLockSsfi);
          if (result !== void 0) {
            return result;
          }
          var newAssertion = new chai2.Assertion();
          transferFlags$1(this, newAssertion);
          return newAssertion;
        },
        configurable: true
      }
    );
  };
  return overwriteProperty;
}
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var overwriteMethod;
var hasRequiredOverwriteMethod;
function requireOverwriteMethod() {
  if (hasRequiredOverwriteMethod)
    return overwriteMethod;
  hasRequiredOverwriteMethod = 1;
  var addLengthGuard$1 = addLengthGuard;
  var chai2 = requireChai();
  var flag3 = flag$5;
  var proxify$1 = proxify;
  var transferFlags$1 = transferFlags;
  overwriteMethod = function overwriteMethod2(ctx, name2, method) {
    var _method = ctx[name2], _super = function() {
      throw new Error(name2 + " is not a function");
    };
    if (_method && "function" === typeof _method)
      _super = _method;
    var overwritingMethodWrapper = function() {
      if (!flag3(this, "lockSsfi")) {
        flag3(this, "ssfi", overwritingMethodWrapper);
      }
      var origLockSsfi = flag3(this, "lockSsfi");
      flag3(this, "lockSsfi", true);
      var result = method(_super).apply(this, arguments);
      flag3(this, "lockSsfi", origLockSsfi);
      if (result !== void 0) {
        return result;
      }
      var newAssertion = new chai2.Assertion();
      transferFlags$1(this, newAssertion);
      return newAssertion;
    };
    addLengthGuard$1(overwritingMethodWrapper, name2, false);
    ctx[name2] = proxify$1(overwritingMethodWrapper, name2);
  };
  return overwriteMethod;
}
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var addChainableMethod;
var hasRequiredAddChainableMethod;
function requireAddChainableMethod() {
  if (hasRequiredAddChainableMethod)
    return addChainableMethod;
  hasRequiredAddChainableMethod = 1;
  /*!
   * Module dependencies
   */
  var addLengthGuard$1 = addLengthGuard;
  var chai2 = requireChai();
  var flag3 = flag$5;
  var proxify$1 = proxify;
  var transferFlags$1 = transferFlags;
  /*!
   * Module variables
   */
  var canSetPrototype = typeof Object.setPrototypeOf === "function";
  var testFn = function() {
  };
  var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name2) {
    var propDesc = Object.getOwnPropertyDescriptor(testFn, name2);
    if (typeof propDesc !== "object")
      return true;
    return !propDesc.configurable;
  });
  var call2 = Function.prototype.call, apply2 = Function.prototype.apply;
  addChainableMethod = function addChainableMethod2(ctx, name2, method, chainingBehavior) {
    if (typeof chainingBehavior !== "function") {
      chainingBehavior = function() {
      };
    }
    var chainableBehavior = {
      method,
      chainingBehavior
    };
    if (!ctx.__methods) {
      ctx.__methods = {};
    }
    ctx.__methods[name2] = chainableBehavior;
    Object.defineProperty(
      ctx,
      name2,
      {
        get: function chainableMethodGetter() {
          chainableBehavior.chainingBehavior.call(this);
          var chainableMethodWrapper = function() {
            if (!flag3(this, "lockSsfi")) {
              flag3(this, "ssfi", chainableMethodWrapper);
            }
            var result = chainableBehavior.method.apply(this, arguments);
            if (result !== void 0) {
              return result;
            }
            var newAssertion = new chai2.Assertion();
            transferFlags$1(this, newAssertion);
            return newAssertion;
          };
          addLengthGuard$1(chainableMethodWrapper, name2, true);
          if (canSetPrototype) {
            var prototype = Object.create(this);
            prototype.call = call2;
            prototype.apply = apply2;
            Object.setPrototypeOf(chainableMethodWrapper, prototype);
          } else {
            var asserterNames = Object.getOwnPropertyNames(ctx);
            asserterNames.forEach(function(asserterName) {
              if (excludeNames.indexOf(asserterName) !== -1) {
                return;
              }
              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
              Object.defineProperty(chainableMethodWrapper, asserterName, pd);
            });
          }
          transferFlags$1(this, chainableMethodWrapper);
          return proxify$1(chainableMethodWrapper);
        },
        configurable: true
      }
    );
  };
  return addChainableMethod;
}
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var overwriteChainableMethod;
var hasRequiredOverwriteChainableMethod;
function requireOverwriteChainableMethod() {
  if (hasRequiredOverwriteChainableMethod)
    return overwriteChainableMethod;
  hasRequiredOverwriteChainableMethod = 1;
  var chai2 = requireChai();
  var transferFlags$1 = transferFlags;
  overwriteChainableMethod = function overwriteChainableMethod2(ctx, name2, method, chainingBehavior) {
    var chainableBehavior = ctx.__methods[name2];
    var _chainingBehavior = chainableBehavior.chainingBehavior;
    chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
      var result = chainingBehavior(_chainingBehavior).call(this);
      if (result !== void 0) {
        return result;
      }
      var newAssertion = new chai2.Assertion();
      transferFlags$1(this, newAssertion);
      return newAssertion;
    };
    var _method = chainableBehavior.method;
    chainableBehavior.method = function overwritingChainableMethodWrapper() {
      var result = method(_method).apply(this, arguments);
      if (result !== void 0) {
        return result;
      }
      var newAssertion = new chai2.Assertion();
      transferFlags$1(this, newAssertion);
      return newAssertion;
    };
  };
  return overwriteChainableMethod;
}
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var inspect = inspect_1;
var compareByInspect = function compareByInspect2(a, b2) {
  return inspect(a) < inspect(b2) ? -1 : 1;
};
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var getOwnEnumerablePropertySymbols$1 = function getOwnEnumerablePropertySymbols(obj) {
  if (typeof Object.getOwnPropertySymbols !== "function")
    return [];
  return Object.getOwnPropertySymbols(obj).filter(function(sym) {
    return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
  });
};
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var getOwnEnumerablePropertySymbols2 = getOwnEnumerablePropertySymbols$1;
var getOwnEnumerableProperties = function getOwnEnumerableProperties2(obj) {
  return Object.keys(obj).concat(getOwnEnumerablePropertySymbols2(obj));
};
function compatibleInstance(thrown, errorLike) {
  return errorLike instanceof Error && thrown === errorLike;
}
function compatibleConstructor(thrown, errorLike) {
  if (errorLike instanceof Error) {
    return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
  } else if (errorLike.prototype instanceof Error || errorLike === Error) {
    return thrown.constructor === errorLike || thrown instanceof errorLike;
  }
  return false;
}
function compatibleMessage(thrown, errMatcher) {
  var comparisonString = typeof thrown === "string" ? thrown : thrown.message;
  if (errMatcher instanceof RegExp) {
    return errMatcher.test(comparisonString);
  } else if (typeof errMatcher === "string") {
    return comparisonString.indexOf(errMatcher) !== -1;
  }
  return false;
}
var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
function getFunctionName(constructorFn) {
  var name2 = "";
  if (typeof constructorFn.name === "undefined") {
    var match = String(constructorFn).match(functionNameMatch);
    if (match) {
      name2 = match[1];
    }
  } else {
    name2 = constructorFn.name;
  }
  return name2;
}
function getConstructorName(errorLike) {
  var constructorName = errorLike;
  if (errorLike instanceof Error) {
    constructorName = getFunctionName(errorLike.constructor);
  } else if (typeof errorLike === "function") {
    constructorName = getFunctionName(errorLike).trim() || getFunctionName(new errorLike());
  }
  return constructorName;
}
function getMessage2(errorLike) {
  var msg = "";
  if (errorLike && errorLike.message) {
    msg = errorLike.message;
  } else if (typeof errorLike === "string") {
    msg = errorLike;
  }
  return msg;
}
var checkError = {
  compatibleInstance,
  compatibleConstructor,
  compatibleMessage,
  getMessage: getMessage2,
  getConstructorName
};
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function isNaN$1(value) {
  return value !== value;
}
var _isNaN = Number.isNaN || isNaN$1;
var type$1 = typeDetectExports;
var flag2 = flag$5;
function isObjectType(obj) {
  var objectType = type$1(obj);
  var objectTypes = ["Array", "Object", "function"];
  return objectTypes.indexOf(objectType) !== -1;
}
var getOperator = function getOperator2(obj, args) {
  var operator = flag2(obj, "operator");
  var negate = flag2(obj, "negate");
  var expected = args[3];
  var msg = negate ? args[2] : args[1];
  if (operator) {
    return operator;
  }
  if (typeof msg === "function")
    msg = msg();
  msg = msg || "";
  if (!msg) {
    return void 0;
  }
  if (/\shave\s/.test(msg)) {
    return void 0;
  }
  var isObject2 = isObjectType(expected);
  if (/\snot\s/.test(msg)) {
    return isObject2 ? "notDeepStrictEqual" : "notStrictEqual";
  }
  return isObject2 ? "deepStrictEqual" : "strictEqual";
};
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils)
    return utils;
  hasRequiredUtils = 1;
  /*!
   * Dependencies that are used for multiple exports are required here only once
   */
  var pathval$1 = pathval;
  /*!
   * test utility
   */
  utils.test = test$1;
  /*!
   * type utility
   */
  utils.type = typeDetectExports;
  /*!
   * expectTypes utility
   */
  utils.expectTypes = expectTypes;
  /*!
   * message utility
   */
  utils.getMessage = getMessage$1;
  /*!
   * actual utility
   */
  utils.getActual = getActual$1;
  /*!
   * Inspect util
   */
  utils.inspect = inspect_1;
  /*!
   * Object Display util
   */
  utils.objDisplay = objDisplay$1;
  /*!
   * Flag utility
   */
  utils.flag = flag$5;
  /*!
   * Flag transferring utility
   */
  utils.transferFlags = transferFlags;
  /*!
   * Deep equal utility
   */
  utils.eql = deepEqlExports;
  /*!
   * Deep path info
   */
  utils.getPathInfo = pathval$1.getPathInfo;
  /*!
   * Check if a property exists
   */
  utils.hasProperty = pathval$1.hasProperty;
  /*!
   * Function name
   */
  utils.getName = getFuncName_1;
  /*!
   * add Property
   */
  utils.addProperty = requireAddProperty();
  /*!
   * add Method
   */
  utils.addMethod = requireAddMethod();
  /*!
   * overwrite Property
   */
  utils.overwriteProperty = requireOverwriteProperty();
  /*!
   * overwrite Method
   */
  utils.overwriteMethod = requireOverwriteMethod();
  /*!
   * Add a chainable method
   */
  utils.addChainableMethod = requireAddChainableMethod();
  /*!
   * Overwrite chainable method
   */
  utils.overwriteChainableMethod = requireOverwriteChainableMethod();
  /*!
   * Compare by inspect method
   */
  utils.compareByInspect = compareByInspect;
  /*!
   * Get own enumerable property symbols method
   */
  utils.getOwnEnumerablePropertySymbols = getOwnEnumerablePropertySymbols$1;
  /*!
   * Get own enumerable properties method
   */
  utils.getOwnEnumerableProperties = getOwnEnumerableProperties;
  /*!
   * Checks error against a given set of criteria
   */
  utils.checkError = checkError;
  /*!
   * Proxify util
   */
  utils.proxify = proxify;
  /*!
   * addLengthGuard util
   */
  utils.addLengthGuard = addLengthGuard;
  /*!
   * isProxyEnabled helper
   */
  utils.isProxyEnabled = isProxyEnabled$1;
  /*!
   * isNaN method
   */
  utils.isNaN = _isNaN;
  /*!
   * getOperator method
   */
  utils.getOperator = getOperator;
  return utils;
}
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var config = config$5;
var assertion = function(_chai, util2) {
  /*!
   * Module dependencies.
   */
  var AssertionError2 = _chai.AssertionError, flag3 = util2.flag;
  /*!
   * Module export.
   */
  _chai.Assertion = Assertion;
  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
  function Assertion(obj, msg, ssfi, lockSsfi) {
    flag3(this, "ssfi", ssfi || Assertion);
    flag3(this, "lockSsfi", lockSsfi);
    flag3(this, "object", obj);
    flag3(this, "message", msg);
    return util2.proxify(this);
  }
  Object.defineProperty(Assertion, "includeStack", {
    get: function() {
      console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
      return config.includeStack;
    },
    set: function(value) {
      console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
      config.includeStack = value;
    }
  });
  Object.defineProperty(Assertion, "showDiff", {
    get: function() {
      console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
      return config.showDiff;
    },
    set: function(value) {
      console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
      config.showDiff = value;
    }
  });
  Assertion.addProperty = function(name2, fn2) {
    util2.addProperty(this.prototype, name2, fn2);
  };
  Assertion.addMethod = function(name2, fn2) {
    util2.addMethod(this.prototype, name2, fn2);
  };
  Assertion.addChainableMethod = function(name2, fn2, chainingBehavior) {
    util2.addChainableMethod(this.prototype, name2, fn2, chainingBehavior);
  };
  Assertion.overwriteProperty = function(name2, fn2) {
    util2.overwriteProperty(this.prototype, name2, fn2);
  };
  Assertion.overwriteMethod = function(name2, fn2) {
    util2.overwriteMethod(this.prototype, name2, fn2);
  };
  Assertion.overwriteChainableMethod = function(name2, fn2, chainingBehavior) {
    util2.overwriteChainableMethod(this.prototype, name2, fn2, chainingBehavior);
  };
  Assertion.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
    var ok = util2.test(this, arguments);
    if (false !== showDiff)
      showDiff = true;
    if (void 0 === expected && void 0 === _actual)
      showDiff = false;
    if (true !== config.showDiff)
      showDiff = false;
    if (!ok) {
      msg = util2.getMessage(this, arguments);
      var actual = util2.getActual(this, arguments);
      var assertionErrorObjectProperties = {
        actual,
        expected,
        showDiff
      };
      var operator = util2.getOperator(this, arguments);
      if (operator) {
        assertionErrorObjectProperties.operator = operator;
      }
      throw new AssertionError2(
        msg,
        assertionErrorObjectProperties,
        config.includeStack ? this.assert : flag3(this, "ssfi")
      );
    }
  };
  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
  Object.defineProperty(
    Assertion.prototype,
    "_obj",
    {
      get: function() {
        return flag3(this, "object");
      },
      set: function(val) {
        flag3(this, "object", val);
      }
    }
  );
};
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var assertions = function(chai2, _) {
  var Assertion = chai2.Assertion, AssertionError2 = chai2.AssertionError, flag3 = _.flag;
  [
    "to",
    "be",
    "been",
    "is",
    "and",
    "has",
    "have",
    "with",
    "that",
    "which",
    "at",
    "of",
    "same",
    "but",
    "does",
    "still",
    "also"
  ].forEach(function(chain) {
    Assertion.addProperty(chain);
  });
  Assertion.addProperty("not", function() {
    flag3(this, "negate", true);
  });
  Assertion.addProperty("deep", function() {
    flag3(this, "deep", true);
  });
  Assertion.addProperty("nested", function() {
    flag3(this, "nested", true);
  });
  Assertion.addProperty("own", function() {
    flag3(this, "own", true);
  });
  Assertion.addProperty("ordered", function() {
    flag3(this, "ordered", true);
  });
  Assertion.addProperty("any", function() {
    flag3(this, "any", true);
    flag3(this, "all", false);
  });
  Assertion.addProperty("all", function() {
    flag3(this, "all", true);
    flag3(this, "any", false);
  });
  function an(type2, msg) {
    if (msg)
      flag3(this, "message", msg);
    type2 = type2.toLowerCase();
    var obj = flag3(this, "object"), article = ~["a", "e", "i", "o", "u"].indexOf(type2.charAt(0)) ? "an " : "a ";
    this.assert(
      type2 === _.type(obj).toLowerCase(),
      "expected #{this} to be " + article + type2,
      "expected #{this} not to be " + article + type2
    );
  }
  Assertion.addChainableMethod("an", an);
  Assertion.addChainableMethod("a", an);
  function SameValueZero(a, b2) {
    return _.isNaN(a) && _.isNaN(b2) || a === b2;
  }
  function includeChainingBehavior() {
    flag3(this, "contains", true);
  }
  function include(val, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag3(this, "message"), negate = flag3(this, "negate"), ssfi = flag3(this, "ssfi"), isDeep = flag3(this, "deep"), descriptor = isDeep ? "deep " : "";
    flagMsg = flagMsg ? flagMsg + ": " : "";
    var included = false;
    switch (objType) {
      case "string":
        included = obj.indexOf(val) !== -1;
        break;
      case "weakset":
        if (isDeep) {
          throw new AssertionError2(
            flagMsg + "unable to use .deep.include with WeakSet",
            void 0,
            ssfi
          );
        }
        included = obj.has(val);
        break;
      case "map":
        var isEql = isDeep ? _.eql : SameValueZero;
        obj.forEach(function(item2) {
          included = included || isEql(item2, val);
        });
        break;
      case "set":
        if (isDeep) {
          obj.forEach(function(item2) {
            included = included || _.eql(item2, val);
          });
        } else {
          included = obj.has(val);
        }
        break;
      case "array":
        if (isDeep) {
          included = obj.some(function(item2) {
            return _.eql(item2, val);
          });
        } else {
          included = obj.indexOf(val) !== -1;
        }
        break;
      default:
        if (val !== Object(val)) {
          throw new AssertionError2(
            flagMsg + "the given combination of arguments (" + objType + " and " + _.type(val).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + _.type(val).toLowerCase(),
            void 0,
            ssfi
          );
        }
        var props = Object.keys(val), firstErr = null, numErrs = 0;
        props.forEach(function(prop) {
          var propAssertion = new Assertion(obj);
          _.transferFlags(this, propAssertion, true);
          flag3(propAssertion, "lockSsfi", true);
          if (!negate || props.length === 1) {
            propAssertion.property(prop, val[prop]);
            return;
          }
          try {
            propAssertion.property(prop, val[prop]);
          } catch (err) {
            if (!_.checkError.compatibleConstructor(err, AssertionError2)) {
              throw err;
            }
            if (firstErr === null)
              firstErr = err;
            numErrs++;
          }
        }, this);
        if (negate && props.length > 1 && numErrs === props.length) {
          throw firstErr;
        }
        return;
    }
    this.assert(
      included,
      "expected #{this} to " + descriptor + "include " + _.inspect(val),
      "expected #{this} to not " + descriptor + "include " + _.inspect(val)
    );
  }
  Assertion.addChainableMethod("include", include, includeChainingBehavior);
  Assertion.addChainableMethod("contain", include, includeChainingBehavior);
  Assertion.addChainableMethod("contains", include, includeChainingBehavior);
  Assertion.addChainableMethod("includes", include, includeChainingBehavior);
  Assertion.addProperty("ok", function() {
    this.assert(
      flag3(this, "object"),
      "expected #{this} to be truthy",
      "expected #{this} to be falsy"
    );
  });
  Assertion.addProperty("true", function() {
    this.assert(
      true === flag3(this, "object"),
      "expected #{this} to be true",
      "expected #{this} to be false",
      flag3(this, "negate") ? false : true
    );
  });
  Assertion.addProperty("false", function() {
    this.assert(
      false === flag3(this, "object"),
      "expected #{this} to be false",
      "expected #{this} to be true",
      flag3(this, "negate") ? true : false
    );
  });
  Assertion.addProperty("null", function() {
    this.assert(
      null === flag3(this, "object"),
      "expected #{this} to be null",
      "expected #{this} not to be null"
    );
  });
  Assertion.addProperty("undefined", function() {
    this.assert(
      void 0 === flag3(this, "object"),
      "expected #{this} to be undefined",
      "expected #{this} not to be undefined"
    );
  });
  Assertion.addProperty("NaN", function() {
    this.assert(
      _.isNaN(flag3(this, "object")),
      "expected #{this} to be NaN",
      "expected #{this} not to be NaN"
    );
  });
  function assertExist() {
    var val = flag3(this, "object");
    this.assert(
      val !== null && val !== void 0,
      "expected #{this} to exist",
      "expected #{this} to not exist"
    );
  }
  Assertion.addProperty("exist", assertExist);
  Assertion.addProperty("exists", assertExist);
  Assertion.addProperty("empty", function() {
    var val = flag3(this, "object"), ssfi = flag3(this, "ssfi"), flagMsg = flag3(this, "message"), itemsCount;
    flagMsg = flagMsg ? flagMsg + ": " : "";
    switch (_.type(val).toLowerCase()) {
      case "array":
      case "string":
        itemsCount = val.length;
        break;
      case "map":
      case "set":
        itemsCount = val.size;
        break;
      case "weakmap":
      case "weakset":
        throw new AssertionError2(
          flagMsg + ".empty was passed a weak collection",
          void 0,
          ssfi
        );
      case "function":
        var msg = flagMsg + ".empty was passed a function " + _.getName(val);
        throw new AssertionError2(msg.trim(), void 0, ssfi);
      default:
        if (val !== Object(val)) {
          throw new AssertionError2(
            flagMsg + ".empty was passed non-string primitive " + _.inspect(val),
            void 0,
            ssfi
          );
        }
        itemsCount = Object.keys(val).length;
    }
    this.assert(
      0 === itemsCount,
      "expected #{this} to be empty",
      "expected #{this} not to be empty"
    );
  });
  function checkArguments() {
    var obj = flag3(this, "object"), type2 = _.type(obj);
    this.assert(
      "Arguments" === type2,
      "expected #{this} to be arguments but got " + type2,
      "expected #{this} to not be arguments"
    );
  }
  Assertion.addProperty("arguments", checkArguments);
  Assertion.addProperty("Arguments", checkArguments);
  function assertEqual(val, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object");
    if (flag3(this, "deep")) {
      var prevLockSsfi = flag3(this, "lockSsfi");
      flag3(this, "lockSsfi", true);
      this.eql(val);
      flag3(this, "lockSsfi", prevLockSsfi);
    } else {
      this.assert(
        val === obj,
        "expected #{this} to equal #{exp}",
        "expected #{this} to not equal #{exp}",
        val,
        this._obj,
        true
      );
    }
  }
  Assertion.addMethod("equal", assertEqual);
  Assertion.addMethod("equals", assertEqual);
  Assertion.addMethod("eq", assertEqual);
  function assertEql(obj, msg) {
    if (msg)
      flag3(this, "message", msg);
    this.assert(
      _.eql(obj, flag3(this, "object")),
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      obj,
      this._obj,
      true
    );
  }
  Assertion.addMethod("eql", assertEql);
  Assertion.addMethod("eqls", assertEql);
  function assertAbove(n2, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), doLength = flag3(this, "doLength"), flagMsg = flag3(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag3(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
    if (doLength && objType !== "map" && objType !== "set") {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
    }
    if (!doLength && (objType === "date" && nType !== "date")) {
      errorMessage = msgPrefix + "the argument to above must be a date";
    } else if (nType !== "number" && (doLength || objType === "number")) {
      errorMessage = msgPrefix + "the argument to above must be a number";
    } else if (!doLength && (objType !== "date" && objType !== "number")) {
      var printObj = objType === "string" ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
    } else {
      shouldThrow = false;
    }
    if (shouldThrow) {
      throw new AssertionError2(errorMessage, void 0, ssfi);
    }
    if (doLength) {
      var descriptor = "length", itemsCount;
      if (objType === "map" || objType === "set") {
        descriptor = "size";
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
        itemsCount > n2,
        "expected #{this} to have a " + descriptor + " above #{exp} but got #{act}",
        "expected #{this} to not have a " + descriptor + " above #{exp}",
        n2,
        itemsCount
      );
    } else {
      this.assert(
        obj > n2,
        "expected #{this} to be above #{exp}",
        "expected #{this} to be at most #{exp}",
        n2
      );
    }
  }
  Assertion.addMethod("above", assertAbove);
  Assertion.addMethod("gt", assertAbove);
  Assertion.addMethod("greaterThan", assertAbove);
  function assertLeast(n2, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), doLength = flag3(this, "doLength"), flagMsg = flag3(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag3(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
    if (doLength && objType !== "map" && objType !== "set") {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
    }
    if (!doLength && (objType === "date" && nType !== "date")) {
      errorMessage = msgPrefix + "the argument to least must be a date";
    } else if (nType !== "number" && (doLength || objType === "number")) {
      errorMessage = msgPrefix + "the argument to least must be a number";
    } else if (!doLength && (objType !== "date" && objType !== "number")) {
      var printObj = objType === "string" ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
    } else {
      shouldThrow = false;
    }
    if (shouldThrow) {
      throw new AssertionError2(errorMessage, void 0, ssfi);
    }
    if (doLength) {
      var descriptor = "length", itemsCount;
      if (objType === "map" || objType === "set") {
        descriptor = "size";
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
        itemsCount >= n2,
        "expected #{this} to have a " + descriptor + " at least #{exp} but got #{act}",
        "expected #{this} to have a " + descriptor + " below #{exp}",
        n2,
        itemsCount
      );
    } else {
      this.assert(
        obj >= n2,
        "expected #{this} to be at least #{exp}",
        "expected #{this} to be below #{exp}",
        n2
      );
    }
  }
  Assertion.addMethod("least", assertLeast);
  Assertion.addMethod("gte", assertLeast);
  Assertion.addMethod("greaterThanOrEqual", assertLeast);
  function assertBelow(n2, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), doLength = flag3(this, "doLength"), flagMsg = flag3(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag3(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
    if (doLength && objType !== "map" && objType !== "set") {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
    }
    if (!doLength && (objType === "date" && nType !== "date")) {
      errorMessage = msgPrefix + "the argument to below must be a date";
    } else if (nType !== "number" && (doLength || objType === "number")) {
      errorMessage = msgPrefix + "the argument to below must be a number";
    } else if (!doLength && (objType !== "date" && objType !== "number")) {
      var printObj = objType === "string" ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
    } else {
      shouldThrow = false;
    }
    if (shouldThrow) {
      throw new AssertionError2(errorMessage, void 0, ssfi);
    }
    if (doLength) {
      var descriptor = "length", itemsCount;
      if (objType === "map" || objType === "set") {
        descriptor = "size";
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
        itemsCount < n2,
        "expected #{this} to have a " + descriptor + " below #{exp} but got #{act}",
        "expected #{this} to not have a " + descriptor + " below #{exp}",
        n2,
        itemsCount
      );
    } else {
      this.assert(
        obj < n2,
        "expected #{this} to be below #{exp}",
        "expected #{this} to be at least #{exp}",
        n2
      );
    }
  }
  Assertion.addMethod("below", assertBelow);
  Assertion.addMethod("lt", assertBelow);
  Assertion.addMethod("lessThan", assertBelow);
  function assertMost(n2, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), doLength = flag3(this, "doLength"), flagMsg = flag3(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag3(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
    if (doLength && objType !== "map" && objType !== "set") {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
    }
    if (!doLength && (objType === "date" && nType !== "date")) {
      errorMessage = msgPrefix + "the argument to most must be a date";
    } else if (nType !== "number" && (doLength || objType === "number")) {
      errorMessage = msgPrefix + "the argument to most must be a number";
    } else if (!doLength && (objType !== "date" && objType !== "number")) {
      var printObj = objType === "string" ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
    } else {
      shouldThrow = false;
    }
    if (shouldThrow) {
      throw new AssertionError2(errorMessage, void 0, ssfi);
    }
    if (doLength) {
      var descriptor = "length", itemsCount;
      if (objType === "map" || objType === "set") {
        descriptor = "size";
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
        itemsCount <= n2,
        "expected #{this} to have a " + descriptor + " at most #{exp} but got #{act}",
        "expected #{this} to have a " + descriptor + " above #{exp}",
        n2,
        itemsCount
      );
    } else {
      this.assert(
        obj <= n2,
        "expected #{this} to be at most #{exp}",
        "expected #{this} to be above #{exp}",
        n2
      );
    }
  }
  Assertion.addMethod("most", assertMost);
  Assertion.addMethod("lte", assertMost);
  Assertion.addMethod("lessThanOrEqual", assertMost);
  Assertion.addMethod("within", function(start, finish, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), doLength = flag3(this, "doLength"), flagMsg = flag3(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag3(this, "ssfi"), objType = _.type(obj).toLowerCase(), startType = _.type(start).toLowerCase(), finishType = _.type(finish).toLowerCase(), errorMessage, shouldThrow = true, range2 = startType === "date" && finishType === "date" ? start.toISOString() + ".." + finish.toISOString() : start + ".." + finish;
    if (doLength && objType !== "map" && objType !== "set") {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
    }
    if (!doLength && (objType === "date" && (startType !== "date" || finishType !== "date"))) {
      errorMessage = msgPrefix + "the arguments to within must be dates";
    } else if ((startType !== "number" || finishType !== "number") && (doLength || objType === "number")) {
      errorMessage = msgPrefix + "the arguments to within must be numbers";
    } else if (!doLength && (objType !== "date" && objType !== "number")) {
      var printObj = objType === "string" ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
    } else {
      shouldThrow = false;
    }
    if (shouldThrow) {
      throw new AssertionError2(errorMessage, void 0, ssfi);
    }
    if (doLength) {
      var descriptor = "length", itemsCount;
      if (objType === "map" || objType === "set") {
        descriptor = "size";
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
        itemsCount >= start && itemsCount <= finish,
        "expected #{this} to have a " + descriptor + " within " + range2,
        "expected #{this} to not have a " + descriptor + " within " + range2
      );
    } else {
      this.assert(
        obj >= start && obj <= finish,
        "expected #{this} to be within " + range2,
        "expected #{this} to not be within " + range2
      );
    }
  });
  function assertInstanceOf(constructor, msg) {
    if (msg)
      flag3(this, "message", msg);
    var target = flag3(this, "object");
    var ssfi = flag3(this, "ssfi");
    var flagMsg = flag3(this, "message");
    try {
      var isInstanceOf = target instanceof constructor;
    } catch (err) {
      if (err instanceof TypeError) {
        flagMsg = flagMsg ? flagMsg + ": " : "";
        throw new AssertionError2(
          flagMsg + "The instanceof assertion needs a constructor but " + _.type(constructor) + " was given.",
          void 0,
          ssfi
        );
      }
      throw err;
    }
    var name2 = _.getName(constructor);
    if (name2 === null) {
      name2 = "an unnamed constructor";
    }
    this.assert(
      isInstanceOf,
      "expected #{this} to be an instance of " + name2,
      "expected #{this} to not be an instance of " + name2
    );
  }
  Assertion.addMethod("instanceof", assertInstanceOf);
  Assertion.addMethod("instanceOf", assertInstanceOf);
  function assertProperty(name2, val, msg) {
    if (msg)
      flag3(this, "message", msg);
    var isNested = flag3(this, "nested"), isOwn = flag3(this, "own"), flagMsg = flag3(this, "message"), obj = flag3(this, "object"), ssfi = flag3(this, "ssfi"), nameType = typeof name2;
    flagMsg = flagMsg ? flagMsg + ": " : "";
    if (isNested) {
      if (nameType !== "string") {
        throw new AssertionError2(
          flagMsg + "the argument to property must be a string when using nested syntax",
          void 0,
          ssfi
        );
      }
    } else {
      if (nameType !== "string" && nameType !== "number" && nameType !== "symbol") {
        throw new AssertionError2(
          flagMsg + "the argument to property must be a string, number, or symbol",
          void 0,
          ssfi
        );
      }
    }
    if (isNested && isOwn) {
      throw new AssertionError2(
        flagMsg + 'The "nested" and "own" flags cannot be combined.',
        void 0,
        ssfi
      );
    }
    if (obj === null || obj === void 0) {
      throw new AssertionError2(
        flagMsg + "Target cannot be null or undefined.",
        void 0,
        ssfi
      );
    }
    var isDeep = flag3(this, "deep"), negate = flag3(this, "negate"), pathInfo = isNested ? _.getPathInfo(obj, name2) : null, value = isNested ? pathInfo.value : obj[name2];
    var descriptor = "";
    if (isDeep)
      descriptor += "deep ";
    if (isOwn)
      descriptor += "own ";
    if (isNested)
      descriptor += "nested ";
    descriptor += "property ";
    var hasProperty2;
    if (isOwn)
      hasProperty2 = Object.prototype.hasOwnProperty.call(obj, name2);
    else if (isNested)
      hasProperty2 = pathInfo.exists;
    else
      hasProperty2 = _.hasProperty(obj, name2);
    if (!negate || arguments.length === 1) {
      this.assert(
        hasProperty2,
        "expected #{this} to have " + descriptor + _.inspect(name2),
        "expected #{this} to not have " + descriptor + _.inspect(name2)
      );
    }
    if (arguments.length > 1) {
      this.assert(
        hasProperty2 && (isDeep ? _.eql(val, value) : val === value),
        "expected #{this} to have " + descriptor + _.inspect(name2) + " of #{exp}, but got #{act}",
        "expected #{this} to not have " + descriptor + _.inspect(name2) + " of #{act}",
        val,
        value
      );
    }
    flag3(this, "object", value);
  }
  Assertion.addMethod("property", assertProperty);
  function assertOwnProperty(name2, value, msg) {
    flag3(this, "own", true);
    assertProperty.apply(this, arguments);
  }
  Assertion.addMethod("ownProperty", assertOwnProperty);
  Assertion.addMethod("haveOwnProperty", assertOwnProperty);
  function assertOwnPropertyDescriptor(name2, descriptor, msg) {
    if (typeof descriptor === "string") {
      msg = descriptor;
      descriptor = null;
    }
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object");
    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name2);
    if (actualDescriptor && descriptor) {
      this.assert(
        _.eql(descriptor, actualDescriptor),
        "expected the own property descriptor for " + _.inspect(name2) + " on #{this} to match " + _.inspect(descriptor) + ", got " + _.inspect(actualDescriptor),
        "expected the own property descriptor for " + _.inspect(name2) + " on #{this} to not match " + _.inspect(descriptor),
        descriptor,
        actualDescriptor,
        true
      );
    } else {
      this.assert(
        actualDescriptor,
        "expected #{this} to have an own property descriptor for " + _.inspect(name2),
        "expected #{this} to not have an own property descriptor for " + _.inspect(name2)
      );
    }
    flag3(this, "object", actualDescriptor);
  }
  Assertion.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
  Assertion.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
  function assertLengthChain() {
    flag3(this, "doLength", true);
  }
  function assertLength(n2, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag3(this, "message"), ssfi = flag3(this, "ssfi"), descriptor = "length", itemsCount;
    switch (objType) {
      case "map":
      case "set":
        descriptor = "size";
        itemsCount = obj.size;
        break;
      default:
        new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
        itemsCount = obj.length;
    }
    this.assert(
      itemsCount == n2,
      "expected #{this} to have a " + descriptor + " of #{exp} but got #{act}",
      "expected #{this} to not have a " + descriptor + " of #{act}",
      n2,
      itemsCount
    );
  }
  Assertion.addChainableMethod("length", assertLength, assertLengthChain);
  Assertion.addChainableMethod("lengthOf", assertLength, assertLengthChain);
  function assertMatch(re2, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object");
    this.assert(
      re2.exec(obj),
      "expected #{this} to match " + re2,
      "expected #{this} not to match " + re2
    );
  }
  Assertion.addMethod("match", assertMatch);
  Assertion.addMethod("matches", assertMatch);
  Assertion.addMethod("string", function(str, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), flagMsg = flag3(this, "message"), ssfi = flag3(this, "ssfi");
    new Assertion(obj, flagMsg, ssfi, true).is.a("string");
    this.assert(
      ~obj.indexOf(str),
      "expected #{this} to contain " + _.inspect(str),
      "expected #{this} to not contain " + _.inspect(str)
    );
  });
  function assertKeys(keys2) {
    var obj = flag3(this, "object"), objType = _.type(obj), keysType = _.type(keys2), ssfi = flag3(this, "ssfi"), isDeep = flag3(this, "deep"), str, deepStr = "", actual, ok = true, flagMsg = flag3(this, "message");
    flagMsg = flagMsg ? flagMsg + ": " : "";
    var mixedArgsMsg = flagMsg + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
    if (objType === "Map" || objType === "Set") {
      deepStr = isDeep ? "deeply " : "";
      actual = [];
      obj.forEach(function(val, key) {
        actual.push(key);
      });
      if (keysType !== "Array") {
        keys2 = Array.prototype.slice.call(arguments);
      }
    } else {
      actual = _.getOwnEnumerableProperties(obj);
      switch (keysType) {
        case "Array":
          if (arguments.length > 1) {
            throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
          }
          break;
        case "Object":
          if (arguments.length > 1) {
            throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
          }
          keys2 = Object.keys(keys2);
          break;
        default:
          keys2 = Array.prototype.slice.call(arguments);
      }
      keys2 = keys2.map(function(val) {
        return typeof val === "symbol" ? val : String(val);
      });
    }
    if (!keys2.length) {
      throw new AssertionError2(flagMsg + "keys required", void 0, ssfi);
    }
    var len = keys2.length, any = flag3(this, "any"), all = flag3(this, "all"), expected = keys2;
    if (!any && !all) {
      all = true;
    }
    if (any) {
      ok = expected.some(function(expectedKey) {
        return actual.some(function(actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });
    }
    if (all) {
      ok = expected.every(function(expectedKey) {
        return actual.some(function(actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });
      if (!flag3(this, "contains")) {
        ok = ok && keys2.length == actual.length;
      }
    }
    if (len > 1) {
      keys2 = keys2.map(function(key) {
        return _.inspect(key);
      });
      var last = keys2.pop();
      if (all) {
        str = keys2.join(", ") + ", and " + last;
      }
      if (any) {
        str = keys2.join(", ") + ", or " + last;
      }
    } else {
      str = _.inspect(keys2[0]);
    }
    str = (len > 1 ? "keys " : "key ") + str;
    str = (flag3(this, "contains") ? "contain " : "have ") + str;
    this.assert(
      ok,
      "expected #{this} to " + deepStr + str,
      "expected #{this} to not " + deepStr + str,
      expected.slice(0).sort(_.compareByInspect),
      actual.sort(_.compareByInspect),
      true
    );
  }
  Assertion.addMethod("keys", assertKeys);
  Assertion.addMethod("key", assertKeys);
  function assertThrows(errorLike, errMsgMatcher, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), ssfi = flag3(this, "ssfi"), flagMsg = flag3(this, "message"), negate = flag3(this, "negate") || false;
    new Assertion(obj, flagMsg, ssfi, true).is.a("function");
    if (errorLike instanceof RegExp || typeof errorLike === "string") {
      errMsgMatcher = errorLike;
      errorLike = null;
    }
    var caughtErr;
    try {
      obj();
    } catch (err) {
      caughtErr = err;
    }
    var everyArgIsUndefined = errorLike === void 0 && errMsgMatcher === void 0;
    var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
    var errorLikeFail = false;
    var errMsgMatcherFail = false;
    if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
      var errorLikeString = "an error";
      if (errorLike instanceof Error) {
        errorLikeString = "#{exp}";
      } else if (errorLike) {
        errorLikeString = _.checkError.getConstructorName(errorLike);
      }
      this.assert(
        caughtErr,
        "expected #{this} to throw " + errorLikeString,
        "expected #{this} to not throw an error but #{act} was thrown",
        errorLike && errorLike.toString(),
        caughtErr instanceof Error ? caughtErr.toString() : typeof caughtErr === "string" ? caughtErr : caughtErr && _.checkError.getConstructorName(caughtErr)
      );
    }
    if (errorLike && caughtErr) {
      if (errorLike instanceof Error) {
        var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);
        if (isCompatibleInstance === negate) {
          if (everyArgIsDefined && negate) {
            errorLikeFail = true;
          } else {
            this.assert(
              negate,
              "expected #{this} to throw #{exp} but #{act} was thrown",
              "expected #{this} to not throw #{exp}" + (caughtErr && !negate ? " but #{act} was thrown" : ""),
              errorLike.toString(),
              caughtErr.toString()
            );
          }
        }
      }
      var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
      if (isCompatibleConstructor === negate) {
        if (everyArgIsDefined && negate) {
          errorLikeFail = true;
        } else {
          this.assert(
            negate,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
            errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
            caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
      }
    }
    if (caughtErr && errMsgMatcher !== void 0 && errMsgMatcher !== null) {
      var placeholder = "including";
      if (errMsgMatcher instanceof RegExp) {
        placeholder = "matching";
      }
      var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
      if (isCompatibleMessage === negate) {
        if (everyArgIsDefined && negate) {
          errMsgMatcherFail = true;
        } else {
          this.assert(
            negate,
            "expected #{this} to throw error " + placeholder + " #{exp} but got #{act}",
            "expected #{this} to throw error not " + placeholder + " #{exp}",
            errMsgMatcher,
            _.checkError.getMessage(caughtErr)
          );
        }
      }
    }
    if (errorLikeFail && errMsgMatcherFail) {
      this.assert(
        negate,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
        errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
        caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
      );
    }
    flag3(this, "object", caughtErr);
  }
  Assertion.addMethod("throw", assertThrows);
  Assertion.addMethod("throws", assertThrows);
  Assertion.addMethod("Throw", assertThrows);
  function respondTo(method, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), itself = flag3(this, "itself"), context = "function" === typeof obj && !itself ? obj.prototype[method] : obj[method];
    this.assert(
      "function" === typeof context,
      "expected #{this} to respond to " + _.inspect(method),
      "expected #{this} to not respond to " + _.inspect(method)
    );
  }
  Assertion.addMethod("respondTo", respondTo);
  Assertion.addMethod("respondsTo", respondTo);
  Assertion.addProperty("itself", function() {
    flag3(this, "itself", true);
  });
  function satisfy(matcher, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object");
    var result = matcher(obj);
    this.assert(
      result,
      "expected #{this} to satisfy " + _.objDisplay(matcher),
      "expected #{this} to not satisfy" + _.objDisplay(matcher),
      flag3(this, "negate") ? false : true,
      result
    );
  }
  Assertion.addMethod("satisfy", satisfy);
  Assertion.addMethod("satisfies", satisfy);
  function closeTo(expected, delta, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), flagMsg = flag3(this, "message"), ssfi = flag3(this, "ssfi");
    new Assertion(obj, flagMsg, ssfi, true).is.a("number");
    if (typeof expected !== "number" || typeof delta !== "number") {
      flagMsg = flagMsg ? flagMsg + ": " : "";
      var deltaMessage = delta === void 0 ? ", and a delta is required" : "";
      throw new AssertionError2(
        flagMsg + "the arguments to closeTo or approximately must be numbers" + deltaMessage,
        void 0,
        ssfi
      );
    }
    this.assert(
      Math.abs(obj - expected) <= delta,
      "expected #{this} to be close to " + expected + " +/- " + delta,
      "expected #{this} not to be close to " + expected + " +/- " + delta
    );
  }
  Assertion.addMethod("closeTo", closeTo);
  Assertion.addMethod("approximately", closeTo);
  function isSubsetOf(subset2, superset, cmp2, contains, ordered) {
    if (!contains) {
      if (subset2.length !== superset.length)
        return false;
      superset = superset.slice();
    }
    return subset2.every(function(elem, idx) {
      if (ordered)
        return cmp2 ? cmp2(elem, superset[idx]) : elem === superset[idx];
      if (!cmp2) {
        var matchIdx = superset.indexOf(elem);
        if (matchIdx === -1)
          return false;
        if (!contains)
          superset.splice(matchIdx, 1);
        return true;
      }
      return superset.some(function(elem2, matchIdx2) {
        if (!cmp2(elem, elem2))
          return false;
        if (!contains)
          superset.splice(matchIdx2, 1);
        return true;
      });
    });
  }
  Assertion.addMethod("members", function(subset2, msg) {
    if (msg)
      flag3(this, "message", msg);
    var obj = flag3(this, "object"), flagMsg = flag3(this, "message"), ssfi = flag3(this, "ssfi");
    new Assertion(obj, flagMsg, ssfi, true).to.be.an("array");
    new Assertion(subset2, flagMsg, ssfi, true).to.be.an("array");
    var contains = flag3(this, "contains");
    var ordered = flag3(this, "ordered");
    var subject, failMsg, failNegateMsg;
    if (contains) {
      subject = ordered ? "an ordered superset" : "a superset";
      failMsg = "expected #{this} to be " + subject + " of #{exp}";
      failNegateMsg = "expected #{this} to not be " + subject + " of #{exp}";
    } else {
      subject = ordered ? "ordered members" : "members";
      failMsg = "expected #{this} to have the same " + subject + " as #{exp}";
      failNegateMsg = "expected #{this} to not have the same " + subject + " as #{exp}";
    }
    var cmp2 = flag3(this, "deep") ? _.eql : void 0;
    this.assert(
      isSubsetOf(subset2, obj, cmp2, contains, ordered),
      failMsg,
      failNegateMsg,
      subset2,
      obj,
      true
    );
  });
  function oneOf(list, msg) {
    if (msg)
      flag3(this, "message", msg);
    var expected = flag3(this, "object"), flagMsg = flag3(this, "message"), ssfi = flag3(this, "ssfi"), contains = flag3(this, "contains"), isDeep = flag3(this, "deep");
    new Assertion(list, flagMsg, ssfi, true).to.be.an("array");
    if (contains) {
      this.assert(
        list.some(function(possibility) {
          return expected.indexOf(possibility) > -1;
        }),
        "expected #{this} to contain one of #{exp}",
        "expected #{this} to not contain one of #{exp}",
        list,
        expected
      );
    } else {
      if (isDeep) {
        this.assert(
          list.some(function(possibility) {
            return _.eql(expected, possibility);
          }),
          "expected #{this} to deeply equal one of #{exp}",
          "expected #{this} to deeply equal one of #{exp}",
          list,
          expected
        );
      } else {
        this.assert(
          list.indexOf(expected) > -1,
          "expected #{this} to be one of #{exp}",
          "expected #{this} to not be one of #{exp}",
          list,
          expected
        );
      }
    }
  }
  Assertion.addMethod("oneOf", oneOf);
  function assertChanges(subject, prop, msg) {
    if (msg)
      flag3(this, "message", msg);
    var fn2 = flag3(this, "object"), flagMsg = flag3(this, "message"), ssfi = flag3(this, "ssfi");
    new Assertion(fn2, flagMsg, ssfi, true).is.a("function");
    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a("function");
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }
    fn2();
    var final = prop === void 0 || prop === null ? subject() : subject[prop];
    var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
    flag3(this, "deltaMsgObj", msgObj);
    flag3(this, "initialDeltaValue", initial);
    flag3(this, "finalDeltaValue", final);
    flag3(this, "deltaBehavior", "change");
    flag3(this, "realDelta", final !== initial);
    this.assert(
      initial !== final,
      "expected " + msgObj + " to change",
      "expected " + msgObj + " to not change"
    );
  }
  Assertion.addMethod("change", assertChanges);
  Assertion.addMethod("changes", assertChanges);
  function assertIncreases(subject, prop, msg) {
    if (msg)
      flag3(this, "message", msg);
    var fn2 = flag3(this, "object"), flagMsg = flag3(this, "message"), ssfi = flag3(this, "ssfi");
    new Assertion(fn2, flagMsg, ssfi, true).is.a("function");
    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a("function");
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }
    new Assertion(initial, flagMsg, ssfi, true).is.a("number");
    fn2();
    var final = prop === void 0 || prop === null ? subject() : subject[prop];
    var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
    flag3(this, "deltaMsgObj", msgObj);
    flag3(this, "initialDeltaValue", initial);
    flag3(this, "finalDeltaValue", final);
    flag3(this, "deltaBehavior", "increase");
    flag3(this, "realDelta", final - initial);
    this.assert(
      final - initial > 0,
      "expected " + msgObj + " to increase",
      "expected " + msgObj + " to not increase"
    );
  }
  Assertion.addMethod("increase", assertIncreases);
  Assertion.addMethod("increases", assertIncreases);
  function assertDecreases(subject, prop, msg) {
    if (msg)
      flag3(this, "message", msg);
    var fn2 = flag3(this, "object"), flagMsg = flag3(this, "message"), ssfi = flag3(this, "ssfi");
    new Assertion(fn2, flagMsg, ssfi, true).is.a("function");
    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a("function");
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }
    new Assertion(initial, flagMsg, ssfi, true).is.a("number");
    fn2();
    var final = prop === void 0 || prop === null ? subject() : subject[prop];
    var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
    flag3(this, "deltaMsgObj", msgObj);
    flag3(this, "initialDeltaValue", initial);
    flag3(this, "finalDeltaValue", final);
    flag3(this, "deltaBehavior", "decrease");
    flag3(this, "realDelta", initial - final);
    this.assert(
      final - initial < 0,
      "expected " + msgObj + " to decrease",
      "expected " + msgObj + " to not decrease"
    );
  }
  Assertion.addMethod("decrease", assertDecreases);
  Assertion.addMethod("decreases", assertDecreases);
  function assertDelta(delta, msg) {
    if (msg)
      flag3(this, "message", msg);
    var msgObj = flag3(this, "deltaMsgObj");
    var initial = flag3(this, "initialDeltaValue");
    var final = flag3(this, "finalDeltaValue");
    var behavior = flag3(this, "deltaBehavior");
    var realDelta = flag3(this, "realDelta");
    var expression;
    if (behavior === "change") {
      expression = Math.abs(final - initial) === Math.abs(delta);
    } else {
      expression = realDelta === Math.abs(delta);
    }
    this.assert(
      expression,
      "expected " + msgObj + " to " + behavior + " by " + delta,
      "expected " + msgObj + " to not " + behavior + " by " + delta
    );
  }
  Assertion.addMethod("by", assertDelta);
  Assertion.addProperty("extensible", function() {
    var obj = flag3(this, "object");
    var isExtensible = obj === Object(obj) && Object.isExtensible(obj);
    this.assert(
      isExtensible,
      "expected #{this} to be extensible",
      "expected #{this} to not be extensible"
    );
  });
  Assertion.addProperty("sealed", function() {
    var obj = flag3(this, "object");
    var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;
    this.assert(
      isSealed,
      "expected #{this} to be sealed",
      "expected #{this} to not be sealed"
    );
  });
  Assertion.addProperty("frozen", function() {
    var obj = flag3(this, "object");
    var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;
    this.assert(
      isFrozen,
      "expected #{this} to be frozen",
      "expected #{this} to not be frozen"
    );
  });
  Assertion.addProperty("finite", function(msg) {
    var obj = flag3(this, "object");
    this.assert(
      typeof obj === "number" && isFinite(obj),
      "expected #{this} to be a finite number",
      "expected #{this} to not be a finite number"
    );
  });
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var expect$1 = function(chai2, util2) {
  chai2.expect = function(val, message) {
    return new chai2.Assertion(val, message);
  };
  chai2.expect.fail = function(actual, expected, message, operator) {
    if (arguments.length < 2) {
      message = actual;
      actual = void 0;
    }
    message = message || "expect.fail()";
    throw new chai2.AssertionError(message, {
      actual,
      expected,
      operator
    }, chai2.expect.fail);
  };
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var should = function(chai2, util2) {
  var Assertion = chai2.Assertion;
  function loadShould() {
    function shouldGetter() {
      if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === "function" && this instanceof Symbol || typeof BigInt === "function" && this instanceof BigInt) {
        return new Assertion(this.valueOf(), null, shouldGetter);
      }
      return new Assertion(this, null, shouldGetter);
    }
    function shouldSetter(value) {
      Object.defineProperty(this, "should", {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    Object.defineProperty(Object.prototype, "should", {
      set: shouldSetter,
      get: shouldGetter,
      configurable: true
    });
    var should2 = {};
    should2.fail = function(actual, expected, message, operator) {
      if (arguments.length < 2) {
        message = actual;
        actual = void 0;
      }
      message = message || "should.fail()";
      throw new chai2.AssertionError(message, {
        actual,
        expected,
        operator
      }, should2.fail);
    };
    should2.equal = function(val1, val2, msg) {
      new Assertion(val1, msg).to.equal(val2);
    };
    should2.Throw = function(fn2, errt, errs, msg) {
      new Assertion(fn2, msg).to.Throw(errt, errs);
    };
    should2.exist = function(val, msg) {
      new Assertion(val, msg).to.exist;
    };
    should2.not = {};
    should2.not.equal = function(val1, val2, msg) {
      new Assertion(val1, msg).to.not.equal(val2);
    };
    should2.not.Throw = function(fn2, errt, errs, msg) {
      new Assertion(fn2, msg).to.not.Throw(errt, errs);
    };
    should2.not.exist = function(val, msg) {
      new Assertion(val, msg).to.not.exist;
    };
    should2["throw"] = should2["Throw"];
    should2.not["throw"] = should2.not["Throw"];
    return should2;
  }
  chai2.should = loadShould;
  chai2.Should = loadShould;
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var assert = function(chai2, util2) {
  /*!
   * Chai dependencies.
   */
  var Assertion = chai2.Assertion, flag3 = util2.flag;
  /*!
   * Module export.
   */
  var assert2 = chai2.assert = function(express, errmsg) {
    var test3 = new Assertion(null, null, chai2.assert, true);
    test3.assert(
      express,
      errmsg,
      "[ negation message unavailable ]"
    );
  };
  assert2.fail = function(actual, expected, message, operator) {
    if (arguments.length < 2) {
      message = actual;
      actual = void 0;
    }
    message = message || "assert.fail()";
    throw new chai2.AssertionError(message, {
      actual,
      expected,
      operator
    }, assert2.fail);
  };
  assert2.isOk = function(val, msg) {
    new Assertion(val, msg, assert2.isOk, true).is.ok;
  };
  assert2.isNotOk = function(val, msg) {
    new Assertion(val, msg, assert2.isNotOk, true).is.not.ok;
  };
  assert2.equal = function(act, exp, msg) {
    var test3 = new Assertion(act, msg, assert2.equal, true);
    test3.assert(
      exp == flag3(test3, "object"),
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{act}",
      exp,
      act,
      true
    );
  };
  assert2.notEqual = function(act, exp, msg) {
    var test3 = new Assertion(act, msg, assert2.notEqual, true);
    test3.assert(
      exp != flag3(test3, "object"),
      "expected #{this} to not equal #{exp}",
      "expected #{this} to equal #{act}",
      exp,
      act,
      true
    );
  };
  assert2.strictEqual = function(act, exp, msg) {
    new Assertion(act, msg, assert2.strictEqual, true).to.equal(exp);
  };
  assert2.notStrictEqual = function(act, exp, msg) {
    new Assertion(act, msg, assert2.notStrictEqual, true).to.not.equal(exp);
  };
  assert2.deepEqual = assert2.deepStrictEqual = function(act, exp, msg) {
    new Assertion(act, msg, assert2.deepEqual, true).to.eql(exp);
  };
  assert2.notDeepEqual = function(act, exp, msg) {
    new Assertion(act, msg, assert2.notDeepEqual, true).to.not.eql(exp);
  };
  assert2.isAbove = function(val, abv, msg) {
    new Assertion(val, msg, assert2.isAbove, true).to.be.above(abv);
  };
  assert2.isAtLeast = function(val, atlst, msg) {
    new Assertion(val, msg, assert2.isAtLeast, true).to.be.least(atlst);
  };
  assert2.isBelow = function(val, blw, msg) {
    new Assertion(val, msg, assert2.isBelow, true).to.be.below(blw);
  };
  assert2.isAtMost = function(val, atmst, msg) {
    new Assertion(val, msg, assert2.isAtMost, true).to.be.most(atmst);
  };
  assert2.isTrue = function(val, msg) {
    new Assertion(val, msg, assert2.isTrue, true).is["true"];
  };
  assert2.isNotTrue = function(val, msg) {
    new Assertion(val, msg, assert2.isNotTrue, true).to.not.equal(true);
  };
  assert2.isFalse = function(val, msg) {
    new Assertion(val, msg, assert2.isFalse, true).is["false"];
  };
  assert2.isNotFalse = function(val, msg) {
    new Assertion(val, msg, assert2.isNotFalse, true).to.not.equal(false);
  };
  assert2.isNull = function(val, msg) {
    new Assertion(val, msg, assert2.isNull, true).to.equal(null);
  };
  assert2.isNotNull = function(val, msg) {
    new Assertion(val, msg, assert2.isNotNull, true).to.not.equal(null);
  };
  assert2.isNaN = function(val, msg) {
    new Assertion(val, msg, assert2.isNaN, true).to.be.NaN;
  };
  assert2.isNotNaN = function(val, msg) {
    new Assertion(val, msg, assert2.isNotNaN, true).not.to.be.NaN;
  };
  assert2.exists = function(val, msg) {
    new Assertion(val, msg, assert2.exists, true).to.exist;
  };
  assert2.notExists = function(val, msg) {
    new Assertion(val, msg, assert2.notExists, true).to.not.exist;
  };
  assert2.isUndefined = function(val, msg) {
    new Assertion(val, msg, assert2.isUndefined, true).to.equal(void 0);
  };
  assert2.isDefined = function(val, msg) {
    new Assertion(val, msg, assert2.isDefined, true).to.not.equal(void 0);
  };
  assert2.isFunction = function(val, msg) {
    new Assertion(val, msg, assert2.isFunction, true).to.be.a("function");
  };
  assert2.isNotFunction = function(val, msg) {
    new Assertion(val, msg, assert2.isNotFunction, true).to.not.be.a("function");
  };
  assert2.isObject = function(val, msg) {
    new Assertion(val, msg, assert2.isObject, true).to.be.a("object");
  };
  assert2.isNotObject = function(val, msg) {
    new Assertion(val, msg, assert2.isNotObject, true).to.not.be.a("object");
  };
  assert2.isArray = function(val, msg) {
    new Assertion(val, msg, assert2.isArray, true).to.be.an("array");
  };
  assert2.isNotArray = function(val, msg) {
    new Assertion(val, msg, assert2.isNotArray, true).to.not.be.an("array");
  };
  assert2.isString = function(val, msg) {
    new Assertion(val, msg, assert2.isString, true).to.be.a("string");
  };
  assert2.isNotString = function(val, msg) {
    new Assertion(val, msg, assert2.isNotString, true).to.not.be.a("string");
  };
  assert2.isNumber = function(val, msg) {
    new Assertion(val, msg, assert2.isNumber, true).to.be.a("number");
  };
  assert2.isNotNumber = function(val, msg) {
    new Assertion(val, msg, assert2.isNotNumber, true).to.not.be.a("number");
  };
  assert2.isFinite = function(val, msg) {
    new Assertion(val, msg, assert2.isFinite, true).to.be.finite;
  };
  assert2.isBoolean = function(val, msg) {
    new Assertion(val, msg, assert2.isBoolean, true).to.be.a("boolean");
  };
  assert2.isNotBoolean = function(val, msg) {
    new Assertion(val, msg, assert2.isNotBoolean, true).to.not.be.a("boolean");
  };
  assert2.typeOf = function(val, type2, msg) {
    new Assertion(val, msg, assert2.typeOf, true).to.be.a(type2);
  };
  assert2.notTypeOf = function(val, type2, msg) {
    new Assertion(val, msg, assert2.notTypeOf, true).to.not.be.a(type2);
  };
  assert2.instanceOf = function(val, type2, msg) {
    new Assertion(val, msg, assert2.instanceOf, true).to.be.instanceOf(type2);
  };
  assert2.notInstanceOf = function(val, type2, msg) {
    new Assertion(val, msg, assert2.notInstanceOf, true).to.not.be.instanceOf(type2);
  };
  assert2.include = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.include, true).include(inc2);
  };
  assert2.notInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.notInclude, true).not.include(inc2);
  };
  assert2.deepInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.deepInclude, true).deep.include(inc2);
  };
  assert2.notDeepInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.notDeepInclude, true).not.deep.include(inc2);
  };
  assert2.nestedInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.nestedInclude, true).nested.include(inc2);
  };
  assert2.notNestedInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.notNestedInclude, true).not.nested.include(inc2);
  };
  assert2.deepNestedInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.deepNestedInclude, true).deep.nested.include(inc2);
  };
  assert2.notDeepNestedInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.notDeepNestedInclude, true).not.deep.nested.include(inc2);
  };
  assert2.ownInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.ownInclude, true).own.include(inc2);
  };
  assert2.notOwnInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.notOwnInclude, true).not.own.include(inc2);
  };
  assert2.deepOwnInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.deepOwnInclude, true).deep.own.include(inc2);
  };
  assert2.notDeepOwnInclude = function(exp, inc2, msg) {
    new Assertion(exp, msg, assert2.notDeepOwnInclude, true).not.deep.own.include(inc2);
  };
  assert2.match = function(exp, re2, msg) {
    new Assertion(exp, msg, assert2.match, true).to.match(re2);
  };
  assert2.notMatch = function(exp, re2, msg) {
    new Assertion(exp, msg, assert2.notMatch, true).to.not.match(re2);
  };
  assert2.property = function(obj, prop, msg) {
    new Assertion(obj, msg, assert2.property, true).to.have.property(prop);
  };
  assert2.notProperty = function(obj, prop, msg) {
    new Assertion(obj, msg, assert2.notProperty, true).to.not.have.property(prop);
  };
  assert2.propertyVal = function(obj, prop, val, msg) {
    new Assertion(obj, msg, assert2.propertyVal, true).to.have.property(prop, val);
  };
  assert2.notPropertyVal = function(obj, prop, val, msg) {
    new Assertion(obj, msg, assert2.notPropertyVal, true).to.not.have.property(prop, val);
  };
  assert2.deepPropertyVal = function(obj, prop, val, msg) {
    new Assertion(obj, msg, assert2.deepPropertyVal, true).to.have.deep.property(prop, val);
  };
  assert2.notDeepPropertyVal = function(obj, prop, val, msg) {
    new Assertion(obj, msg, assert2.notDeepPropertyVal, true).to.not.have.deep.property(prop, val);
  };
  assert2.ownProperty = function(obj, prop, msg) {
    new Assertion(obj, msg, assert2.ownProperty, true).to.have.own.property(prop);
  };
  assert2.notOwnProperty = function(obj, prop, msg) {
    new Assertion(obj, msg, assert2.notOwnProperty, true).to.not.have.own.property(prop);
  };
  assert2.ownPropertyVal = function(obj, prop, value, msg) {
    new Assertion(obj, msg, assert2.ownPropertyVal, true).to.have.own.property(prop, value);
  };
  assert2.notOwnPropertyVal = function(obj, prop, value, msg) {
    new Assertion(obj, msg, assert2.notOwnPropertyVal, true).to.not.have.own.property(prop, value);
  };
  assert2.deepOwnPropertyVal = function(obj, prop, value, msg) {
    new Assertion(obj, msg, assert2.deepOwnPropertyVal, true).to.have.deep.own.property(prop, value);
  };
  assert2.notDeepOwnPropertyVal = function(obj, prop, value, msg) {
    new Assertion(obj, msg, assert2.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(prop, value);
  };
  assert2.nestedProperty = function(obj, prop, msg) {
    new Assertion(obj, msg, assert2.nestedProperty, true).to.have.nested.property(prop);
  };
  assert2.notNestedProperty = function(obj, prop, msg) {
    new Assertion(obj, msg, assert2.notNestedProperty, true).to.not.have.nested.property(prop);
  };
  assert2.nestedPropertyVal = function(obj, prop, val, msg) {
    new Assertion(obj, msg, assert2.nestedPropertyVal, true).to.have.nested.property(prop, val);
  };
  assert2.notNestedPropertyVal = function(obj, prop, val, msg) {
    new Assertion(obj, msg, assert2.notNestedPropertyVal, true).to.not.have.nested.property(prop, val);
  };
  assert2.deepNestedPropertyVal = function(obj, prop, val, msg) {
    new Assertion(obj, msg, assert2.deepNestedPropertyVal, true).to.have.deep.nested.property(prop, val);
  };
  assert2.notDeepNestedPropertyVal = function(obj, prop, val, msg) {
    new Assertion(obj, msg, assert2.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(prop, val);
  };
  assert2.lengthOf = function(exp, len, msg) {
    new Assertion(exp, msg, assert2.lengthOf, true).to.have.lengthOf(len);
  };
  assert2.hasAnyKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.hasAnyKeys, true).to.have.any.keys(keys2);
  };
  assert2.hasAllKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.hasAllKeys, true).to.have.all.keys(keys2);
  };
  assert2.containsAllKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.containsAllKeys, true).to.contain.all.keys(keys2);
  };
  assert2.doesNotHaveAnyKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.doesNotHaveAnyKeys, true).to.not.have.any.keys(keys2);
  };
  assert2.doesNotHaveAllKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.doesNotHaveAllKeys, true).to.not.have.all.keys(keys2);
  };
  assert2.hasAnyDeepKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.hasAnyDeepKeys, true).to.have.any.deep.keys(keys2);
  };
  assert2.hasAllDeepKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.hasAllDeepKeys, true).to.have.all.deep.keys(keys2);
  };
  assert2.containsAllDeepKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.containsAllDeepKeys, true).to.contain.all.deep.keys(keys2);
  };
  assert2.doesNotHaveAnyDeepKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(keys2);
  };
  assert2.doesNotHaveAllDeepKeys = function(obj, keys2, msg) {
    new Assertion(obj, msg, assert2.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(keys2);
  };
  assert2.throws = function(fn2, errorLike, errMsgMatcher, msg) {
    if ("string" === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }
    var assertErr = new Assertion(fn2, msg, assert2.throws, true).to.throw(errorLike, errMsgMatcher);
    return flag3(assertErr, "object");
  };
  assert2.doesNotThrow = function(fn2, errorLike, errMsgMatcher, msg) {
    if ("string" === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }
    new Assertion(fn2, msg, assert2.doesNotThrow, true).to.not.throw(errorLike, errMsgMatcher);
  };
  assert2.operator = function(val, operator, val2, msg) {
    var ok;
    switch (operator) {
      case "==":
        ok = val == val2;
        break;
      case "===":
        ok = val === val2;
        break;
      case ">":
        ok = val > val2;
        break;
      case ">=":
        ok = val >= val2;
        break;
      case "<":
        ok = val < val2;
        break;
      case "<=":
        ok = val <= val2;
        break;
      case "!=":
        ok = val != val2;
        break;
      case "!==":
        ok = val !== val2;
        break;
      default:
        msg = msg ? msg + ": " : msg;
        throw new chai2.AssertionError(
          msg + 'Invalid operator "' + operator + '"',
          void 0,
          assert2.operator
        );
    }
    var test3 = new Assertion(ok, msg, assert2.operator, true);
    test3.assert(
      true === flag3(test3, "object"),
      "expected " + util2.inspect(val) + " to be " + operator + " " + util2.inspect(val2),
      "expected " + util2.inspect(val) + " to not be " + operator + " " + util2.inspect(val2)
    );
  };
  assert2.closeTo = function(act, exp, delta, msg) {
    new Assertion(act, msg, assert2.closeTo, true).to.be.closeTo(exp, delta);
  };
  assert2.approximately = function(act, exp, delta, msg) {
    new Assertion(act, msg, assert2.approximately, true).to.be.approximately(exp, delta);
  };
  assert2.sameMembers = function(set1, set22, msg) {
    new Assertion(set1, msg, assert2.sameMembers, true).to.have.same.members(set22);
  };
  assert2.notSameMembers = function(set1, set22, msg) {
    new Assertion(set1, msg, assert2.notSameMembers, true).to.not.have.same.members(set22);
  };
  assert2.sameDeepMembers = function(set1, set22, msg) {
    new Assertion(set1, msg, assert2.sameDeepMembers, true).to.have.same.deep.members(set22);
  };
  assert2.notSameDeepMembers = function(set1, set22, msg) {
    new Assertion(set1, msg, assert2.notSameDeepMembers, true).to.not.have.same.deep.members(set22);
  };
  assert2.sameOrderedMembers = function(set1, set22, msg) {
    new Assertion(set1, msg, assert2.sameOrderedMembers, true).to.have.same.ordered.members(set22);
  };
  assert2.notSameOrderedMembers = function(set1, set22, msg) {
    new Assertion(set1, msg, assert2.notSameOrderedMembers, true).to.not.have.same.ordered.members(set22);
  };
  assert2.sameDeepOrderedMembers = function(set1, set22, msg) {
    new Assertion(set1, msg, assert2.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(set22);
  };
  assert2.notSameDeepOrderedMembers = function(set1, set22, msg) {
    new Assertion(set1, msg, assert2.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(set22);
  };
  assert2.includeMembers = function(superset, subset2, msg) {
    new Assertion(superset, msg, assert2.includeMembers, true).to.include.members(subset2);
  };
  assert2.notIncludeMembers = function(superset, subset2, msg) {
    new Assertion(superset, msg, assert2.notIncludeMembers, true).to.not.include.members(subset2);
  };
  assert2.includeDeepMembers = function(superset, subset2, msg) {
    new Assertion(superset, msg, assert2.includeDeepMembers, true).to.include.deep.members(subset2);
  };
  assert2.notIncludeDeepMembers = function(superset, subset2, msg) {
    new Assertion(superset, msg, assert2.notIncludeDeepMembers, true).to.not.include.deep.members(subset2);
  };
  assert2.includeOrderedMembers = function(superset, subset2, msg) {
    new Assertion(superset, msg, assert2.includeOrderedMembers, true).to.include.ordered.members(subset2);
  };
  assert2.notIncludeOrderedMembers = function(superset, subset2, msg) {
    new Assertion(superset, msg, assert2.notIncludeOrderedMembers, true).to.not.include.ordered.members(subset2);
  };
  assert2.includeDeepOrderedMembers = function(superset, subset2, msg) {
    new Assertion(superset, msg, assert2.includeDeepOrderedMembers, true).to.include.deep.ordered.members(subset2);
  };
  assert2.notIncludeDeepOrderedMembers = function(superset, subset2, msg) {
    new Assertion(superset, msg, assert2.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(subset2);
  };
  assert2.oneOf = function(inList, list, msg) {
    new Assertion(inList, msg, assert2.oneOf, true).to.be.oneOf(list);
  };
  assert2.changes = function(fn2, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === "function") {
      msg = prop;
      prop = null;
    }
    new Assertion(fn2, msg, assert2.changes, true).to.change(obj, prop);
  };
  assert2.changesBy = function(fn2, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === "function") {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }
    new Assertion(fn2, msg, assert2.changesBy, true).to.change(obj, prop).by(delta);
  };
  assert2.doesNotChange = function(fn2, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === "function") {
      msg = prop;
      prop = null;
    }
    return new Assertion(fn2, msg, assert2.doesNotChange, true).to.not.change(obj, prop);
  };
  assert2.changesButNotBy = function(fn2, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === "function") {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }
    new Assertion(fn2, msg, assert2.changesButNotBy, true).to.change(obj, prop).but.not.by(delta);
  };
  assert2.increases = function(fn2, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === "function") {
      msg = prop;
      prop = null;
    }
    return new Assertion(fn2, msg, assert2.increases, true).to.increase(obj, prop);
  };
  assert2.increasesBy = function(fn2, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === "function") {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }
    new Assertion(fn2, msg, assert2.increasesBy, true).to.increase(obj, prop).by(delta);
  };
  assert2.doesNotIncrease = function(fn2, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === "function") {
      msg = prop;
      prop = null;
    }
    return new Assertion(fn2, msg, assert2.doesNotIncrease, true).to.not.increase(obj, prop);
  };
  assert2.increasesButNotBy = function(fn2, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === "function") {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }
    new Assertion(fn2, msg, assert2.increasesButNotBy, true).to.increase(obj, prop).but.not.by(delta);
  };
  assert2.decreases = function(fn2, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === "function") {
      msg = prop;
      prop = null;
    }
    return new Assertion(fn2, msg, assert2.decreases, true).to.decrease(obj, prop);
  };
  assert2.decreasesBy = function(fn2, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === "function") {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }
    new Assertion(fn2, msg, assert2.decreasesBy, true).to.decrease(obj, prop).by(delta);
  };
  assert2.doesNotDecrease = function(fn2, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === "function") {
      msg = prop;
      prop = null;
    }
    return new Assertion(fn2, msg, assert2.doesNotDecrease, true).to.not.decrease(obj, prop);
  };
  assert2.doesNotDecreaseBy = function(fn2, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === "function") {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }
    return new Assertion(fn2, msg, assert2.doesNotDecreaseBy, true).to.not.decrease(obj, prop).by(delta);
  };
  assert2.decreasesButNotBy = function(fn2, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === "function") {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }
    new Assertion(fn2, msg, assert2.decreasesButNotBy, true).to.decrease(obj, prop).but.not.by(delta);
  };
  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
  assert2.ifError = function(val) {
    if (val) {
      throw val;
    }
  };
  assert2.isExtensible = function(obj, msg) {
    new Assertion(obj, msg, assert2.isExtensible, true).to.be.extensible;
  };
  assert2.isNotExtensible = function(obj, msg) {
    new Assertion(obj, msg, assert2.isNotExtensible, true).to.not.be.extensible;
  };
  assert2.isSealed = function(obj, msg) {
    new Assertion(obj, msg, assert2.isSealed, true).to.be.sealed;
  };
  assert2.isNotSealed = function(obj, msg) {
    new Assertion(obj, msg, assert2.isNotSealed, true).to.not.be.sealed;
  };
  assert2.isFrozen = function(obj, msg) {
    new Assertion(obj, msg, assert2.isFrozen, true).to.be.frozen;
  };
  assert2.isNotFrozen = function(obj, msg) {
    new Assertion(obj, msg, assert2.isNotFrozen, true).to.not.be.frozen;
  };
  assert2.isEmpty = function(val, msg) {
    new Assertion(val, msg, assert2.isEmpty, true).to.be.empty;
  };
  assert2.isNotEmpty = function(val, msg) {
    new Assertion(val, msg, assert2.isNotEmpty, true).to.not.be.empty;
  };
  /*!
   * Aliases.
   */
  (function alias(name2, as) {
    assert2[as] = assert2[name2];
    return alias;
  })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var hasRequiredChai;
function requireChai() {
  if (hasRequiredChai)
    return chai$3;
  hasRequiredChai = 1;
  (function(exports) {
    var used = [];
    /*!
     * Chai version
     */
    exports.version = "4.3.3";
    /*!
     * Assertion Error
     */
    exports.AssertionError = assertionError;
    /*!
     * Utils for plugins (not exported)
     */
    var util2 = requireUtils();
    exports.use = function(fn2) {
      if (!~used.indexOf(fn2)) {
        fn2(exports, util2);
        used.push(fn2);
      }
      return exports;
    };
    /*!
     * Utility Functions
     */
    exports.util = util2;
    /*!
     * Configuration
     */
    var config2 = config$5;
    exports.config = config2;
    /*!
     * Primary `Assertion` prototype
     */
    var assertion$1 = assertion;
    exports.use(assertion$1);
    /*!
     * Core Assertions
     */
    var core = assertions;
    exports.use(core);
    /*!
     * Expect interface
     */
    var expect2 = expect$1;
    exports.use(expect2);
    /*!
     * Should interface
     */
    var should$1 = should;
    exports.use(should$1);
    /*!
     * Assert interface
     */
    var assert$1 = assert;
    exports.use(assert$1);
  })(chai$3);
  return chai$3;
}
var chai$1 = requireChai();
const chai$2 = /* @__PURE__ */ getDefaultExportFromCjs(chai$1);
const expect = chai$2.expect;
chai$2.version;
chai$2.Assertion;
const AssertionError = chai$2.AssertionError;
const util = chai$2.util;
chai$2.config;
const use = chai$2.use;
chai$2.should;
chai$2.assert;
chai$2.core;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function R(e, t2) {
  if (!e)
    throw new Error(t2);
}
function i(e, t2) {
  return typeof t2 === e;
}
function b(e) {
  return e instanceof Promise;
}
function g(e, t2, n2) {
  Object.defineProperty(e, t2, n2);
}
function l(e, t2, n2) {
  Object.defineProperty(e, t2, { value: n2 });
}
var y = Symbol.for("tinyspy:spy");
var m = /* @__PURE__ */ new Set(), M = (e) => {
  e.called = false, e.callCount = 0, e.calls = [], e.results = [];
}, C = (e) => (g(e, y, { value: { reset: () => M(e[y]) } }), e[y]), A = (e) => e[y] || C(e);
function I(e) {
  R(i("function", e) || i("undefined", e), "cannot spy on a non-function value");
  let t2 = function(...o) {
    let r = A(t2);
    if (r.called = true, r.callCount++, r.calls.push(o), r.next) {
      let [p, s] = r.next;
      if (r.results.push(r.next), r.next = null, p === "ok")
        return s;
      throw s;
    }
    let a, f = "ok";
    if (r.impl)
      try {
        a = r.impl.apply(this, o), f = "ok";
      } catch (p) {
        throw a = p, f = "error", r.results.push([f, p]), p;
      }
    let u = [f, a];
    if (b(a)) {
      let p = a.then((s) => u[1] = s).catch((s) => {
        throw u[0] = "error", u[1] = s, s;
      });
      Object.assign(p, a), a = p;
    }
    return r.results.push(u), a;
  };
  l(t2, "_isMockFunction", true), l(t2, "length", e ? e.length : 0), l(t2, "name", e && e.name || "spy");
  let n2 = A(t2);
  return n2.reset(), n2.impl = e, t2;
}
var P = (e, t2) => Object.getOwnPropertyDescriptor(e, t2);
function E(e, t2, n2) {
  R(!i("undefined", e), "spyOn could not find an object to spy upon"), R(i("object", e) || i("function", e), "cannot spyOn on a primitive value");
  let o = () => {
    if (!i("object", t2))
      return [t2, "value"];
    if ("getter" in t2 && "setter" in t2)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t2)
      return [t2.getter, "get"];
    if ("setter" in t2)
      return [t2.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  }, [r, a] = o(), f = P(e, r), u = Object.getPrototypeOf(e), p = u && P(u, r), s = f || p;
  R(s || r in e, `${String(r)} does not exist`);
  let w = false;
  a === "value" && s && !s.value && s.get && (a = "get", w = true, n2 = s.get());
  let c;
  s ? c = s[a] : a !== "value" ? c = () => e[r] : c = e[r], n2 || (n2 = c);
  let d = I(n2), O = (h) => {
    let { value: G, ...k } = s || {
      configurable: true,
      writable: true
    };
    a !== "value" && delete k.writable, k[a] = h, g(e, r, k);
  }, K = () => O(c), T = d[y];
  return l(T, "restore", K), l(T, "getOriginal", () => w ? c() : c), l(T, "willCall", (h) => (T.impl = h, d)), O(w ? () => d : d), m.add(d), d;
}
const spies = /* @__PURE__ */ new Set();
function isMockFunction(fn2) {
  return typeof fn2 === "function" && "_isMockFunction" in fn2 && fn2._isMockFunction;
}
function spyOn(obj, method, accessType) {
  const dictionary = {
    get: "getter",
    set: "setter"
  };
  const objMethod = accessType ? { [dictionary[accessType]]: method } : method;
  const stub = E(obj, objMethod);
  return enhanceSpy(stub);
}
let callOrder = 0;
function enhanceSpy(spy) {
  const stub = spy;
  let implementation2;
  let instances = [];
  let invocations = [];
  const state = A(spy);
  const mockContext = {
    get calls() {
      return state.calls;
    },
    get instances() {
      return instances;
    },
    get invocationCallOrder() {
      return invocations;
    },
    get results() {
      return state.results.map(([callType, value]) => {
        const type2 = callType === "error" ? "throw" : "return";
        return { type: type2, value };
      });
    },
    get lastCall() {
      return state.calls[state.calls.length - 1];
    }
  };
  let onceImplementations = [];
  let implementationChangedTemporarily = false;
  function mockCall(...args) {
    instances.push(this);
    invocations.push(++callOrder);
    const impl = implementationChangedTemporarily ? implementation2 : onceImplementations.shift() || implementation2 || state.getOriginal() || (() => {
    });
    return impl.apply(this, args);
  }
  let name2 = stub.name;
  stub.getMockName = () => name2 || "vi.fn()";
  stub.mockName = (n2) => {
    name2 = n2;
    return stub;
  };
  stub.mockClear = () => {
    state.reset();
    instances = [];
    invocations = [];
    return stub;
  };
  stub.mockReset = () => {
    stub.mockClear();
    implementation2 = () => void 0;
    onceImplementations = [];
    return stub;
  };
  stub.mockRestore = () => {
    stub.mockReset();
    state.restore();
    implementation2 = void 0;
    return stub;
  };
  stub.getMockImplementation = () => implementation2;
  stub.mockImplementation = (fn2) => {
    implementation2 = fn2;
    state.willCall(mockCall);
    return stub;
  };
  stub.mockImplementationOnce = (fn2) => {
    onceImplementations.push(fn2);
    return stub;
  };
  function withImplementation(fn2, cb) {
    const originalImplementation = implementation2;
    implementation2 = fn2;
    state.willCall(mockCall);
    implementationChangedTemporarily = true;
    const reset = () => {
      implementation2 = originalImplementation;
      implementationChangedTemporarily = false;
    };
    const result = cb();
    if (result instanceof Promise) {
      return result.then(() => {
        reset();
        return stub;
      });
    }
    reset();
    return stub;
  }
  stub.withImplementation = withImplementation;
  stub.mockReturnThis = () => stub.mockImplementation(function() {
    return this;
  });
  stub.mockReturnValue = (val) => stub.mockImplementation(() => val);
  stub.mockReturnValueOnce = (val) => stub.mockImplementationOnce(() => val);
  stub.mockResolvedValue = (val) => stub.mockImplementation(() => Promise.resolve(val));
  stub.mockResolvedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.resolve(val));
  stub.mockRejectedValue = (val) => stub.mockImplementation(() => Promise.reject(val));
  stub.mockRejectedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.reject(val));
  Object.defineProperty(stub, "mock", {
    get: () => mockContext
  });
  state.willCall(mockCall);
  spies.add(stub);
  return stub;
}
function fn(implementation2) {
  const enhancedSpy = enhanceSpy(E({ spy: implementation2 || (() => {
  }) }, "spy"));
  if (implementation2)
    enhancedSpy.mockImplementation(implementation2);
  return enhancedSpy;
}
const MATCHERS_OBJECT = Symbol.for("matchers-object");
const JEST_MATCHERS_OBJECT = Symbol.for("$$jest-matchers-object");
const GLOBAL_EXPECT = Symbol.for("expect-global");
if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT)) {
  const globalState = /* @__PURE__ */ new WeakMap();
  const matchers = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, MATCHERS_OBJECT, {
    get: () => globalState
  });
  Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT, {
    configurable: true,
    get: () => ({
      state: globalState.get(globalThis[GLOBAL_EXPECT]),
      matchers
    })
  });
}
function getState(expect2) {
  return globalThis[MATCHERS_OBJECT].get(expect2);
}
function setState(state, expect2) {
  const map2 = globalThis[MATCHERS_OBJECT];
  const current = map2.get(expect2) || {};
  Object.assign(current, state);
  map2.set(expect2, current);
}
function getMatcherUtils() {
  const c = () => getColors();
  const EXPECTED_COLOR = c().green;
  const RECEIVED_COLOR = c().red;
  const INVERTED_COLOR = c().inverse;
  const BOLD_WEIGHT = c().bold;
  const DIM_COLOR = c().dim;
  function matcherHint(matcherName, received = "received", expected = "expected", options = {}) {
    const {
      comment = "",
      isDirectExpectCall = false,
      // seems redundant with received === ''
      isNot = false,
      promise: promise2 = "",
      secondArgument = "",
      expectedColor = EXPECTED_COLOR,
      receivedColor = RECEIVED_COLOR,
      secondArgumentColor = EXPECTED_COLOR
    } = options;
    let hint = "";
    let dimString = "expect";
    if (!isDirectExpectCall && received !== "") {
      hint += DIM_COLOR(`${dimString}(`) + receivedColor(received);
      dimString = ")";
    }
    if (promise2 !== "") {
      hint += DIM_COLOR(`${dimString}.`) + promise2;
      dimString = "";
    }
    if (isNot) {
      hint += `${DIM_COLOR(`${dimString}.`)}not`;
      dimString = "";
    }
    if (matcherName.includes(".")) {
      dimString += matcherName;
    } else {
      hint += DIM_COLOR(`${dimString}.`) + matcherName;
      dimString = "";
    }
    if (expected === "") {
      dimString += "()";
    } else {
      hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected);
      if (secondArgument)
        hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument);
      dimString = ")";
    }
    if (comment !== "")
      dimString += ` // ${comment}`;
    if (dimString !== "")
      hint += DIM_COLOR(dimString);
    return hint;
  }
  const SPACE_SYMBOL = "·";
  const replaceTrailingSpaces = (text) => text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
  const printReceived = (object2) => RECEIVED_COLOR(replaceTrailingSpaces(stringify(object2)));
  const printExpected = (value) => EXPECTED_COLOR(replaceTrailingSpaces(stringify(value)));
  return {
    EXPECTED_COLOR,
    RECEIVED_COLOR,
    INVERTED_COLOR,
    BOLD_WEIGHT,
    DIM_COLOR,
    matcherHint,
    printReceived,
    printExpected
  };
}
function diff(a, b2, options) {
  return unifiedDiff(b2, a, {
    showLegend: options == null ? void 0 : options.showLegend
  });
}
function equals(a, b2, customTesters, strictCheck) {
  customTesters = customTesters || [];
  return eq(a, b2, [], [], customTesters, strictCheck ? hasKey : hasDefinedKey);
}
function isAsymmetric(obj) {
  return !!obj && typeof obj === "object" && "asymmetricMatch" in obj && isA("Function", obj.asymmetricMatch);
}
function asymmetricMatch(a, b2) {
  const asymmetricA = isAsymmetric(a);
  const asymmetricB = isAsymmetric(b2);
  if (asymmetricA && asymmetricB)
    return void 0;
  if (asymmetricA)
    return a.asymmetricMatch(b2);
  if (asymmetricB)
    return b2.asymmetricMatch(a);
}
function eq(a, b2, aStack, bStack, customTesters, hasKey2) {
  let result = true;
  const asymmetricResult = asymmetricMatch(a, b2);
  if (asymmetricResult !== void 0)
    return asymmetricResult;
  for (let i2 = 0; i2 < customTesters.length; i2++) {
    const customTesterResult = customTesters[i2](a, b2);
    if (customTesterResult !== void 0)
      return customTesterResult;
  }
  if (a instanceof Error && b2 instanceof Error)
    return a.message === b2.message;
  if (Object.is(a, b2))
    return true;
  if (a === null || b2 === null)
    return a === b2;
  const className2 = Object.prototype.toString.call(a);
  if (className2 !== Object.prototype.toString.call(b2))
    return false;
  switch (className2) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      if (typeof a !== typeof b2) {
        return false;
      } else if (typeof a !== "object" && typeof b2 !== "object") {
        return Object.is(a, b2);
      } else {
        return Object.is(a.valueOf(), b2.valueOf());
      }
    case "[object Date]":
      return isNaN(a) && isNaN(b2) || +a === +b2;
    case "[object RegExp]":
      return a.source === b2.source && a.flags === b2.flags;
  }
  if (typeof a !== "object" || typeof b2 !== "object")
    return false;
  if (isDomNode(a) && isDomNode(b2))
    return a.isEqualNode(b2);
  let length2 = aStack.length;
  while (length2--) {
    if (aStack[length2] === a)
      return bStack[length2] === b2;
    else if (bStack[length2] === b2)
      return false;
  }
  aStack.push(a);
  bStack.push(b2);
  if (className2 === "[object Array]" && a.length !== b2.length)
    return false;
  const aKeys = keys(a, hasKey2);
  let key;
  let size = aKeys.length;
  if (keys(b2, hasKey2).length !== size)
    return false;
  while (size--) {
    key = aKeys[size];
    result = hasKey2(b2, key) && eq(a[key], b2[key], aStack, bStack, customTesters, hasKey2);
    if (!result)
      return false;
  }
  aStack.pop();
  bStack.pop();
  return result;
}
function keys(obj, hasKey2) {
  const keys2 = [];
  for (const key in obj) {
    if (hasKey2(obj, key))
      keys2.push(key);
  }
  return keys2.concat(
    Object.getOwnPropertySymbols(obj).filter(
      (symbol2) => Object.getOwnPropertyDescriptor(obj, symbol2).enumerable
    )
  );
}
function hasDefinedKey(obj, key) {
  return hasKey(obj, key) && obj[key] !== void 0;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function isA(typeName, value) {
  return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
}
function isDomNode(obj) {
  return obj !== null && typeof obj === "object" && "nodeType" in obj && typeof obj.nodeType === "number" && "nodeName" in obj && typeof obj.nodeName === "string" && "isEqualNode" in obj && typeof obj.isEqualNode === "function";
}
const IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
const IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
const IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
function isImmutableUnorderedKeyed(maybeKeyed) {
  return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL] && !maybeKeyed[IS_ORDERED_SENTINEL]);
}
function isImmutableUnorderedSet(maybeSet) {
  return !!(maybeSet && maybeSet[IS_SET_SENTINEL] && !maybeSet[IS_ORDERED_SENTINEL]);
}
const IteratorSymbol = Symbol.iterator;
function hasIterator(object2) {
  return !!(object2 != null && object2[IteratorSymbol]);
}
function iterableEquality(a, b2, aStack = [], bStack = []) {
  if (typeof a !== "object" || typeof b2 !== "object" || Array.isArray(a) || Array.isArray(b2) || !hasIterator(a) || !hasIterator(b2))
    return void 0;
  if (a.constructor !== b2.constructor)
    return false;
  let length2 = aStack.length;
  while (length2--) {
    if (aStack[length2] === a)
      return bStack[length2] === b2;
  }
  aStack.push(a);
  bStack.push(b2);
  const iterableEqualityWithStack = (a2, b22) => iterableEquality(a2, b22, [...aStack], [...bStack]);
  if (a.size !== void 0) {
    if (a.size !== b2.size) {
      return false;
    } else if (isA("Set", a) || isImmutableUnorderedSet(a)) {
      let allFound = true;
      for (const aValue of a) {
        if (!b2.has(aValue)) {
          let has = false;
          for (const bValue of b2) {
            const isEqual = equals(aValue, bValue, [iterableEqualityWithStack]);
            if (isEqual === true)
              has = true;
          }
          if (has === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    } else if (isA("Map", a) || isImmutableUnorderedKeyed(a)) {
      let allFound = true;
      for (const aEntry of a) {
        if (!b2.has(aEntry[0]) || !equals(aEntry[1], b2.get(aEntry[0]), [iterableEqualityWithStack])) {
          let has = false;
          for (const bEntry of b2) {
            const matchedKey = equals(aEntry[0], bEntry[0], [
              iterableEqualityWithStack
            ]);
            let matchedValue = false;
            if (matchedKey === true) {
              matchedValue = equals(aEntry[1], bEntry[1], [
                iterableEqualityWithStack
              ]);
            }
            if (matchedValue === true)
              has = true;
          }
          if (has === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    }
  }
  const bIterator = b2[IteratorSymbol]();
  for (const aValue of a) {
    const nextB = bIterator.next();
    if (nextB.done || !equals(aValue, nextB.value, [iterableEqualityWithStack]))
      return false;
  }
  if (!bIterator.next().done)
    return false;
  aStack.pop();
  bStack.pop();
  return true;
}
function hasPropertyInObject(object2, key) {
  const shouldTerminate = !object2 || typeof object2 !== "object" || object2 === Object.prototype;
  if (shouldTerminate)
    return false;
  return Object.prototype.hasOwnProperty.call(object2, key) || hasPropertyInObject(Object.getPrototypeOf(object2), key);
}
function isObjectWithKeys(a) {
  return isObject$b(a) && !(a instanceof Error) && !Array.isArray(a) && !(a instanceof Date);
}
function subsetEquality(object2, subset2) {
  const subsetEqualityWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object22, subset22) => {
    if (!isObjectWithKeys(subset22))
      return void 0;
    return Object.keys(subset22).every((key) => {
      if (isObjectWithKeys(subset22[key])) {
        if (seenReferences.has(subset22[key]))
          return equals(object22[key], subset22[key], [iterableEquality]);
        seenReferences.set(subset22[key], true);
      }
      const result = object22 != null && hasPropertyInObject(object22, key) && equals(object22[key], subset22[key], [
        iterableEquality,
        subsetEqualityWithContext(seenReferences)
      ]);
      seenReferences.delete(subset22[key]);
      return result;
    });
  };
  return subsetEqualityWithContext()(object2, subset2);
}
function typeEquality(a, b2) {
  if (a == null || b2 == null || a.constructor === b2.constructor)
    return void 0;
  return false;
}
function arrayBufferEquality(a, b2) {
  if (!(a instanceof ArrayBuffer) || !(b2 instanceof ArrayBuffer))
    return void 0;
  const dataViewA = new DataView(a);
  const dataViewB = new DataView(b2);
  if (dataViewA.byteLength !== dataViewB.byteLength)
    return false;
  for (let i2 = 0; i2 < dataViewA.byteLength; i2++) {
    if (dataViewA.getUint8(i2) !== dataViewB.getUint8(i2))
      return false;
  }
  return true;
}
function sparseArrayEquality(a, b2) {
  if (!Array.isArray(a) || !Array.isArray(b2))
    return void 0;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b2);
  return equals(a, b2, [iterableEquality, typeEquality], true) && equals(aKeys, bKeys);
}
function generateToBeMessage(deepEqualityName, expected = "#{this}", actual = "#{exp}") {
  const toBeMessage = `expected ${expected} to be ${actual} // Object.is equality`;
  if (["toStrictEqual", "toEqual"].includes(deepEqualityName))
    return `${toBeMessage}

If it should pass with deep equality, replace "toBe" with "${deepEqualityName}"

Expected: ${expected}
Received: serializes to the same string
`;
  return toBeMessage;
}
let AsymmetricMatcher$1 = class AsymmetricMatcher {
  constructor(sample, inverse = false) {
    this.sample = sample;
    this.inverse = inverse;
    this.$$typeof = Symbol.for("jest.asymmetricMatcher");
  }
  getMatcherContext(expect2) {
    return {
      ...getState(expect2 || globalThis[GLOBAL_EXPECT]),
      equals,
      isNot: this.inverse,
      utils: {
        ...getMatcherUtils(),
        diff,
        stringify,
        iterableEquality,
        subsetEquality
      }
    };
  }
};
class StringContaining extends AsymmetricMatcher$1 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample))
      throw new Error("Expected is not a string");
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && other.includes(this.sample);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
}
class Anything extends AsymmetricMatcher$1 {
  asymmetricMatch(other) {
    return other != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
}
class ObjectContaining extends AsymmetricMatcher$1 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  getPrototype(obj) {
    if (Object.getPrototypeOf)
      return Object.getPrototypeOf(obj);
    if (obj.constructor.prototype === obj)
      return null;
    return obj.constructor.prototype;
  }
  hasProperty(obj, property2) {
    if (!obj)
      return false;
    if (Object.prototype.hasOwnProperty.call(obj, property2))
      return true;
    return this.hasProperty(this.getPrototype(obj), property2);
  }
  asymmetricMatch(other) {
    if (typeof this.sample !== "object") {
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    let result = true;
    for (const property2 in this.sample) {
      if (!this.hasProperty(other, property2) || !equals(this.sample[property2], other[property2])) {
        result = false;
        break;
      }
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
}
class ArrayContaining extends AsymmetricMatcher$1 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every(
      (item2) => other.some((another) => equals(item2, another))
    );
    return this.inverse ? !result : result;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
}
class Any extends AsymmetricMatcher$1 {
  constructor(sample) {
    if (typeof sample === "undefined") {
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    }
    super(sample);
  }
  fnNameFor(func) {
    if (func.name)
      return func.name;
    const functionToString = Function.prototype.toString;
    const matches = functionToString.call(func).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return matches ? matches[1] : "<anonymous>";
  }
  asymmetricMatch(other) {
    if (this.sample === String)
      return typeof other == "string" || other instanceof String;
    if (this.sample === Number)
      return typeof other == "number" || other instanceof Number;
    if (this.sample === Function)
      return typeof other == "function" || other instanceof Function;
    if (this.sample === Boolean)
      return typeof other == "boolean" || other instanceof Boolean;
    if (this.sample === BigInt)
      return typeof other == "bigint" || other instanceof BigInt;
    if (this.sample === Symbol)
      return typeof other == "symbol" || other instanceof Symbol;
    if (this.sample === Object)
      return typeof other == "object";
    return other instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    if (this.sample === String)
      return "string";
    if (this.sample === Number)
      return "number";
    if (this.sample === Function)
      return "function";
    if (this.sample === Object)
      return "object";
    if (this.sample === Boolean)
      return "boolean";
    return this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
}
class StringMatching extends AsymmetricMatcher$1 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample) && !isA("RegExp", sample))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(sample), inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && this.sample.test(other);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
}
const JestAsymmetricMatchers = (chai2, utils2) => {
  utils2.addMethod(
    chai2.expect,
    "anything",
    () => new Anything()
  );
  utils2.addMethod(
    chai2.expect,
    "any",
    (expected) => new Any(expected)
  );
  utils2.addMethod(
    chai2.expect,
    "stringContaining",
    (expected) => new StringContaining(expected)
  );
  utils2.addMethod(
    chai2.expect,
    "objectContaining",
    (expected) => new ObjectContaining(expected)
  );
  utils2.addMethod(
    chai2.expect,
    "arrayContaining",
    (expected) => new ArrayContaining(expected)
  );
  utils2.addMethod(
    chai2.expect,
    "stringMatching",
    (expected) => new StringMatching(expected)
  );
  chai2.expect.not = {
    stringContaining: (expected) => new StringContaining(expected, true),
    objectContaining: (expected) => new ObjectContaining(expected, true),
    arrayContaining: (expected) => new ArrayContaining(expected, true),
    stringMatching: (expected) => new StringMatching(expected, true)
  };
};
function recordAsyncExpect$1(test3, promise2) {
  if (test3) {
    promise2 = promise2.finally(() => {
      const index = test3.promises.indexOf(promise2);
      if (index !== -1)
        test3.promises.splice(index, 1);
    });
    if (!test3.promises)
      test3.promises = [];
    test3.promises.push(promise2);
  }
  return promise2;
}
const JestChaiExpect = (chai2, utils2) => {
  const c = () => getColors();
  function def(name2, fn2) {
    const addMethod2 = (n2) => {
      utils2.addMethod(chai2.Assertion.prototype, n2, fn2);
      utils2.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, n2, fn2);
    };
    if (Array.isArray(name2))
      name2.forEach((n2) => addMethod2(n2));
    else
      addMethod2(name2);
  }
  ["throw", "throws", "Throw"].forEach((m2) => {
    utils2.overwriteMethod(chai2.Assertion.prototype, m2, (_super) => {
      return function(...args) {
        const promise2 = utils2.flag(this, "promise");
        const object2 = utils2.flag(this, "object");
        const isNot = utils2.flag(this, "negate");
        if (promise2 === "rejects") {
          utils2.flag(this, "object", () => {
            throw object2;
          });
        } else if (promise2 === "resolves" && typeof object2 !== "function") {
          if (!isNot) {
            const message = utils2.flag(this, "message") || "expected promise to throw an error, but it didn't";
            const error2 = {
              showDiff: false
            };
            throw new AssertionError(message, error2, utils2.flag(this, "ssfi"));
          } else {
            return;
          }
        }
        _super.apply(this, args);
      };
    });
  });
  def("withTest", function(test3) {
    utils2.flag(this, "vitest-test", test3);
    return this;
  });
  def("toEqual", function(expected) {
    const actual = utils2.flag(this, "object");
    const equal = equals(
      actual,
      expected,
      [iterableEquality]
    );
    return this.assert(
      equal,
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      expected,
      actual
    );
  });
  def("toStrictEqual", function(expected) {
    const obj = utils2.flag(this, "object");
    const equal = equals(
      obj,
      expected,
      [
        iterableEquality,
        typeEquality,
        sparseArrayEquality,
        arrayBufferEquality
      ],
      true
    );
    return this.assert(
      equal,
      "expected #{this} to strictly equal #{exp}",
      "expected #{this} to not strictly equal #{exp}",
      expected,
      obj
    );
  });
  def("toBe", function(expected) {
    const actual = this._obj;
    const pass = Object.is(actual, expected);
    let deepEqualityName = "";
    if (!pass) {
      const toStrictEqualPass = equals(
        actual,
        expected,
        [
          iterableEquality,
          typeEquality,
          sparseArrayEquality,
          arrayBufferEquality
        ],
        true
      );
      if (toStrictEqualPass) {
        deepEqualityName = "toStrictEqual";
      } else {
        const toEqualPass = equals(
          actual,
          expected,
          [iterableEquality]
        );
        if (toEqualPass)
          deepEqualityName = "toEqual";
      }
    }
    return this.assert(
      pass,
      generateToBeMessage(deepEqualityName),
      "expected #{this} not to be #{exp} // Object.is equality",
      expected,
      actual
    );
  });
  def("toMatchObject", function(expected) {
    const actual = this._obj;
    return this.assert(
      equals(actual, expected, [iterableEquality, subsetEquality]),
      "expected #{this} to match object #{exp}",
      "expected #{this} to not match object #{exp}",
      expected,
      actual
    );
  });
  def("toMatch", function(expected) {
    if (typeof expected === "string")
      return this.include(expected);
    else
      return this.match(expected);
  });
  def("toContain", function(item2) {
    return this.contain(item2);
  });
  def("toContainEqual", function(expected) {
    const obj = utils2.flag(this, "object");
    const index = Array.from(obj).findIndex((item2) => {
      return equals(item2, expected);
    });
    this.assert(
      index !== -1,
      "expected #{this} to deep equally contain #{exp}",
      "expected #{this} to not deep equally contain #{exp}",
      expected
    );
  });
  def("toBeTruthy", function() {
    const obj = utils2.flag(this, "object");
    this.assert(
      Boolean(obj),
      "expected #{this} to be truthy",
      "expected #{this} to not be truthy",
      obj
    );
  });
  def("toBeFalsy", function() {
    const obj = utils2.flag(this, "object");
    this.assert(
      !obj,
      "expected #{this} to be falsy",
      "expected #{this} to not be falsy",
      obj
    );
  });
  def("toBeGreaterThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual > expected,
      `expected ${actual} to be greater than ${expected}`,
      `expected ${actual} to be not greater than ${expected}`,
      actual,
      expected
    );
  });
  def("toBeGreaterThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual >= expected,
      `expected ${actual} to be greater than or equal to ${expected}`,
      `expected ${actual} to be not greater than or equal to ${expected}`,
      actual,
      expected
    );
  });
  def("toBeLessThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual < expected,
      `expected ${actual} to be less than ${expected}`,
      `expected ${actual} to be not less than ${expected}`,
      actual,
      expected
    );
  });
  def("toBeLessThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual <= expected,
      `expected ${actual} to be less than or equal to ${expected}`,
      `expected ${actual} to be not less than or equal to ${expected}`,
      actual,
      expected
    );
  });
  def("toBeNaN", function() {
    return this.be.NaN;
  });
  def("toBeUndefined", function() {
    return this.be.undefined;
  });
  def("toBeNull", function() {
    return this.be.null;
  });
  def("toBeDefined", function() {
    const negate = utils2.flag(this, "negate");
    utils2.flag(this, "negate", false);
    if (negate)
      return this.be.undefined;
    return this.not.be.undefined;
  });
  def("toBeTypeOf", function(expected) {
    const actual = typeof this._obj;
    const equal = expected === actual;
    return this.assert(
      equal,
      "expected #{this} to be type of #{exp}",
      "expected #{this} not to be type of #{exp}",
      expected,
      actual
    );
  });
  def("toBeInstanceOf", function(obj) {
    return this.instanceOf(obj);
  });
  def("toHaveLength", function(length2) {
    return this.have.length(length2);
  });
  def("toHaveProperty", function(...args) {
    if (Array.isArray(args[0]))
      args[0] = args[0].map((key) => String(key).replace(/([.[\]])/g, "\\$1")).join(".");
    const actual = this._obj;
    const [propertyName, expected] = args;
    const getValue2 = () => {
      const hasOwn2 = Object.prototype.hasOwnProperty.call(actual, propertyName);
      if (hasOwn2)
        return { value: actual[propertyName], exists: true };
      return utils2.getPathInfo(actual, propertyName);
    };
    const { value, exists } = getValue2();
    const pass = exists && (args.length === 1 || equals(expected, value));
    const valueString = args.length === 1 ? "" : ` with value ${utils2.objDisplay(expected)}`;
    return this.assert(
      pass,
      `expected #{this} to have property "${propertyName}"${valueString}`,
      `expected #{this} to not have property "${propertyName}"${valueString}`,
      actual
    );
  });
  def("toBeCloseTo", function(received, precision = 2) {
    const expected = this._obj;
    let pass = false;
    let expectedDiff = 0;
    let receivedDiff = 0;
    if (received === Infinity && expected === Infinity) {
      pass = true;
    } else if (received === -Infinity && expected === -Infinity) {
      pass = true;
    } else {
      expectedDiff = 10 ** -precision / 2;
      receivedDiff = Math.abs(expected - received);
      pass = receivedDiff < expectedDiff;
    }
    return this.assert(
      pass,
      `expected #{this} to be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`,
      `expected #{this} to not be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`,
      received,
      expected
    );
  });
  const assertIsMock = (assertion2) => {
    if (!isMockFunction(assertion2._obj))
      throw new TypeError(`${utils2.inspect(assertion2._obj)} is not a spy or a call to a spy!`);
  };
  const getSpy = (assertion2) => {
    assertIsMock(assertion2);
    return assertion2._obj;
  };
  const ordinalOf = (i2) => {
    const j = i2 % 10;
    const k = i2 % 100;
    if (j === 1 && k !== 11)
      return `${i2}st`;
    if (j === 2 && k !== 12)
      return `${i2}nd`;
    if (j === 3 && k !== 13)
      return `${i2}rd`;
    return `${i2}th`;
  };
  const formatCalls = (spy, msg, actualCall) => {
    msg += c().gray(`

Received: 
${spy.mock.calls.map((callArg, i2) => {
      let methodCall = c().bold(`    ${ordinalOf(i2 + 1)} ${spy.getMockName()} call:

`);
      if (actualCall)
        methodCall += diff(actualCall, callArg, { showLegend: false });
      else
        methodCall += stringify(callArg).split("\n").map((line) => `    ${line}`).join("\n");
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
    msg += c().gray(`

Number of calls: ${c().bold(spy.mock.calls.length)}
`);
    return msg;
  };
  const formatReturns = (spy, msg, actualReturn) => {
    msg += c().gray(`

Received: 
${spy.mock.results.map((callReturn, i2) => {
      let methodCall = c().bold(`    ${ordinalOf(i2 + 1)} ${spy.getMockName()} call return:

`);
      if (actualReturn)
        methodCall += diff(actualReturn, callReturn.value, { showLegend: false });
      else
        methodCall += stringify(callReturn).split("\n").map((line) => `    ${line}`).join("\n");
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
    msg += c().gray(`

Number of calls: ${c().bold(spy.mock.calls.length)}
`);
    return msg;
  };
  def(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(number2) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(
      callCount === number2,
      `expected "${spyName}" to be called #{exp} times`,
      `expected "${spyName}" to not be called #{exp} times`,
      number2,
      callCount
    );
  });
  def("toHaveBeenCalledOnce", function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(
      callCount === 1,
      `expected "${spyName}" to be called once`,
      `expected "${spyName}" to not be called once`,
      1,
      callCount
    );
  });
  def(["toHaveBeenCalled", "toBeCalled"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const called = spy.mock.calls.length > 0;
    const isNot = utils2.flag(this, "negate");
    let msg = utils2.getMessage(
      this,
      [
        called,
        `expected "${spyName}" to be called at least once`,
        `expected "${spyName}" to not be called at all`,
        true,
        called
      ]
    );
    if (called && isNot)
      msg = formatCalls(spy, msg);
    if (called && isNot || !called && !isNot) {
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveBeenCalledWith", "toBeCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.calls.some((callArg) => equals(callArg, args, [iterableEquality]));
    const isNot = utils2.flag(this, "negate");
    let msg = utils2.getMessage(
      this,
      [
        pass,
        `expected "${spyName}" to be called with arguments: #{exp}`,
        `expected "${spyName}" to not be called with arguments: #{exp}`,
        args
      ]
    );
    if (pass && isNot || !pass && !isNot) {
      msg = formatCalls(spy, msg, args);
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveBeenNthCalledWith", "nthCalledWith"], function(times, ...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const nthCall = spy.mock.calls[times - 1];
    this.assert(
      equals(nthCall, args, [iterableEquality]),
      `expected ${ordinalOf(times)} "${spyName}" call to have been called with #{exp}`,
      `expected ${ordinalOf(times)} "${spyName}" call to not have been called with #{exp}`,
      args,
      nthCall
    );
  });
  def(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
    this.assert(
      equals(lastCall, args, [iterableEquality]),
      `expected last "${spyName}" call to have been called with #{exp}`,
      `expected last "${spyName}" call to not have been called with #{exp}`,
      args,
      lastCall
    );
  });
  def(["toThrow", "toThrowError"], function(expected) {
    if (typeof expected === "string" || typeof expected === "undefined" || expected instanceof RegExp)
      return this.throws(expected);
    const obj = this._obj;
    const promise2 = utils2.flag(this, "promise");
    const isNot = utils2.flag(this, "negate");
    let thrown = null;
    if (promise2 === "rejects") {
      thrown = obj;
    } else if (promise2 === "resolves" && typeof obj !== "function") {
      if (!isNot) {
        const message = utils2.flag(this, "message") || "expected promise to throw an error, but it didn't";
        const error2 = {
          showDiff: false
        };
        throw new AssertionError(message, error2, utils2.flag(this, "ssfi"));
      } else {
        return;
      }
    } else {
      try {
        obj();
      } catch (err) {
        thrown = err;
      }
    }
    if (typeof expected === "function") {
      const name2 = expected.name || expected.prototype.constructor.name;
      return this.assert(
        thrown && thrown instanceof expected,
        `expected error to be instance of ${name2}`,
        `expected error not to be instance of ${name2}`,
        expected,
        thrown
      );
    }
    if (expected instanceof Error) {
      return this.assert(
        thrown && expected.message === thrown.message,
        `expected error to have message: ${expected.message}`,
        `expected error not to have message: ${expected.message}`,
        expected.message,
        thrown && thrown.message
      );
    }
    if (typeof expected === "object" && "asymmetricMatch" in expected && typeof expected.asymmetricMatch === "function") {
      const matcher = expected;
      return this.assert(
        thrown && matcher.asymmetricMatch(thrown),
        "expected error to match asymmetric matcher",
        "expected error not to match asymmetric matcher",
        matcher.toString(),
        thrown
      );
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof expected}"`);
  });
  def(["toHaveReturned", "toReturn"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const calledAndNotThrew = spy.mock.calls.length > 0 && spy.mock.results.some(({ type: type2 }) => type2 !== "throw");
    this.assert(
      calledAndNotThrew,
      `expected "${spyName}" to be successfully called at least once`,
      `expected "${spyName}" to not be successfully called`,
      calledAndNotThrew,
      !calledAndNotThrew
    );
  });
  def(["toHaveReturnedTimes", "toReturnTimes"], function(times) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const successfulReturns = spy.mock.results.reduce((success, { type: type2 }) => type2 === "throw" ? success : ++success, 0);
    this.assert(
      successfulReturns === times,
      `expected "${spyName}" to be successfully called ${times} times`,
      `expected "${spyName}" to not be successfully called ${times} times`,
      `expected number of returns: ${times}`,
      `received number of returns: ${successfulReturns}`
    );
  });
  def(["toHaveReturnedWith", "toReturnWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.results.some(({ type: type2, value: result }) => type2 === "return" && equals(value, result));
    const isNot = utils2.flag(this, "negate");
    let msg = utils2.getMessage(
      this,
      [
        pass,
        `expected "${spyName}" to return with: #{exp} at least once`,
        `expected "${spyName}" to not return with: #{exp}`,
        value
      ]
    );
    if (pass && isNot || !pass && !isNot) {
      msg = formatReturns(spy, msg, value);
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveLastReturnedWith", "lastReturnedWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const { value: lastResult } = spy.mock.results[spy.mock.results.length - 1];
    const pass = equals(lastResult, value);
    this.assert(
      pass,
      `expected last "${spyName}" call to return #{exp}`,
      `expected last "${spyName}" call to not return #{exp}`,
      value,
      lastResult
    );
  });
  def(["toHaveNthReturnedWith", "nthReturnedWith"], function(nthCall, value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const isNot = utils2.flag(this, "negate");
    const { type: callType, value: callResult } = spy.mock.results[nthCall - 1];
    const ordinalCall = `${ordinalOf(nthCall)} call`;
    if (!isNot && callType === "throw")
      chai2.assert.fail(`expected ${ordinalCall} to return #{exp}, but instead it threw an error`);
    const nthCallReturn = equals(callResult, value);
    this.assert(
      nthCallReturn,
      `expected ${ordinalCall} "${spyName}" call to return #{exp}`,
      `expected ${ordinalCall} "${spyName}" call to not return #{exp}`,
      value,
      callResult
    );
  });
  def("toSatisfy", function(matcher, message) {
    return this.be.satisfy(matcher, message);
  });
  utils2.addProperty(chai2.Assertion.prototype, "resolves", function __VITEST_RESOLVES__() {
    utils2.flag(this, "promise", "resolves");
    utils2.flag(this, "error", new Error("resolves"));
    const test3 = utils2.flag(this, "vitest-test");
    const obj = utils2.flag(this, "object");
    if (typeof (obj == null ? void 0 : obj.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof obj}'.`);
    const proxy2 = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai2.Assertion ? proxy2 : result;
        return async (...args) => {
          const promise2 = obj.then(
            (value) => {
              utils2.flag(this, "object", value);
              return result.call(this, ...args);
            },
            (err) => {
              throw new Error(`promise rejected "${String(err)}" instead of resolving`);
            }
          );
          return recordAsyncExpect$1(test3, promise2);
        };
      }
    });
    return proxy2;
  });
  utils2.addProperty(chai2.Assertion.prototype, "rejects", function __VITEST_REJECTS__() {
    utils2.flag(this, "promise", "rejects");
    utils2.flag(this, "error", new Error("rejects"));
    const test3 = utils2.flag(this, "vitest-test");
    const obj = utils2.flag(this, "object");
    const wrapper = typeof obj === "function" ? obj() : obj;
    if (typeof (wrapper == null ? void 0 : wrapper.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof wrapper}'.`);
    const proxy2 = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai2.Assertion ? proxy2 : result;
        return async (...args) => {
          const promise2 = wrapper.then(
            (value) => {
              throw new Error(`promise resolved "${String(value)}" instead of rejecting`);
            },
            (err) => {
              utils2.flag(this, "object", err);
              return result.call(this, ...args);
            }
          );
          return recordAsyncExpect$1(test3, promise2);
        };
      }
    });
    return proxy2;
  });
};
function getMatcherState(assertion2, expect2) {
  const obj = assertion2._obj;
  const isNot = util.flag(assertion2, "negate");
  const promise2 = util.flag(assertion2, "promise") || "";
  const jestUtils = {
    ...getMatcherUtils(),
    diff,
    stringify,
    iterableEquality,
    subsetEquality
  };
  const matcherState = {
    ...getState(expect2),
    isNot,
    utils: jestUtils,
    promise: promise2,
    equals,
    // needed for built-in jest-snapshots, but we don't use it
    suppressedErrors: []
  };
  return {
    state: matcherState,
    isNot,
    obj
  };
}
class JestExtendError extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.actual = actual;
    this.expected = expected;
  }
}
function JestExtendPlugin(expect2, matchers) {
  return (c, utils2) => {
    Object.entries(matchers).forEach(([expectAssertionName, expectAssertion]) => {
      function expectWrapper(...args) {
        const { state, isNot, obj } = getMatcherState(this, expect2);
        const result = expectAssertion.call(state, obj, ...args);
        if (result && typeof result === "object" && result instanceof Promise) {
          return result.then(({ pass: pass2, message: message2, actual: actual2, expected: expected2 }) => {
            if (pass2 && isNot || !pass2 && !isNot)
              throw new JestExtendError(message2(), actual2, expected2);
          });
        }
        const { pass, message, actual, expected } = result;
        if (pass && isNot || !pass && !isNot)
          throw new JestExtendError(message(), actual, expected);
      }
      utils2.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, expectAssertionName, expectWrapper);
      utils2.addMethod(c.Assertion.prototype, expectAssertionName, expectWrapper);
      class CustomMatcher extends AsymmetricMatcher$1 {
        constructor(inverse = false, ...sample) {
          super(sample, inverse);
        }
        asymmetricMatch(other) {
          const { pass } = expectAssertion.call(
            this.getMatcherContext(expect2),
            other,
            ...this.sample
          );
          return this.inverse ? !pass : pass;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${expectAssertionName}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      Object.defineProperty(expect2, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(false, ...sample),
        writable: true
      });
      Object.defineProperty(expect2.not, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(true, ...sample),
        writable: true
      });
    });
  };
}
const JestExtend = (chai2, utils2) => {
  utils2.addMethod(chai2.expect, "extend", (expect2, expects) => {
    chai2.use(JestExtendPlugin(expect2, expects));
  });
};
var naturalCompare$1 = { exports: {} };
/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */
var naturalCompare = function(a, b2) {
  var i2, codeA, codeB = 1, posA = 0, posB = 0, alphabet = String.alphabet;
  function getCode(str, pos, code2) {
    if (code2) {
      for (i2 = pos; code2 = getCode(str, i2), code2 < 76 && code2 > 65; )
        ++i2;
      return +str.slice(pos - 1, i2);
    }
    code2 = alphabet && alphabet.indexOf(str.charAt(pos));
    return code2 > -1 ? code2 + 76 : (code2 = str.charCodeAt(pos) || 0, code2 < 45 || code2 > 127) ? code2 : code2 < 46 ? 65 : code2 < 48 ? code2 - 1 : code2 < 58 ? code2 + 18 : code2 < 65 ? code2 - 11 : code2 < 91 ? code2 + 11 : code2 < 97 ? code2 - 37 : code2 < 123 ? code2 + 5 : code2 - 63;
  }
  if ((a += "") != (b2 += ""))
    for (; codeB; ) {
      codeA = getCode(a, posA++);
      codeB = getCode(b2, posB++);
      if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
        codeA = getCode(a, posA, posA);
        codeB = getCode(b2, posB, posA = i2);
        posB = i2;
      }
      if (codeA != codeB)
        return codeA < codeB ? -1 : 1;
    }
  return 0;
};
try {
  naturalCompare$1.exports = naturalCompare;
} catch (e) {
  String.naturalCompare = naturalCompare;
}
function notNullish(v) {
  return v != null;
}
function isPrimitive(value) {
  return value === null || typeof value !== "function" && typeof value !== "object";
}
function isObject$1(item2) {
  return item2 != null && typeof item2 === "object" && !Array.isArray(item2);
}
function getCallLastIndex(code2) {
  let charIndex = -1;
  let inString = null;
  let startedBracers = 0;
  let endedBracers = 0;
  let beforeChar = null;
  while (charIndex <= code2.length) {
    beforeChar = code2[charIndex];
    charIndex++;
    const char = code2[charIndex];
    const isCharString = char === '"' || char === "'" || char === "`";
    if (isCharString && beforeChar !== "\\") {
      if (inString === char)
        inString = null;
      else if (!inString)
        inString = char;
    }
    if (!inString) {
      if (char === "(")
        startedBracers++;
      if (char === ")")
        endedBracers++;
    }
    if (startedBracers && endedBracers && startedBracers === endedBracers)
      return charIndex;
  }
  return null;
}
let getPromiseValue = () => "Promise{…}";
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue = (value, options) => {
      const [state, innerValue] = getPromiseDetails(value);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    };
  }
} catch (notNode) {
}
let nodeInspect = false;
try {
  const nodeUtil2 = require("util");
  nodeInspect = nodeUtil2.inspect ? nodeUtil2.inspect.custom : false;
} catch (noNodeInspect) {
  nodeInspect = false;
}
function normalizeWindowsPath(input2 = "") {
  if (!input2 || !input2.includes("\\")) {
    return input2;
  }
  return input2.replace(/\\/g, "/");
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const lineSplitRE = /\r?\n/;
const stackIgnorePatterns = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/"
];
function extractLocation(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts)
    return [urlLike];
  return [parts[1], parts[2] || void 0, parts[3] || void 0];
}
function parseSingleStack(raw) {
  let line = raw.trim();
  if (line.includes("(eval "))
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber)
    return null;
  if (method.startsWith("async "))
    method = method.slice(6);
  if (file.startsWith("file://"))
    file = file.slice(7);
  file = resolve(file);
  return {
    method,
    file,
    line: parseInt(lineNumber),
    column: parseInt(columnNumber)
  };
}
function parseStacktrace(stack, ignore = stackIgnorePatterns) {
  const stackFrames = stack.split("\n").map((raw) => {
    const stack2 = parseSingleStack(raw);
    if (!stack2 || ignore.length && ignore.some((p) => stack2.file.match(p)))
      return null;
    return stack2;
  }).filter(notNullish);
  return stackFrames;
}
function parseErrorStacktrace(e, ignore = stackIgnorePatterns) {
  if (!e || isPrimitive(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const stackStr = e.stack || e.stackStr || "";
  const stackFrames = parseStacktrace(stackStr, ignore);
  e.stacks = stackFrames;
  return stackFrames;
}
function positionToOffset(source, lineNumber, columnNumber) {
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let start = 0;
  if (lineNumber > lines.length)
    return source.length;
  for (let i2 = 0; i2 < lineNumber - 1; i2++)
    start += lines[i2].length + nl;
  return start + columnNumber;
}
function offsetToLineNumber(source, offset) {
  if (offset > source.length) {
    throw new Error(
      `offset is longer than source length! offset ${offset} > length ${source.length}`
    );
  }
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let counted = 0;
  let line = 0;
  for (; line < lines.length; line++) {
    const lineLength = lines[line].length + nl;
    if (counted + lineLength >= offset)
      break;
    counted += lineLength;
  }
  return line + 1;
}
const serialize$1 = (val, config2, indentation, depth, refs, printer2) => {
  const name2 = val.getMockName();
  const nameString = name2 === "vi.fn()" ? "" : ` ${name2}`;
  let callsString = "";
  if (val.mock.calls.length !== 0) {
    const indentationNext = indentation + config2.indent;
    callsString = ` {${config2.spacingOuter}${indentationNext}"calls": ${printer2(val.mock.calls, config2, indentationNext, depth, refs)}${config2.min ? ", " : ","}${config2.spacingOuter}${indentationNext}"results": ${printer2(val.mock.results, config2, indentationNext, depth, refs)}${config2.min ? "" : ","}${config2.spacingOuter}${indentation}}`;
  }
  return `[MockFunction${nameString}]${callsString}`;
};
const test2 = (val) => val && !!val._isMockFunction;
const plugin = { serialize: serialize$1, test: test2 };
const {
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent,
  AsymmetricMatcher: AsymmetricMatcher2
} = plugins_1;
let PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher2,
  plugin
];
function addSerializer(plugin2) {
  PLUGINS = [plugin2].concat(PLUGINS);
}
function getSerializers() {
  return PLUGINS;
}
function testNameToKey(testName2, count) {
  return `${testName2} ${count}`;
}
function keyToTestName(key) {
  if (!/ \d+$/.test(key))
    throw new Error("Snapshot keys must end with a number.");
  return key.replace(/ \d+$/, "");
}
function getSnapshotData(content, options) {
  const update = options.updateSnapshot;
  const data = /* @__PURE__ */ Object.create(null);
  let snapshotContents = "";
  let dirty = false;
  if (content != null) {
    try {
      snapshotContents = content;
      const populate = new Function("exports", snapshotContents);
      populate(data);
    } catch {
    }
  }
  const isInvalid = snapshotContents;
  if ((update === "all" || update === "new") && isInvalid)
    dirty = true;
  return { data, dirty };
}
function addExtraLineBreaks(string2) {
  return string2.includes("\n") ? `
${string2}
` : string2;
}
function removeExtraLineBreaks(string2) {
  return string2.length > 2 && string2.startsWith("\n") && string2.endsWith("\n") ? string2.slice(1, -1) : string2;
}
const escapeRegex = true;
const printFunctionName = false;
function serialize(val, indent = 2, formatOverrides = {}) {
  return normalizeNewlines(
    format_1$1(val, {
      escapeRegex,
      indent,
      plugins: getSerializers(),
      printFunctionName,
      ...formatOverrides
    })
  );
}
function escapeBacktickString(str) {
  return str.replace(/`|\\|\${/g, "\\$&");
}
function printBacktickString(str) {
  return `\`${escapeBacktickString(str)}\``;
}
async function ensureDirectoryExists(environment, filePath) {
  try {
    await environment.prepareDirectory(join(dirname(filePath)));
  } catch {
  }
}
function normalizeNewlines(string2) {
  return string2.replace(/\r\n|\r/g, "\n");
}
async function saveSnapshotFile(environment, snapshotData, snapshotPath) {
  const snapshots = Object.keys(snapshotData).sort(naturalCompare$1.exports).map(
    (key) => `exports[${printBacktickString(key)}] = ${printBacktickString(normalizeNewlines(snapshotData[key]))};`
  );
  const content = `${environment.getHeader()}

${snapshots.join("\n\n")}
`;
  const oldContent = await environment.readSnapshotFile(snapshotPath);
  const skipWriting = oldContent != null && oldContent === content;
  if (skipWriting)
    return;
  await ensureDirectoryExists(environment, snapshotPath);
  await environment.saveSnapshotFile(
    snapshotPath,
    content
  );
}
function prepareExpected(expected) {
  function findStartIndent() {
    var _a2, _b;
    const matchObject = /^( +)}\s+$/m.exec(expected || "");
    const objectIndent = (_a2 = matchObject == null ? void 0 : matchObject[1]) == null ? void 0 : _a2.length;
    if (objectIndent)
      return objectIndent;
    const matchText = /^\n( +)"/.exec(expected || "");
    return ((_b = matchText == null ? void 0 : matchText[1]) == null ? void 0 : _b.length) || 0;
  }
  const startIndent = findStartIndent();
  let expectedTrimmed = expected == null ? void 0 : expected.trim();
  if (startIndent) {
    expectedTrimmed = expectedTrimmed == null ? void 0 : expectedTrimmed.replace(new RegExp(`^${" ".repeat(startIndent)}`, "gm"), "").replace(/ +}$/, "}");
  }
  return expectedTrimmed;
}
function deepMergeArray(target = [], source = []) {
  const mergedOutput = Array.from(target);
  source.forEach((sourceElement, index) => {
    const targetElement = mergedOutput[index];
    if (Array.isArray(target[index])) {
      mergedOutput[index] = deepMergeArray(target[index], sourceElement);
    } else if (isObject$1(targetElement)) {
      mergedOutput[index] = deepMergeSnapshot(target[index], sourceElement);
    } else {
      mergedOutput[index] = sourceElement;
    }
  });
  return mergedOutput;
}
function deepMergeSnapshot(target, source) {
  if (isObject$1(target) && isObject$1(source)) {
    const mergedOutput = { ...target };
    Object.keys(source).forEach((key) => {
      if (isObject$1(source[key]) && !source[key].$$typeof) {
        if (!(key in target))
          Object.assign(mergedOutput, { [key]: source[key] });
        else
          mergedOutput[key] = deepMergeSnapshot(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        mergedOutput[key] = deepMergeArray(target[key], source[key]);
      } else {
        Object.assign(mergedOutput, { [key]: source[key] });
      }
    });
    return mergedOutput;
  } else if (Array.isArray(target) && Array.isArray(source)) {
    return deepMergeArray(target, source);
  }
  return target;
}
async function saveInlineSnapshots(environment, snapshots) {
  const MagicString2 = (await Promise.resolve().then(() => magicString_es)).default;
  const files2 = new Set(snapshots.map((i2) => i2.file));
  await Promise.all(Array.from(files2).map(async (file) => {
    const snaps = snapshots.filter((i2) => i2.file === file);
    const code2 = await environment.readSnapshotFile(file);
    const s = new MagicString2(code2);
    for (const snap of snaps) {
      const index = positionToOffset(code2, snap.line, snap.column);
      replaceInlineSnap(code2, s, index, snap.snapshot);
    }
    const transformed = s.toString();
    if (transformed !== code2)
      await environment.saveSnapshotFile(file, transformed);
  }));
}
const startObjectRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*({)/m;
function replaceObjectSnap(code2, s, index, newSnap) {
  code2 = code2.slice(index);
  const startMatch = startObjectRegex.exec(code2);
  if (!startMatch)
    return false;
  code2 = code2.slice(startMatch.index);
  const charIndex = getCallLastIndex(code2);
  if (charIndex === null)
    return false;
  s.appendLeft(index + startMatch.index + charIndex, `, ${prepareSnapString(newSnap, code2, index)}`);
  return true;
}
function prepareSnapString(snap, source, index) {
  const lineNumber = offsetToLineNumber(source, index);
  const line = source.split(lineSplitRE)[lineNumber - 1];
  const indent = line.match(/^\s*/)[0] || "";
  const indentNext = indent.includes("	") ? `${indent}	` : `${indent}  `;
  const lines = snap.trim().replace(/\\/g, "\\\\").split(/\n/g);
  const isOneline = lines.length <= 1;
  const quote = isOneline ? "'" : "`";
  if (isOneline)
    return `'${lines.join("\n").replace(/'/g, "\\'")}'`;
  else
    return `${quote}
${lines.map((i2) => i2 ? indentNext + i2 : "").join("\n").replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${indent}${quote}`;
}
const startRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*[\w_$]*(['"`\)])/m;
function replaceInlineSnap(code2, s, index, newSnap) {
  const startMatch = startRegex.exec(code2.slice(index));
  if (!startMatch)
    return replaceObjectSnap(code2, s, index, newSnap);
  const quote = startMatch[1];
  const startIndex = index + startMatch.index + startMatch[0].length;
  const snapString = prepareSnapString(newSnap, code2, index);
  if (quote === ")") {
    s.appendRight(startIndex - 1, snapString);
    return true;
  }
  const quoteEndRE = new RegExp(`(?:^|[^\\\\])${quote}`);
  const endMatch = quoteEndRE.exec(code2.slice(startIndex));
  if (!endMatch)
    return false;
  const endIndex = startIndex + endMatch.index + endMatch[0].length;
  s.overwrite(startIndex - 1, endIndex, snapString);
  return true;
}
const INDENTATION_REGEX = /^([^\S\n]*)\S/m;
function stripSnapshotIndentation(inlineSnapshot) {
  const match = inlineSnapshot.match(INDENTATION_REGEX);
  if (!match || !match[1]) {
    return inlineSnapshot;
  }
  const indentation = match[1];
  const lines = inlineSnapshot.split(/\n/g);
  if (lines.length <= 2) {
    return inlineSnapshot;
  }
  if (lines[0].trim() !== "" || lines[lines.length - 1].trim() !== "") {
    return inlineSnapshot;
  }
  for (let i2 = 1; i2 < lines.length - 1; i2++) {
    if (lines[i2] !== "") {
      if (lines[i2].indexOf(indentation) !== 0) {
        return inlineSnapshot;
      }
      lines[i2] = lines[i2].substring(indentation.length);
    }
  }
  lines[lines.length - 1] = "";
  inlineSnapshot = lines.join("\n");
  return inlineSnapshot;
}
async function saveRawSnapshots(environment, snapshots) {
  await Promise.all(snapshots.map(async (snap) => {
    if (!snap.readonly)
      await environment.saveSnapshotFile(snap.file, snap.snapshot);
  }));
}
class SnapshotState {
  constructor(testFilePath, snapshotPath, snapshotContent, options) {
    this.testFilePath = testFilePath;
    this.snapshotPath = snapshotPath;
    const { data, dirty } = getSnapshotData(
      snapshotContent,
      options
    );
    this._fileExists = snapshotContent != null;
    this._initialData = data;
    this._snapshotData = data;
    this._dirty = dirty;
    this._inlineSnapshots = [];
    this._rawSnapshots = [];
    this._uncheckedKeys = new Set(Object.keys(this._snapshotData));
    this._counters = /* @__PURE__ */ new Map();
    this.expand = options.expand || false;
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this._updateSnapshot = options.updateSnapshot;
    this.updated = 0;
    this._snapshotFormat = {
      printBasicPrototype: false,
      ...options.snapshotFormat
    };
    this._environment = options.snapshotEnvironment;
  }
  static async create(testFilePath, options) {
    const snapshotPath = await options.snapshotEnvironment.resolvePath(testFilePath);
    const content = await options.snapshotEnvironment.readSnapshotFile(snapshotPath);
    return new SnapshotState(testFilePath, snapshotPath, content, options);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(testName2) {
    this._uncheckedKeys.forEach((uncheckedKey) => {
      if (keyToTestName(uncheckedKey) === testName2)
        this._uncheckedKeys.delete(uncheckedKey);
    });
  }
  _inferInlineSnapshotStack(stacks) {
    const promiseIndex = stacks.findIndex((i2) => i2.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (promiseIndex !== -1)
      return stacks[promiseIndex + 3];
    const stackIndex = stacks.findIndex((i2) => i2.method.includes("__INLINE_SNAPSHOT__"));
    return stackIndex !== -1 ? stacks[stackIndex + 2] : null;
  }
  _addSnapshot(key, receivedSerialized, options) {
    this._dirty = true;
    if (options.isInline) {
      const stacks = parseErrorStacktrace(options.error || new Error("snapshot"), []);
      const stack = this._inferInlineSnapshotStack(stacks);
      if (!stack) {
        throw new Error(
          `@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(stacks)}`
        );
      }
      stack.column--;
      this._inlineSnapshots.push({
        snapshot: receivedSerialized,
        ...stack
      });
    } else if (options.rawSnapshot) {
      this._rawSnapshots.push({
        ...options.rawSnapshot,
        snapshot: receivedSerialized
      });
    } else {
      this._snapshotData[key] = receivedSerialized;
    }
  }
  clear() {
    this._snapshotData = this._initialData;
    this._counters = /* @__PURE__ */ new Map();
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this.updated = 0;
    this._dirty = false;
  }
  async save() {
    const hasExternalSnapshots = Object.keys(this._snapshotData).length;
    const hasInlineSnapshots = this._inlineSnapshots.length;
    const hasRawSnapshots = this._rawSnapshots.length;
    const isEmpty = !hasExternalSnapshots && !hasInlineSnapshots && !hasRawSnapshots;
    const status = {
      deleted: false,
      saved: false
    };
    if ((this._dirty || this._uncheckedKeys.size) && !isEmpty) {
      if (hasExternalSnapshots) {
        await saveSnapshotFile(this._environment, this._snapshotData, this.snapshotPath);
        this._fileExists = true;
      }
      if (hasInlineSnapshots)
        await saveInlineSnapshots(this._environment, this._inlineSnapshots);
      if (hasRawSnapshots)
        await saveRawSnapshots(this._environment, this._rawSnapshots);
      status.saved = true;
    } else if (!hasExternalSnapshots && this._fileExists) {
      if (this._updateSnapshot === "all") {
        await this._environment.removeSnapshotFile(this.snapshotPath);
        this._fileExists = false;
      }
      status.deleted = true;
    }
    return status;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    if (this._updateSnapshot === "all" && this._uncheckedKeys.size) {
      this._dirty = true;
      this._uncheckedKeys.forEach((key) => delete this._snapshotData[key]);
      this._uncheckedKeys.clear();
    }
  }
  match({
    testName: testName2,
    received,
    key,
    inlineSnapshot,
    isInline,
    error: error2,
    rawSnapshot
  }) {
    this._counters.set(testName2, (this._counters.get(testName2) || 0) + 1);
    const count = Number(this._counters.get(testName2));
    if (!key)
      key = testNameToKey(testName2, count);
    if (!(isInline && this._snapshotData[key] !== void 0))
      this._uncheckedKeys.delete(key);
    let receivedSerialized = rawSnapshot && typeof received === "string" ? received : serialize(received, void 0, this._snapshotFormat);
    if (!rawSnapshot)
      receivedSerialized = addExtraLineBreaks(receivedSerialized);
    if (rawSnapshot) {
      if (rawSnapshot.content && rawSnapshot.content.match(/\r\n/) && !receivedSerialized.match(/\r\n/))
        rawSnapshot.content = normalizeNewlines(rawSnapshot.content);
    }
    const expected = isInline ? inlineSnapshot : rawSnapshot ? rawSnapshot.content : this._snapshotData[key];
    const expectedTrimmed = prepareExpected(expected);
    const pass = expectedTrimmed === prepareExpected(receivedSerialized);
    const hasSnapshot = expected !== void 0;
    const snapshotIsPersisted = isInline || this._fileExists || rawSnapshot && rawSnapshot.content != null;
    if (pass && !isInline && !rawSnapshot) {
      this._snapshotData[key] = receivedSerialized;
    }
    if (hasSnapshot && this._updateSnapshot === "all" || (!hasSnapshot || !snapshotIsPersisted) && (this._updateSnapshot === "new" || this._updateSnapshot === "all")) {
      if (this._updateSnapshot === "all") {
        if (!pass) {
          if (hasSnapshot)
            this.updated++;
          else
            this.added++;
          this._addSnapshot(key, receivedSerialized, { error: error2, isInline, rawSnapshot });
        } else {
          this.matched++;
        }
      } else {
        this._addSnapshot(key, receivedSerialized, { error: error2, isInline, rawSnapshot });
        this.added++;
      }
      return {
        actual: "",
        count,
        expected: "",
        key,
        pass: true
      };
    } else {
      if (!pass) {
        this.unmatched++;
        return {
          actual: removeExtraLineBreaks(receivedSerialized),
          count,
          expected: expectedTrimmed !== void 0 ? removeExtraLineBreaks(expectedTrimmed) : void 0,
          key,
          pass: false
        };
      } else {
        this.matched++;
        return {
          actual: "",
          count,
          expected: "",
          key,
          pass: true
        };
      }
    }
  }
  async pack() {
    const snapshot = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: false,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    };
    const uncheckedCount = this.getUncheckedCount();
    const uncheckedKeys = this.getUncheckedKeys();
    if (uncheckedCount)
      this.removeUncheckedKeys();
    const status = await this.save();
    snapshot.fileDeleted = status.deleted;
    snapshot.added = this.added;
    snapshot.matched = this.matched;
    snapshot.unmatched = this.unmatched;
    snapshot.updated = this.updated;
    snapshot.unchecked = !status.deleted ? uncheckedCount : 0;
    snapshot.uncheckedKeys = Array.from(uncheckedKeys);
    return snapshot;
  }
}
function createMismatchError(message, actual, expected) {
  const error2 = new Error(message);
  Object.defineProperty(error2, "actual", {
    value: actual,
    enumerable: true,
    configurable: true,
    writable: true
  });
  Object.defineProperty(error2, "expected", {
    value: expected,
    enumerable: true,
    configurable: true,
    writable: true
  });
  return error2;
}
class SnapshotClient {
  constructor(Service = SnapshotState) {
    this.Service = Service;
    this.snapshotStateMap = /* @__PURE__ */ new Map();
  }
  async setTest(filepath, name2, options) {
    var _a2;
    this.filepath = filepath;
    this.name = name2;
    if (((_a2 = this.snapshotState) == null ? void 0 : _a2.testFilePath) !== filepath) {
      this.resetCurrent();
      if (!this.getSnapshotState(filepath)) {
        this.snapshotStateMap.set(
          filepath,
          await this.Service.create(
            filepath,
            options
          )
        );
      }
      this.snapshotState = this.getSnapshotState(filepath);
    }
  }
  getSnapshotState(filepath) {
    return this.snapshotStateMap.get(filepath);
  }
  clearTest() {
    this.filepath = void 0;
    this.name = void 0;
  }
  skipTestSnapshots(name2) {
    var _a2;
    (_a2 = this.snapshotState) == null ? void 0 : _a2.markSnapshotsAsCheckedForTest(name2);
  }
  /**
   * Should be overridden by the consumer.
   *
   * Vitest checks equality with @vitest/expect.
   */
  equalityCheck(received, expected) {
    return received === expected;
  }
  assert(options) {
    const {
      filepath = this.filepath,
      name: name2 = this.name,
      message,
      isInline = false,
      properties,
      inlineSnapshot,
      error: error2,
      errorMessage,
      rawSnapshot
    } = options;
    let { received } = options;
    if (!filepath)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof properties === "object") {
      if (typeof received !== "object" || !received)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        const pass2 = this.equalityCheck(received, properties);
        if (!pass2)
          throw createMismatchError("Snapshot properties mismatched", received, properties);
        else
          received = deepMergeSnapshot(received, properties);
      } catch (err) {
        err.message = errorMessage || "Snapshot mismatched";
        throw err;
      }
    }
    const testName2 = [
      name2,
      ...message ? [message] : []
    ].join(" > ");
    const snapshotState = this.getSnapshotState(filepath);
    const { actual, expected, key, pass } = snapshotState.match({
      testName: testName2,
      received,
      isInline,
      error: error2,
      inlineSnapshot,
      rawSnapshot
    });
    if (!pass)
      throw createMismatchError(`Snapshot \`${key || "unknown"}\` mismatched`, actual == null ? void 0 : actual.trim(), expected == null ? void 0 : expected.trim());
  }
  async assertRaw(options) {
    if (!options.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const {
      filepath = this.filepath,
      rawSnapshot
    } = options;
    if (rawSnapshot.content == null) {
      if (!filepath)
        throw new Error("Snapshot cannot be used outside of test");
      const snapshotState = this.getSnapshotState(filepath);
      options.filepath || (options.filepath = filepath);
      rawSnapshot.file = await snapshotState.environment.resolveRawPath(filepath, rawSnapshot.file);
      rawSnapshot.content = await snapshotState.environment.readSnapshotFile(rawSnapshot.file) || void 0;
    }
    return this.assert(options);
  }
  async resetCurrent() {
    if (!this.snapshotState)
      return null;
    const result = await this.snapshotState.pack();
    this.snapshotState = void 0;
    return result;
  }
  clear() {
    this.snapshotStateMap.clear();
  }
}
function getFullName(task, separator = " > ") {
  return getNames(task).join(separator);
}
function waitNextTick() {
  const { setTimeout } = getSafeTimers();
  return new Promise((resolve2) => setTimeout(resolve2, 0));
}
async function waitForImportsToResolve() {
  await waitNextTick();
  const state = getWorkerState();
  const promises = [];
  let resolvingCount = 0;
  for (const mod of state.moduleCache.values()) {
    if (mod.promise && !mod.evaluated)
      promises.push(mod.promise);
    if (mod.resolving)
      resolvingCount++;
  }
  if (!promises.length && !resolvingCount)
    return;
  await Promise.allSettled(promises);
  await waitForImportsToResolve();
}
const benchFns = /* @__PURE__ */ new WeakMap();
const benchOptsMap = /* @__PURE__ */ new WeakMap();
createBenchmark(
  function(name2, fn2 = noop, options = {}) {
    if (!isRunningInBenchmark())
      throw new Error("`bench()` is only available in benchmark mode.");
    const task = getCurrentSuite().custom.call(this, name2);
    task.meta = {
      benchmark: true
    };
    benchFns.set(task, fn2);
    benchOptsMap.set(task, options);
  }
);
function createBenchmark(fn2) {
  const benchmark = createChainable(
    ["skip", "only", "todo"],
    fn2
  );
  benchmark.skipIf = (condition) => condition ? benchmark.skip : benchmark;
  benchmark.runIf = (condition) => condition ? benchmark : benchmark.skip;
  return benchmark;
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var chaiSubset = { exports: {} };
(function(module, exports) {
  (function() {
    (function(chaiSubset2) {
      if (typeof commonjsRequire === "function" && true && true) {
        return module.exports = chaiSubset2;
      } else {
        return chai.use(chaiSubset2);
      }
    })(function(chai2, utils2) {
      var Assertion = chai2.Assertion;
      var assertionPrototype = Assertion.prototype;
      Assertion.addMethod("containSubset", function(expected) {
        var actual = utils2.flag(this, "object");
        var showDiff = chai2.config.showDiff;
        assertionPrototype.assert.call(
          this,
          compare2(expected, actual),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          expected,
          actual,
          showDiff
        );
      });
      chai2.assert.containSubset = function(val, exp, msg) {
        new chai2.Assertion(val, msg).to.be.containSubset(exp);
      };
      function compare2(expected, actual) {
        if (expected === actual) {
          return true;
        }
        if (typeof actual !== typeof expected) {
          return false;
        }
        if (typeof expected !== "object" || expected === null) {
          return expected === actual;
        }
        if (!!expected && !actual) {
          return false;
        }
        if (Array.isArray(expected)) {
          if (typeof actual.length !== "number") {
            return false;
          }
          var aa = Array.prototype.slice.call(actual);
          return expected.every(function(exp) {
            return aa.some(function(act) {
              return compare2(exp, act);
            });
          });
        }
        if (expected instanceof Date) {
          if (actual instanceof Date) {
            return expected.getTime() === actual.getTime();
          } else {
            return false;
          }
        }
        return Object.keys(expected).every(function(key) {
          var eo = expected[key];
          var ao = actual[key];
          if (typeof eo === "object" && eo !== null && ao !== null) {
            return compare2(eo, ao);
          }
          if (typeof eo === "function") {
            return eo(ao);
          }
          return ao === eo;
        });
      }
    });
  }).call(commonjsGlobal);
})(chaiSubset);
var Subset = chaiSubset.exports;
function recordAsyncExpect(test3, promise2) {
  if (test3) {
    promise2 = promise2.finally(() => {
      const index = test3.promises.indexOf(promise2);
      if (index !== -1)
        test3.promises.splice(index, 1);
    });
    if (!test3.promises)
      test3.promises = [];
    test3.promises.push(promise2);
  }
  return promise2;
}
class VitestSnapshotClient extends SnapshotClient {
  equalityCheck(received, expected) {
    return equals(received, expected, [iterableEquality, subsetEquality]);
  }
}
let _client;
function getSnapshotClient() {
  if (!_client)
    _client = new VitestSnapshotClient();
  return _client;
}
function getErrorMessage(err) {
  if (err instanceof Error)
    return err.message;
  return err;
}
function getErrorString(expected, promise2) {
  if (typeof expected !== "function") {
    if (!promise2)
      throw new Error(`expected must be a function, received ${typeof expected}`);
    return getErrorMessage(expected);
  }
  try {
    expected();
  } catch (e) {
    return getErrorMessage(e);
  }
  throw new Error("snapshot function didn't throw");
}
const SnapshotPlugin = (chai2, utils2) => {
  const getTestNames = (test3) => {
    var _a2;
    if (!test3)
      return {};
    return {
      filepath: (_a2 = test3.file) == null ? void 0 : _a2.filepath,
      name: getNames(test3).slice(1).join(" > ")
    };
  };
  for (const key of ["matchSnapshot", "toMatchSnapshot"]) {
    utils2.addMethod(
      chai2.Assertion.prototype,
      key,
      function(properties, message) {
        const expected = utils2.flag(this, "object");
        const test3 = utils2.flag(this, "vitest-test");
        if (typeof properties === "string" && typeof message === "undefined") {
          message = properties;
          properties = void 0;
        }
        const errorMessage = utils2.flag(this, "message");
        getSnapshotClient().assert({
          received: expected,
          message,
          isInline: false,
          properties,
          errorMessage,
          ...getTestNames(test3)
        });
      }
    );
  }
  utils2.addMethod(
    chai2.Assertion.prototype,
    "toMatchFileSnapshot",
    function(file, message) {
      const expected = utils2.flag(this, "object");
      const test3 = utils2.flag(this, "vitest-test");
      const errorMessage = utils2.flag(this, "message");
      const promise2 = getSnapshotClient().assertRaw({
        received: expected,
        message,
        isInline: false,
        rawSnapshot: {
          file
        },
        errorMessage,
        ...getTestNames(test3)
      });
      return recordAsyncExpect(test3, promise2);
    }
  );
  utils2.addMethod(
    chai2.Assertion.prototype,
    "toMatchInlineSnapshot",
    function __INLINE_SNAPSHOT__(properties, inlineSnapshot, message) {
      const expected = utils2.flag(this, "object");
      const error2 = utils2.flag(this, "error");
      const test3 = utils2.flag(this, "vitest-test");
      if (typeof properties === "string") {
        message = inlineSnapshot;
        inlineSnapshot = properties;
        properties = void 0;
      }
      if (inlineSnapshot)
        inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
      const errorMessage = utils2.flag(this, "message");
      getSnapshotClient().assert({
        received: expected,
        message,
        isInline: true,
        properties,
        inlineSnapshot,
        error: error2,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils2.addMethod(
    chai2.Assertion.prototype,
    "toThrowErrorMatchingSnapshot",
    function(message) {
      const expected = utils2.flag(this, "object");
      const test3 = utils2.flag(this, "vitest-test");
      const promise2 = utils2.flag(this, "promise");
      const errorMessage = utils2.flag(this, "message");
      getSnapshotClient().assert({
        received: getErrorString(expected, promise2),
        message,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils2.addMethod(
    chai2.Assertion.prototype,
    "toThrowErrorMatchingInlineSnapshot",
    function __INLINE_SNAPSHOT__(inlineSnapshot, message) {
      const expected = utils2.flag(this, "object");
      const error2 = utils2.flag(this, "error");
      const test3 = utils2.flag(this, "vitest-test");
      const promise2 = utils2.flag(this, "promise");
      const errorMessage = utils2.flag(this, "message");
      getSnapshotClient().assert({
        received: getErrorString(expected, promise2),
        message,
        inlineSnapshot,
        isInline: true,
        error: error2,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils2.addMethod(
    chai2.expect,
    "addSnapshotSerializer",
    addSerializer
  );
};
use(JestExtend);
use(JestChaiExpect);
use(Subset);
use(SnapshotPlugin);
use(JestAsymmetricMatchers);
function createExpect(test3) {
  var _a2;
  const expect$12 = (value, message) => {
    const { assertionCalls } = getState(expect$12);
    setState({ assertionCalls: assertionCalls + 1 }, expect$12);
    const assert2 = expect(value, message);
    const _test2 = test3 || getCurrentTest();
    if (_test2)
      return assert2.withTest(_test2);
    else
      return assert2;
  };
  Object.assign(expect$12, expect);
  expect$12.getState = () => getState(expect$12);
  expect$12.setState = (state) => setState(state, expect$12);
  const globalState = getState(globalThis[GLOBAL_EXPECT]) || {};
  setState({
    // this should also add "snapshotState" that is added conditionally
    ...globalState,
    assertionCalls: 0,
    isExpectingAssertions: false,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: getCurrentEnvironment(),
    testPath: test3 ? (_a2 = test3.suite.file) == null ? void 0 : _a2.filepath : globalState.testPath,
    currentTestName: test3 ? getFullName(test3) : globalState.currentTestName
  }, expect$12);
  expect$12.extend = (matchers) => expect.extend(expect$12, matchers);
  function assertions2(expected) {
    const errorGen = () => new Error(`expected number of assertions to be ${expected}, but got ${expect$12.getState().assertionCalls}`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(errorGen(), assertions2);
    expect$12.setState({
      expectedAssertionsNumber: expected,
      expectedAssertionsNumberErrorGen: errorGen
    });
  }
  function hasAssertions() {
    const error2 = new Error("expected any number of assertion, but got none");
    if (Error.captureStackTrace)
      Error.captureStackTrace(error2, hasAssertions);
    expect$12.setState({
      isExpectingAssertions: true,
      isExpectingAssertionsError: error2
    });
  }
  util.addMethod(expect$12, "assertions", assertions2);
  util.addMethod(expect$12, "hasAssertions", hasAssertions);
  return expect$12;
}
const globalExpect = createExpect();
Object.defineProperty(globalThis, GLOBAL_EXPECT, {
  value: globalExpect,
  writable: true,
  configurable: true
});
var globalObject$1;
if (typeof commonjsGlobal !== "undefined") {
  globalObject$1 = commonjsGlobal;
} else if (typeof window !== "undefined") {
  globalObject$1 = window;
} else {
  globalObject$1 = self;
}
var global$1 = globalObject$1;
let throwsOnProto$1;
try {
  const object2 = {};
  object2.__proto__;
  throwsOnProto$1 = false;
} catch (_) {
  throwsOnProto$1 = true;
}
var throwsOnProto_1 = throwsOnProto$1;
var call = Function.call;
var throwsOnProto = throwsOnProto_1;
var disallowedProperties = [
  // ignore size because it throws from Map
  "size",
  "caller",
  "callee",
  "arguments"
];
if (throwsOnProto) {
  disallowedProperties.push("__proto__");
}
var copyPrototypeMethods = function copyPrototypeMethods2(prototype) {
  return Object.getOwnPropertyNames(prototype).reduce(
    function(result, name2) {
      if (disallowedProperties.includes(name2)) {
        return result;
      }
      if (typeof prototype[name2] !== "function") {
        return result;
      }
      result[name2] = call.bind(prototype[name2]);
      return result;
    },
    /* @__PURE__ */ Object.create(null)
  );
};
var copyPrototype$5 = copyPrototypeMethods;
var array = copyPrototype$5(Array.prototype);
var every$1 = array.every;
function hasCallsLeft(callMap, spy) {
  if (callMap[spy.id] === void 0) {
    callMap[spy.id] = 0;
  }
  return callMap[spy.id] < spy.callCount;
}
function checkAdjacentCalls(callMap, spy, index, spies2) {
  var calledBeforeNext = true;
  if (index !== spies2.length - 1) {
    calledBeforeNext = spy.calledBefore(spies2[index + 1]);
  }
  if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
    callMap[spy.id] += 1;
    return true;
  }
  return false;
}
function calledInOrder(spies2) {
  var callMap = {};
  var _spies = arguments.length > 1 ? arguments : spies2;
  return every$1(_spies, checkAdjacentCalls.bind(null, callMap));
}
var calledInOrder_1 = calledInOrder;
var functionName$1 = function functionName(func) {
  if (!func) {
    return "";
  }
  try {
    return func.displayName || func.name || // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    (String(func).match(/function ([^\s(]+)/) || [])[1];
  } catch (e) {
    return "";
  }
};
var functionName2 = functionName$1;
function className(value) {
  return value.constructor && value.constructor.name || // The next branch is for IE11 support only:
  // Because the name property is not set on the prototype
  // of the Function object, we finally try to grab the
  // name from its definition. This will never be reached
  // in node, so we are not able to test this properly.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeof value.constructor === "function" && /* istanbul ignore next */
  functionName2(value.constructor) || null;
}
var className_1 = className;
var deprecated = {};
(function(exports) {
  exports.wrap = function(func, msg) {
    var wrapped = function() {
      exports.printWarning(msg);
      return func.apply(this, arguments);
    };
    if (func.prototype) {
      wrapped.prototype = func.prototype;
    }
    return wrapped;
  };
  exports.defaultMsg = function(packageName, funcName) {
    return `${packageName}.${funcName} is deprecated and will be removed from the public API in a future version of ${packageName}.`;
  };
  exports.printWarning = function(msg) {
    if (typeof process === "object" && process.emitWarning) {
      process.emitWarning(msg);
    } else if (console.info) {
      console.info(msg);
    } else {
      console.log(msg);
    }
  };
})(deprecated);
var every = function every2(obj, fn2) {
  var pass = true;
  try {
    obj.forEach(function() {
      if (!fn2.apply(this, arguments)) {
        throw new Error();
      }
    });
  } catch (e) {
    pass = false;
  }
  return pass;
};
var sort = array.sort;
var slice = array.slice;
function comparator(a, b2) {
  var aCall = a.getCall(0);
  var bCall = b2.getCall(0);
  var aId = aCall && aCall.callId || -1;
  var bId = bCall && bCall.callId || -1;
  return aId < bId ? -1 : 1;
}
function orderByFirstCall(spies2) {
  return sort(slice(spies2), comparator);
}
var orderByFirstCall_1 = orderByFirstCall;
var copyPrototype$4 = copyPrototypeMethods;
var _function = copyPrototype$4(Function.prototype);
var copyPrototype$3 = copyPrototypeMethods;
var map = copyPrototype$3(Map.prototype);
var copyPrototype$2 = copyPrototypeMethods;
var object = copyPrototype$2(Object.prototype);
var copyPrototype$1 = copyPrototypeMethods;
var set2 = copyPrototype$1(Set.prototype);
var copyPrototype = copyPrototypeMethods;
var string = copyPrototype(String.prototype);
var prototypes = {
  array,
  function: _function,
  map,
  object,
  set: set2,
  string
};
var typeDetect = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var promiseExists = typeof Promise === "function";
    var globalObject2 = typeof self === "object" ? self : commonjsGlobal;
    var symbolExists = typeof Symbol !== "undefined";
    var mapExists = typeof Map !== "undefined";
    var setExists = typeof Set !== "undefined";
    var weakMapExists = typeof WeakMap !== "undefined";
    var weakSetExists = typeof WeakSet !== "undefined";
    var dataViewExists = typeof DataView !== "undefined";
    var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
    var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
    var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
    var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
    var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
    var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
    var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
    var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
    var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
    var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
    var toStringLeftSliceLength = 8;
    var toStringRightSliceLength = -1;
    function typeDetect2(obj) {
      var typeofObj = typeof obj;
      if (typeofObj !== "object") {
        return typeofObj;
      }
      if (obj === null) {
        return "null";
      }
      if (obj === globalObject2) {
        return "global";
      }
      if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
        return "Array";
      }
      if (typeof window === "object" && window !== null) {
        if (typeof window.location === "object" && obj === window.location) {
          return "Location";
        }
        if (typeof window.document === "object" && obj === window.document) {
          return "Document";
        }
        if (typeof window.navigator === "object") {
          if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
            return "MimeTypeArray";
          }
          if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
            return "PluginArray";
          }
        }
        if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
          if (obj.tagName === "BLOCKQUOTE") {
            return "HTMLQuoteElement";
          }
          if (obj.tagName === "TD") {
            return "HTMLTableDataCellElement";
          }
          if (obj.tagName === "TH") {
            return "HTMLTableHeaderCellElement";
          }
        }
      }
      var stringTag2 = symbolToStringTagExists && obj[Symbol.toStringTag];
      if (typeof stringTag2 === "string") {
        return stringTag2;
      }
      var objPrototype = Object.getPrototypeOf(obj);
      if (objPrototype === RegExp.prototype) {
        return "RegExp";
      }
      if (objPrototype === Date.prototype) {
        return "Date";
      }
      if (promiseExists && objPrototype === Promise.prototype) {
        return "Promise";
      }
      if (setExists && objPrototype === Set.prototype) {
        return "Set";
      }
      if (mapExists && objPrototype === Map.prototype) {
        return "Map";
      }
      if (weakSetExists && objPrototype === WeakSet.prototype) {
        return "WeakSet";
      }
      if (weakMapExists && objPrototype === WeakMap.prototype) {
        return "WeakMap";
      }
      if (dataViewExists && objPrototype === DataView.prototype) {
        return "DataView";
      }
      if (mapExists && objPrototype === mapIteratorPrototype) {
        return "Map Iterator";
      }
      if (setExists && objPrototype === setIteratorPrototype) {
        return "Set Iterator";
      }
      if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
        return "Array Iterator";
      }
      if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
        return "String Iterator";
      }
      if (objPrototype === null) {
        return "Object";
      }
      return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
    }
    return typeDetect2;
  });
})(typeDetect);
var type = typeDetect.exports;
var typeOf = function typeOf2(value) {
  return type(value).toLowerCase();
};
function valueToString(value) {
  if (value && value.toString) {
    return value.toString();
  }
  return String(value);
}
var valueToString_1 = valueToString;
var lib = {
  global: global$1,
  calledInOrder: calledInOrder_1,
  className: className_1,
  deprecated,
  every,
  functionName: functionName$1,
  orderByFirstCall: orderByFirstCall_1,
  prototypes,
  typeOf,
  valueToString: valueToString_1
};
const globalObject = lib.global;
function withGlobal(_global) {
  const userAgent = _global.navigator && _global.navigator.userAgent;
  const isRunningInIE = userAgent && userAgent.indexOf("MSIE ") > -1;
  const maxTimeout = Math.pow(2, 31) - 1;
  const idCounterStart = 1e12;
  const NOOP2 = function() {
    return void 0;
  };
  const NOOP_ARRAY = function() {
    return [];
  };
  const timeoutResult = _global.setTimeout(NOOP2, 0);
  const addTimerReturnsObject = typeof timeoutResult === "object";
  const hrtimePresent = _global.process && typeof _global.process.hrtime === "function";
  const hrtimeBigintPresent = hrtimePresent && typeof _global.process.hrtime.bigint === "function";
  const nextTickPresent = _global.process && typeof _global.process.nextTick === "function";
  const utilPromisify = _global.process && require$$0$1.promisify;
  const performancePresent = _global.performance && typeof _global.performance.now === "function";
  const hasPerformancePrototype = _global.Performance && (typeof _global.Performance).match(/^(function|object)$/);
  const hasPerformanceConstructorPrototype = _global.performance && _global.performance.constructor && _global.performance.constructor.prototype;
  const queueMicrotaskPresent = _global.hasOwnProperty("queueMicrotask");
  const requestAnimationFramePresent = _global.requestAnimationFrame && typeof _global.requestAnimationFrame === "function";
  const cancelAnimationFramePresent = _global.cancelAnimationFrame && typeof _global.cancelAnimationFrame === "function";
  const requestIdleCallbackPresent = _global.requestIdleCallback && typeof _global.requestIdleCallback === "function";
  const cancelIdleCallbackPresent = _global.cancelIdleCallback && typeof _global.cancelIdleCallback === "function";
  const setImmediatePresent = _global.setImmediate && typeof _global.setImmediate === "function";
  if (isRunningInIE) {
    _global.setTimeout = _global.setTimeout;
    _global.clearTimeout = _global.clearTimeout;
    _global.setInterval = _global.setInterval;
    _global.clearInterval = _global.clearInterval;
    _global.Date = _global.Date;
  }
  if (setImmediatePresent) {
    _global.setImmediate = _global.setImmediate;
    _global.clearImmediate = _global.clearImmediate;
  }
  _global.clearTimeout(timeoutResult);
  const NativeDate = _global.Date;
  let uniqueTimerId = idCounterStart;
  function isNumberFinite(num) {
    if (Number.isFinite) {
      return Number.isFinite(num);
    }
    return isFinite(num);
  }
  let isNearInfiniteLimit = false;
  function checkIsNearInfiniteLimit(clock, i2) {
    if (clock.loopLimit && i2 === clock.loopLimit - 1) {
      isNearInfiniteLimit = true;
    }
  }
  function resetIsNearInfiniteLimit() {
    isNearInfiniteLimit = false;
  }
  function parseTime(str) {
    if (!str) {
      return 0;
    }
    const strings = str.split(":");
    const l2 = strings.length;
    let i2 = l2;
    let ms = 0;
    let parsed;
    if (l2 > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
      throw new Error(
        "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
      );
    }
    while (i2--) {
      parsed = parseInt(strings[i2], 10);
      if (parsed >= 60) {
        throw new Error(`Invalid time ${str}`);
      }
      ms += parsed * Math.pow(60, l2 - i2 - 1);
    }
    return ms * 1e3;
  }
  function nanoRemainder(msFloat) {
    const modulo = 1e6;
    const remainder = msFloat * 1e6 % modulo;
    const positiveRemainder = remainder < 0 ? remainder + modulo : remainder;
    return Math.floor(positiveRemainder);
  }
  function getEpoch(epoch) {
    if (!epoch) {
      return 0;
    }
    if (typeof epoch.getTime === "function") {
      return epoch.getTime();
    }
    if (typeof epoch === "number") {
      return epoch;
    }
    throw new TypeError("now should be milliseconds since UNIX epoch");
  }
  function inRange(from, to, timer) {
    return timer && timer.callAt >= from && timer.callAt <= to;
  }
  function getInfiniteLoopError(clock, job) {
    const infiniteLoopError = new Error(
      `Aborting after running ${clock.loopLimit} timers, assuming an infinite loop!`
    );
    if (!job.error) {
      return infiniteLoopError;
    }
    const computedTargetPattern = /target\.*[<|(|[].*?[>|\]|)]\s*/;
    let clockMethodPattern = new RegExp(
      String(Object.keys(clock).join("|"))
    );
    if (addTimerReturnsObject) {
      clockMethodPattern = new RegExp(
        `\\s+at (Object\\.)?(?:${Object.keys(clock).join("|")})\\s+`
      );
    }
    let matchedLineIndex = -1;
    job.error.stack.split("\n").some(function(line, i2) {
      const matchedComputedTarget = line.match(computedTargetPattern);
      if (matchedComputedTarget) {
        matchedLineIndex = i2;
        return true;
      }
      const matchedClockMethod = line.match(clockMethodPattern);
      if (matchedClockMethod) {
        matchedLineIndex = i2;
        return false;
      }
      return matchedLineIndex >= 0;
    });
    const stack = `${infiniteLoopError}
${job.type || "Microtask"} - ${job.func.name || "anonymous"}
${job.error.stack.split("\n").slice(matchedLineIndex + 1).join("\n")}`;
    try {
      Object.defineProperty(infiniteLoopError, "stack", {
        value: stack
      });
    } catch (e) {
    }
    return infiniteLoopError;
  }
  function mirrorDateProperties(target, source) {
    let prop;
    for (prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
    if (source.now) {
      target.now = function now2() {
        return target.clock.now;
      };
    } else {
      delete target.now;
    }
    if (source.toSource) {
      target.toSource = function toSource2() {
        return source.toSource();
      };
    } else {
      delete target.toSource;
    }
    target.toString = function toString2() {
      return source.toString();
    };
    target.prototype = source.prototype;
    target.parse = source.parse;
    target.UTC = source.UTC;
    target.prototype.toUTCString = source.prototype.toUTCString;
    target.isFake = true;
    return target;
  }
  function createDate() {
    function ClockDate(year, month, date2, hour, minute, second, ms) {
      if (!(this instanceof ClockDate)) {
        return new NativeDate(ClockDate.clock.now).toString();
      }
      switch (arguments.length) {
        case 0:
          return new NativeDate(ClockDate.clock.now);
        case 1:
          return new NativeDate(year);
        case 2:
          return new NativeDate(year, month);
        case 3:
          return new NativeDate(year, month, date2);
        case 4:
          return new NativeDate(year, month, date2, hour);
        case 5:
          return new NativeDate(year, month, date2, hour, minute);
        case 6:
          return new NativeDate(
            year,
            month,
            date2,
            hour,
            minute,
            second
          );
        default:
          return new NativeDate(
            year,
            month,
            date2,
            hour,
            minute,
            second,
            ms
          );
      }
    }
    return mirrorDateProperties(ClockDate, NativeDate);
  }
  function enqueueJob(clock, job) {
    if (!clock.jobs) {
      clock.jobs = [];
    }
    clock.jobs.push(job);
  }
  function runJobs(clock) {
    if (!clock.jobs) {
      return;
    }
    for (let i2 = 0; i2 < clock.jobs.length; i2++) {
      const job = clock.jobs[i2];
      job.func.apply(null, job.args);
      checkIsNearInfiniteLimit(clock, i2);
      if (clock.loopLimit && i2 > clock.loopLimit) {
        throw getInfiniteLoopError(clock, job);
      }
    }
    resetIsNearInfiniteLimit();
    clock.jobs = [];
  }
  function addTimer(clock, timer) {
    if (timer.func === void 0) {
      throw new Error("Callback must be provided to timer calls");
    }
    if (addTimerReturnsObject) {
      if (typeof timer.func !== "function") {
        throw new TypeError(
          `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${timer.func} of type ${typeof timer.func}`
        );
      }
    }
    if (isNearInfiniteLimit) {
      timer.error = new Error();
    }
    timer.type = timer.immediate ? "Immediate" : "Timeout";
    if (timer.hasOwnProperty("delay")) {
      if (typeof timer.delay !== "number") {
        timer.delay = parseInt(timer.delay, 10);
      }
      if (!isNumberFinite(timer.delay)) {
        timer.delay = 0;
      }
      timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
      timer.delay = Math.max(0, timer.delay);
    }
    if (timer.hasOwnProperty("interval")) {
      timer.type = "Interval";
      timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
    }
    if (timer.hasOwnProperty("animation")) {
      timer.type = "AnimationFrame";
      timer.animation = true;
    }
    if (timer.hasOwnProperty("idleCallback")) {
      timer.type = "IdleCallback";
      timer.idleCallback = true;
    }
    if (!clock.timers) {
      clock.timers = {};
    }
    timer.id = uniqueTimerId++;
    timer.createdAt = clock.now;
    timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
    clock.timers[timer.id] = timer;
    if (addTimerReturnsObject) {
      const res = {
        refed: true,
        ref: function() {
          this.refed = true;
          return res;
        },
        unref: function() {
          this.refed = false;
          return res;
        },
        hasRef: function() {
          return this.refed;
        },
        refresh: function() {
          timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
          clock.timers[timer.id] = timer;
          return res;
        },
        [Symbol.toPrimitive]: function() {
          return timer.id;
        }
      };
      return res;
    }
    return timer.id;
  }
  function compareTimers(a, b2) {
    if (a.callAt < b2.callAt) {
      return -1;
    }
    if (a.callAt > b2.callAt) {
      return 1;
    }
    if (a.immediate && !b2.immediate) {
      return -1;
    }
    if (!a.immediate && b2.immediate) {
      return 1;
    }
    if (a.createdAt < b2.createdAt) {
      return -1;
    }
    if (a.createdAt > b2.createdAt) {
      return 1;
    }
    if (a.id < b2.id) {
      return -1;
    }
    if (a.id > b2.id) {
      return 1;
    }
  }
  function firstTimerInRange(clock, from, to) {
    const timers2 = clock.timers;
    let timer = null;
    let id, isInRange;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        isInRange = inRange(from, to, timers2[id]);
        if (isInRange && (!timer || compareTimers(timer, timers2[id]) === 1)) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function firstTimer(clock) {
    const timers2 = clock.timers;
    let timer = null;
    let id;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        if (!timer || compareTimers(timer, timers2[id]) === 1) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function lastTimer(clock) {
    const timers2 = clock.timers;
    let timer = null;
    let id;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        if (!timer || compareTimers(timer, timers2[id]) === -1) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function callTimer(clock, timer) {
    if (typeof timer.interval === "number") {
      clock.timers[timer.id].callAt += timer.interval;
    } else {
      delete clock.timers[timer.id];
    }
    if (typeof timer.func === "function") {
      timer.func.apply(null, timer.args);
    } else {
      const eval2 = eval;
      (function() {
        eval2(timer.func);
      })();
    }
  }
  function getClearHandler(ttype) {
    if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
      return `cancel${ttype}`;
    }
    return `clear${ttype}`;
  }
  function getScheduleHandler(ttype) {
    if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
      return `request${ttype}`;
    }
    return `set${ttype}`;
  }
  function createWarnOnce() {
    let calls = 0;
    return function(msg) {
      !calls++ && console.warn(msg);
    };
  }
  const warnOnce = createWarnOnce();
  function clearTimer(clock, timerId, ttype) {
    if (!timerId) {
      return;
    }
    if (!clock.timers) {
      clock.timers = {};
    }
    const id = Number(timerId);
    if (Number.isNaN(id) || id < idCounterStart) {
      const handlerName = getClearHandler(ttype);
      if (clock.shouldClearNativeTimers === true) {
        const nativeHandler = clock[`_${handlerName}`];
        return typeof nativeHandler === "function" ? nativeHandler(timerId) : void 0;
      }
      warnOnce(
        `FakeTimers: ${handlerName} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
      );
    }
    if (clock.timers.hasOwnProperty(id)) {
      const timer = clock.timers[id];
      if (timer.type === ttype || timer.type === "Timeout" && ttype === "Interval" || timer.type === "Interval" && ttype === "Timeout") {
        delete clock.timers[id];
      } else {
        const clear = getClearHandler(ttype);
        const schedule = getScheduleHandler(timer.type);
        throw new Error(
          `Cannot clear timer: timer created with ${schedule}() but cleared with ${clear}()`
        );
      }
    }
  }
  function uninstall(clock, config2) {
    let method, i2, l2;
    const installedHrTime = "_hrtime";
    const installedNextTick = "_nextTick";
    for (i2 = 0, l2 = clock.methods.length; i2 < l2; i2++) {
      method = clock.methods[i2];
      if (method === "hrtime" && _global.process) {
        _global.process.hrtime = clock[installedHrTime];
      } else if (method === "nextTick" && _global.process) {
        _global.process.nextTick = clock[installedNextTick];
      } else if (method === "performance") {
        const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
          clock,
          `_${method}`
        );
        if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
          Object.defineProperty(
            _global,
            method,
            originalPerfDescriptor
          );
        } else if (originalPerfDescriptor.configurable) {
          _global[method] = clock[`_${method}`];
        }
      } else {
        if (_global[method] && _global[method].hadOwnProperty) {
          _global[method] = clock[`_${method}`];
        } else {
          try {
            delete _global[method];
          } catch (ignore) {
          }
        }
      }
    }
    if (config2.shouldAdvanceTime === true) {
      _global.clearInterval(clock.attachedInterval);
    }
    clock.methods = [];
    if (!clock.timers) {
      return [];
    }
    return Object.keys(clock.timers).map(function mapper(key) {
      return clock.timers[key];
    });
  }
  function hijackMethod(target, method, clock) {
    clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(
      target,
      method
    );
    clock[`_${method}`] = target[method];
    if (method === "Date") {
      const date2 = mirrorDateProperties(clock[method], target[method]);
      target[method] = date2;
    } else if (method === "performance") {
      const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
        target,
        method
      );
      if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
        Object.defineProperty(
          clock,
          `_${method}`,
          originalPerfDescriptor
        );
        const perfDescriptor = Object.getOwnPropertyDescriptor(
          clock,
          method
        );
        Object.defineProperty(target, method, perfDescriptor);
      } else {
        target[method] = clock[method];
      }
    } else {
      target[method] = function() {
        return clock[method].apply(clock, arguments);
      };
      Object.defineProperties(
        target[method],
        Object.getOwnPropertyDescriptors(clock[method])
      );
    }
    target[method].clock = clock;
  }
  function doIntervalTick(clock, advanceTimeDelta) {
    clock.tick(advanceTimeDelta);
  }
  const timers = {
    setTimeout: _global.setTimeout,
    clearTimeout: _global.clearTimeout,
    setInterval: _global.setInterval,
    clearInterval: _global.clearInterval,
    Date: _global.Date
  };
  if (setImmediatePresent) {
    timers.setImmediate = _global.setImmediate;
    timers.clearImmediate = _global.clearImmediate;
  }
  if (hrtimePresent) {
    timers.hrtime = _global.process.hrtime;
  }
  if (nextTickPresent) {
    timers.nextTick = _global.process.nextTick;
  }
  if (performancePresent) {
    timers.performance = _global.performance;
  }
  if (requestAnimationFramePresent) {
    timers.requestAnimationFrame = _global.requestAnimationFrame;
  }
  if (queueMicrotaskPresent) {
    timers.queueMicrotask = true;
  }
  if (cancelAnimationFramePresent) {
    timers.cancelAnimationFrame = _global.cancelAnimationFrame;
  }
  if (requestIdleCallbackPresent) {
    timers.requestIdleCallback = _global.requestIdleCallback;
  }
  if (cancelIdleCallbackPresent) {
    timers.cancelIdleCallback = _global.cancelIdleCallback;
  }
  const originalSetTimeout = _global.setImmediate || _global.setTimeout;
  function createClock(start, loopLimit) {
    start = Math.floor(getEpoch(start));
    loopLimit = loopLimit || 1e3;
    let nanos = 0;
    const adjustedSystemTime = [0, 0];
    if (NativeDate === void 0) {
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    }
    const clock = {
      now: start,
      Date: createDate(),
      loopLimit
    };
    clock.Date.clock = clock;
    function getTimeToNextFrame() {
      return 16 - (clock.now - start) % 16;
    }
    function hrtime(prev) {
      const millisSinceStart = clock.now - adjustedSystemTime[0] - start;
      const secsSinceStart = Math.floor(millisSinceStart / 1e3);
      const remainderInNanos = (millisSinceStart - secsSinceStart * 1e3) * 1e6 + nanos - adjustedSystemTime[1];
      if (Array.isArray(prev)) {
        if (prev[1] > 1e9) {
          throw new TypeError(
            "Number of nanoseconds can't exceed a billion"
          );
        }
        const oldSecs = prev[0];
        let nanoDiff = remainderInNanos - prev[1];
        let secDiff = secsSinceStart - oldSecs;
        if (nanoDiff < 0) {
          nanoDiff += 1e9;
          secDiff -= 1;
        }
        return [secDiff, nanoDiff];
      }
      return [secsSinceStart, remainderInNanos];
    }
    function fakePerformanceNow() {
      const hrt = hrtime();
      const millis = hrt[0] * 1e3 + hrt[1] / 1e6;
      return millis;
    }
    if (hrtimeBigintPresent) {
      hrtime.bigint = function() {
        const parts = hrtime();
        return BigInt(parts[0]) * BigInt(1e9) + BigInt(parts[1]);
      };
    }
    clock.requestIdleCallback = function requestIdleCallback(func, timeout) {
      let timeToNextIdlePeriod = 0;
      if (clock.countTimers() > 0) {
        timeToNextIdlePeriod = 50;
      }
      const result = addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: typeof timeout === "undefined" ? timeToNextIdlePeriod : Math.min(timeout, timeToNextIdlePeriod),
        idleCallback: true
      });
      return Number(result);
    };
    clock.cancelIdleCallback = function cancelIdleCallback(timerId) {
      return clearTimer(clock, timerId, "IdleCallback");
    };
    clock.setTimeout = function setTimeout(func, timeout) {
      return addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: timeout
      });
    };
    if (typeof _global.Promise !== "undefined" && utilPromisify) {
      clock.setTimeout[utilPromisify.custom] = function promisifiedSetTimeout(timeout, arg) {
        return new _global.Promise(function setTimeoutExecutor(resolve2) {
          addTimer(clock, {
            func: resolve2,
            args: [arg],
            delay: timeout
          });
        });
      };
    }
    clock.clearTimeout = function clearTimeout(timerId) {
      return clearTimer(clock, timerId, "Timeout");
    };
    clock.nextTick = function nextTick(func) {
      return enqueueJob(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 1),
        error: isNearInfiniteLimit ? new Error() : null
      });
    };
    clock.queueMicrotask = function queueMicrotask(func) {
      return clock.nextTick(func);
    };
    clock.setInterval = function setInterval(func, timeout) {
      timeout = parseInt(timeout, 10);
      return addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: timeout,
        interval: timeout
      });
    };
    clock.clearInterval = function clearInterval(timerId) {
      return clearTimer(clock, timerId, "Interval");
    };
    if (setImmediatePresent) {
      clock.setImmediate = function setImmediate(func) {
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 1),
          immediate: true
        });
      };
      if (typeof _global.Promise !== "undefined" && utilPromisify) {
        clock.setImmediate[utilPromisify.custom] = function promisifiedSetImmediate(arg) {
          return new _global.Promise(
            function setImmediateExecutor(resolve2) {
              addTimer(clock, {
                func: resolve2,
                args: [arg],
                immediate: true
              });
            }
          );
        };
      }
      clock.clearImmediate = function clearImmediate(timerId) {
        return clearTimer(clock, timerId, "Immediate");
      };
    }
    clock.countTimers = function countTimers() {
      return Object.keys(clock.timers || {}).length + (clock.jobs || []).length;
    };
    clock.requestAnimationFrame = function requestAnimationFrame(func) {
      const result = addTimer(clock, {
        func,
        delay: getTimeToNextFrame(),
        get args() {
          return [fakePerformanceNow()];
        },
        animation: true
      });
      return Number(result);
    };
    clock.cancelAnimationFrame = function cancelAnimationFrame(timerId) {
      return clearTimer(clock, timerId, "AnimationFrame");
    };
    clock.runMicrotasks = function runMicrotasks() {
      runJobs(clock);
    };
    function doTick(tickValue, isAsync, resolve2, reject) {
      const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
      const ms = Math.floor(msFloat);
      const remainder = nanoRemainder(msFloat);
      let nanosTotal = nanos + remainder;
      let tickTo = clock.now + ms;
      if (msFloat < 0) {
        throw new TypeError("Negative ticks are not supported");
      }
      if (nanosTotal >= 1e6) {
        tickTo += 1;
        nanosTotal -= 1e6;
      }
      nanos = nanosTotal;
      let tickFrom = clock.now;
      let previous = clock.now;
      let timer, firstException, oldNow, nextPromiseTick, compensationCheck, postTimerCall;
      clock.duringTick = true;
      oldNow = clock.now;
      runJobs(clock);
      if (oldNow !== clock.now) {
        tickFrom += clock.now - oldNow;
        tickTo += clock.now - oldNow;
      }
      function doTickInner() {
        timer = firstTimerInRange(clock, tickFrom, tickTo);
        while (timer && tickFrom <= tickTo) {
          if (clock.timers[timer.id]) {
            tickFrom = timer.callAt;
            clock.now = timer.callAt;
            oldNow = clock.now;
            try {
              runJobs(clock);
              callTimer(clock, timer);
            } catch (e) {
              firstException = firstException || e;
            }
            if (isAsync) {
              originalSetTimeout(nextPromiseTick);
              return;
            }
            compensationCheck();
          }
          postTimerCall();
        }
        oldNow = clock.now;
        runJobs(clock);
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
        }
        clock.duringTick = false;
        timer = firstTimerInRange(clock, tickFrom, tickTo);
        if (timer) {
          try {
            clock.tick(tickTo - clock.now);
          } catch (e) {
            firstException = firstException || e;
          }
        } else {
          clock.now = tickTo;
          nanos = nanosTotal;
        }
        if (firstException) {
          throw firstException;
        }
        if (isAsync) {
          resolve2(clock.now);
        } else {
          return clock.now;
        }
      }
      nextPromiseTick = isAsync && function() {
        try {
          compensationCheck();
          postTimerCall();
          doTickInner();
        } catch (e) {
          reject(e);
        }
      };
      compensationCheck = function() {
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
          previous += clock.now - oldNow;
        }
      };
      postTimerCall = function() {
        timer = firstTimerInRange(clock, previous, tickTo);
        previous = tickFrom;
      };
      return doTickInner();
    }
    clock.tick = function tick(tickValue) {
      return doTick(tickValue, false);
    };
    if (typeof _global.Promise !== "undefined") {
      clock.tickAsync = function tickAsync(tickValue) {
        return new _global.Promise(function(resolve2, reject) {
          originalSetTimeout(function() {
            try {
              doTick(tickValue, true, resolve2, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.next = function next() {
      runJobs(clock);
      const timer = firstTimer(clock);
      if (!timer) {
        return clock.now;
      }
      clock.duringTick = true;
      try {
        clock.now = timer.callAt;
        callTimer(clock, timer);
        runJobs(clock);
        return clock.now;
      } finally {
        clock.duringTick = false;
      }
    };
    if (typeof _global.Promise !== "undefined") {
      clock.nextAsync = function nextAsync() {
        return new _global.Promise(function(resolve2, reject) {
          originalSetTimeout(function() {
            try {
              const timer = firstTimer(clock);
              if (!timer) {
                resolve2(clock.now);
                return;
              }
              let err;
              clock.duringTick = true;
              clock.now = timer.callAt;
              try {
                callTimer(clock, timer);
              } catch (e) {
                err = e;
              }
              clock.duringTick = false;
              originalSetTimeout(function() {
                if (err) {
                  reject(err);
                } else {
                  resolve2(clock.now);
                }
              });
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.runAll = function runAll() {
      let numTimers, i2;
      runJobs(clock);
      for (i2 = 0; i2 < clock.loopLimit; i2++) {
        if (!clock.timers) {
          resetIsNearInfiniteLimit();
          return clock.now;
        }
        numTimers = Object.keys(clock.timers).length;
        if (numTimers === 0) {
          resetIsNearInfiniteLimit();
          return clock.now;
        }
        clock.next();
        checkIsNearInfiniteLimit(clock, i2);
      }
      const excessJob = firstTimer(clock);
      throw getInfiniteLoopError(clock, excessJob);
    };
    clock.runToFrame = function runToFrame() {
      return clock.tick(getTimeToNextFrame());
    };
    if (typeof _global.Promise !== "undefined") {
      clock.runAllAsync = function runAllAsync() {
        return new _global.Promise(function(resolve2, reject) {
          let i2 = 0;
          function doRun() {
            originalSetTimeout(function() {
              try {
                let numTimers;
                if (i2 < clock.loopLimit) {
                  if (!clock.timers) {
                    resetIsNearInfiniteLimit();
                    resolve2(clock.now);
                    return;
                  }
                  numTimers = Object.keys(
                    clock.timers
                  ).length;
                  if (numTimers === 0) {
                    resetIsNearInfiniteLimit();
                    resolve2(clock.now);
                    return;
                  }
                  clock.next();
                  i2++;
                  doRun();
                  checkIsNearInfiniteLimit(clock, i2);
                  return;
                }
                const excessJob = firstTimer(clock);
                reject(getInfiniteLoopError(clock, excessJob));
              } catch (e) {
                reject(e);
              }
            });
          }
          doRun();
        });
      };
    }
    clock.runToLast = function runToLast() {
      const timer = lastTimer(clock);
      if (!timer) {
        runJobs(clock);
        return clock.now;
      }
      return clock.tick(timer.callAt - clock.now);
    };
    if (typeof _global.Promise !== "undefined") {
      clock.runToLastAsync = function runToLastAsync() {
        return new _global.Promise(function(resolve2, reject) {
          originalSetTimeout(function() {
            try {
              const timer = lastTimer(clock);
              if (!timer) {
                resolve2(clock.now);
              }
              resolve2(clock.tickAsync(timer.callAt - clock.now));
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.reset = function reset() {
      nanos = 0;
      clock.timers = {};
      clock.jobs = [];
      clock.now = start;
    };
    clock.setSystemTime = function setSystemTime(systemTime) {
      const newNow = getEpoch(systemTime);
      const difference = newNow - clock.now;
      let id, timer;
      adjustedSystemTime[0] = adjustedSystemTime[0] + difference;
      adjustedSystemTime[1] = adjustedSystemTime[1] + nanos;
      clock.now = newNow;
      nanos = 0;
      for (id in clock.timers) {
        if (clock.timers.hasOwnProperty(id)) {
          timer = clock.timers[id];
          timer.createdAt += difference;
          timer.callAt += difference;
        }
      }
    };
    if (performancePresent) {
      clock.performance = /* @__PURE__ */ Object.create(null);
      clock.performance.now = fakePerformanceNow;
    }
    if (hrtimePresent) {
      clock.hrtime = hrtime;
    }
    return clock;
  }
  function install(config2) {
    if (arguments.length > 1 || config2 instanceof Date || Array.isArray(config2) || typeof config2 === "number") {
      throw new TypeError(
        `FakeTimers.install called with ${String(
          config2
        )} install requires an object parameter`
      );
    }
    if (_global.Date.isFake === true) {
      throw new TypeError(
        "Can't install fake timers twice on the same global object."
      );
    }
    config2 = typeof config2 !== "undefined" ? config2 : {};
    config2.shouldAdvanceTime = config2.shouldAdvanceTime || false;
    config2.advanceTimeDelta = config2.advanceTimeDelta || 20;
    config2.shouldClearNativeTimers = config2.shouldClearNativeTimers || false;
    if (config2.target) {
      throw new TypeError(
        "config.target is no longer supported. Use `withGlobal(target)` instead."
      );
    }
    let i2, l2;
    const clock = createClock(config2.now, config2.loopLimit);
    clock.shouldClearNativeTimers = config2.shouldClearNativeTimers;
    clock.uninstall = function() {
      return uninstall(clock, config2);
    };
    clock.methods = config2.toFake || [];
    if (clock.methods.length === 0) {
      clock.methods = Object.keys(timers).filter(function(key) {
        return key !== "nextTick" && key !== "queueMicrotask";
      });
    }
    if (config2.shouldAdvanceTime === true) {
      const intervalTick = doIntervalTick.bind(
        null,
        clock,
        config2.advanceTimeDelta
      );
      const intervalId = _global.setInterval(
        intervalTick,
        config2.advanceTimeDelta
      );
      clock.attachedInterval = intervalId;
    }
    if (clock.methods.includes("performance")) {
      const proto = (() => {
        if (hasPerformancePrototype) {
          return _global.Performance.prototype;
        }
        if (hasPerformanceConstructorPrototype) {
          return _global.performance.constructor.prototype;
        }
      })();
      if (proto) {
        Object.getOwnPropertyNames(proto).forEach(function(name2) {
          if (name2 !== "now") {
            clock.performance[name2] = name2.indexOf("getEntries") === 0 ? NOOP_ARRAY : NOOP2;
          }
        });
      } else if ((config2.toFake || []).includes("performance")) {
        throw new ReferenceError(
          "non-existent performance object cannot be faked"
        );
      }
    }
    for (i2 = 0, l2 = clock.methods.length; i2 < l2; i2++) {
      const nameOfMethodToReplace = clock.methods[i2];
      if (nameOfMethodToReplace === "hrtime") {
        if (_global.process && typeof _global.process.hrtime === "function") {
          hijackMethod(_global.process, nameOfMethodToReplace, clock);
        }
      } else if (nameOfMethodToReplace === "nextTick") {
        if (_global.process && typeof _global.process.nextTick === "function") {
          hijackMethod(_global.process, nameOfMethodToReplace, clock);
        }
      } else {
        hijackMethod(_global, nameOfMethodToReplace, clock);
      }
    }
    return clock;
  }
  return {
    timers,
    createClock,
    install,
    withGlobal
  };
}
const defaultImplementation = withGlobal(globalObject);
defaultImplementation.timers;
defaultImplementation.createClock;
defaultImplementation.install;
var withGlobal_1 = withGlobal;
const RealDate = Date;
let now = null;
class MockDate extends RealDate {
  constructor(y2, m2, d, h, M2, s, ms) {
    super();
    let date2;
    switch (arguments.length) {
      case 0:
        if (now !== null)
          date2 = new RealDate(now.valueOf());
        else
          date2 = new RealDate();
        break;
      case 1:
        date2 = new RealDate(y2);
        break;
      default:
        d = typeof d === "undefined" ? 1 : d;
        h = h || 0;
        M2 = M2 || 0;
        s = s || 0;
        ms = ms || 0;
        date2 = new RealDate(y2, m2, d, h, M2, s, ms);
        break;
    }
    return date2;
  }
}
MockDate.UTC = RealDate.UTC;
MockDate.now = function() {
  return new MockDate().valueOf();
};
MockDate.parse = function(dateString) {
  return RealDate.parse(dateString);
};
MockDate.toString = function() {
  return RealDate.toString();
};
function mockDate(date2) {
  const dateObj = new RealDate(date2.valueOf());
  if (isNaN(dateObj.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${date2}`);
  globalThis.Date = MockDate;
  now = dateObj.valueOf();
}
function resetDate() {
  globalThis.Date = RealDate;
}
class FakeTimers {
  constructor({
    global: global2,
    config: config2
  }) {
    this._now = RealDate.now;
    this._userConfig = config2;
    this._fakingDate = false;
    this._fakingTime = false;
    this._fakeTimers = withGlobal_1(global2);
  }
  clearAllTimers() {
    if (this._fakingTime)
      this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    if (this._checkFakeTimers())
      this._clock.runAll();
  }
  async runAllTimersAsync() {
    if (this._checkFakeTimers())
      await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    if (this._checkFakeTimers())
      this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    if (this._checkFakeTimers())
      await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(steps = 1) {
    if (this._checkFakeTimers()) {
      for (let i2 = steps; i2 > 0; i2--) {
        this._clock.next();
        this._clock.tick(0);
        if (this._clock.countTimers() === 0)
          break;
      }
    }
  }
  async advanceTimersToNextTimerAsync(steps = 1) {
    if (this._checkFakeTimers()) {
      for (let i2 = steps; i2 > 0; i2--) {
        await this._clock.nextAsync();
        this._clock.tick(0);
        if (this._clock.countTimers() === 0)
          break;
      }
    }
  }
  advanceTimersByTime(msToRun) {
    if (this._checkFakeTimers())
      this._clock.tick(msToRun);
  }
  async advanceTimersByTimeAsync(msToRun) {
    if (this._checkFakeTimers())
      await this._clock.tickAsync(msToRun);
  }
  runAllTicks() {
    if (this._checkFakeTimers()) {
      this._clock.runMicrotasks();
    }
  }
  useRealTimers() {
    if (this._fakingDate) {
      resetDate();
      this._fakingDate = false;
    }
    if (this._fakingTime) {
      this._clock.uninstall();
      this._fakingTime = false;
    }
  }
  useFakeTimers() {
    if (this._fakingDate) {
      throw new Error(
        '"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.'
      );
    }
    if (!this._fakingTime) {
      const toFake = Object.keys(this._fakeTimers.timers);
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        toFake,
        ...this._userConfig
      });
      this._fakingTime = true;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: now2 } = this._clock;
      this._clock.reset();
      this._clock.setSystemTime(now2);
    }
  }
  setSystemTime(now2) {
    if (this._fakingTime) {
      this._clock.setSystemTime(now2);
    } else {
      mockDate(now2 ?? this.getRealSystemTime());
      this._fakingDate = true;
    }
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    if (this._checkFakeTimers())
      return this._clock.countTimers();
    return 0;
  }
  configure(config2) {
    this._userConfig = config2;
  }
  _checkFakeTimers() {
    if (!this._fakingTime) {
      throw new Error(
        'Timers are not mocked. Try calling "vi.useFakeTimers()" first.'
      );
    }
    return this._fakingTime;
  }
}
function createVitest() {
  const _mocker = typeof __vitest_mocker__ !== "undefined" ? __vitest_mocker__ : new Proxy({}, {
    get(name2) {
      throw new Error(
        `Vitest mocker was not initialized in this environment. vi.${name2}() is forbidden.`
      );
    }
  });
  let _mockedDate = null;
  let _config = null;
  const workerState = getWorkerState();
  if (!workerState) {
    const errorMsg = 'Vitest failed to access its internal state.\n\nOne of the following is possible:\n- "vitest" is imported directly without running "vitest" command\n- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)\n- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues\n';
    throw new Error(errorMsg);
  }
  const _timers = new FakeTimers({
    global: globalThis,
    config: workerState.config.fakeTimers
  });
  const _stubsGlobal = /* @__PURE__ */ new Map();
  const _stubsEnv = /* @__PURE__ */ new Map();
  const getImporter = () => {
    const stackTrace = createSimpleStackTrace({ stackTraceLimit: 4 });
    const importerStack = stackTrace.split("\n")[4];
    const stack = parseSingleStack$1(importerStack);
    return (stack == null ? void 0 : stack.file) || "";
  };
  return {
    useFakeTimers(config2) {
      if (config2) {
        _timers.configure(config2);
      } else {
        const workerState2 = getWorkerState();
        _timers.configure(workerState2.config.fakeTimers);
      }
      _timers.useFakeTimers();
      return this;
    },
    useRealTimers() {
      _timers.useRealTimers();
      _mockedDate = null;
      return this;
    },
    runOnlyPendingTimers() {
      _timers.runOnlyPendingTimers();
      return this;
    },
    async runOnlyPendingTimersAsync() {
      await _timers.runOnlyPendingTimersAsync();
      return this;
    },
    runAllTimers() {
      _timers.runAllTimers();
      return this;
    },
    async runAllTimersAsync() {
      await _timers.runAllTimersAsync();
      return this;
    },
    runAllTicks() {
      _timers.runAllTicks();
      return this;
    },
    advanceTimersByTime(ms) {
      _timers.advanceTimersByTime(ms);
      return this;
    },
    async advanceTimersByTimeAsync(ms) {
      await _timers.advanceTimersByTimeAsync(ms);
      return this;
    },
    advanceTimersToNextTimer() {
      _timers.advanceTimersToNextTimer();
      return this;
    },
    async advanceTimersToNextTimerAsync() {
      await _timers.advanceTimersToNextTimerAsync();
      return this;
    },
    getTimerCount() {
      return _timers.getTimerCount();
    },
    setSystemTime(time) {
      const date2 = time instanceof Date ? time : new Date(time);
      _mockedDate = date2;
      _timers.setSystemTime(date2);
      return this;
    },
    getMockedSystemTime() {
      return _mockedDate;
    },
    getRealSystemTime() {
      return _timers.getRealSystemTime();
    },
    clearAllTimers() {
      _timers.clearAllTimers();
      return this;
    },
    // mocks
    spyOn,
    fn,
    hoisted(factory) {
      assertTypes(factory, '"vi.hoisted" factory', ["function"]);
      return factory();
    },
    mock(path, factory) {
      const importer = getImporter();
      _mocker.queueMock(
        path,
        importer,
        factory ? () => factory(() => _mocker.importActual(path, importer)) : void 0
      );
    },
    unmock(path) {
      _mocker.queueUnmock(path, getImporter());
    },
    doMock(path, factory) {
      _mocker.queueMock(path, getImporter(), factory);
    },
    doUnmock(path) {
      _mocker.queueUnmock(path, getImporter());
    },
    async importActual(path) {
      return _mocker.importActual(path, getImporter());
    },
    async importMock(path) {
      return _mocker.importMock(path, getImporter());
    },
    mocked(item2, _options = {}) {
      return item2;
    },
    isMockFunction(fn2) {
      return isMockFunction(fn2);
    },
    clearAllMocks() {
      spies.forEach((spy) => spy.mockClear());
      return this;
    },
    resetAllMocks() {
      spies.forEach((spy) => spy.mockReset());
      return this;
    },
    restoreAllMocks() {
      spies.forEach((spy) => spy.mockRestore());
      return this;
    },
    stubGlobal(name2, value) {
      if (!_stubsGlobal.has(name2))
        _stubsGlobal.set(name2, Object.getOwnPropertyDescriptor(globalThis, name2));
      Object.defineProperty(globalThis, name2, {
        value,
        writable: true,
        configurable: true,
        enumerable: true
      });
      return this;
    },
    stubEnv(name2, value) {
      if (!_stubsEnv.has(name2))
        _stubsEnv.set(name2, process.env[name2]);
      process.env[name2] = value;
      return this;
    },
    unstubAllGlobals() {
      _stubsGlobal.forEach((original, name2) => {
        if (!original)
          Reflect.deleteProperty(globalThis, name2);
        else
          Object.defineProperty(globalThis, name2, original);
      });
      _stubsGlobal.clear();
      return this;
    },
    unstubAllEnvs() {
      _stubsEnv.forEach((original, name2) => {
        if (original === void 0)
          delete process.env[name2];
        else
          process.env[name2] = original;
      });
      _stubsEnv.clear();
      return this;
    },
    resetModules() {
      const state = getWorkerState();
      resetModules(state.moduleCache);
      return this;
    },
    async dynamicImportSettled() {
      return waitForImportsToResolve();
    },
    setConfig(config2) {
      const state = getWorkerState();
      if (!_config)
        _config = { ...state.config };
      Object.assign(state.config, config2);
    },
    resetConfig() {
      if (_config) {
        const state = getWorkerState();
        Object.assign(state.config, _config);
      }
    }
  };
}
const vitest = createVitest();
const vi = vitest;
const createEvent = (selector, validator) => {
  if (validator) {
    return createMapEvent(selector, validator);
  } else {
    return createSetEvent(selector);
  }
};
function createSetEvent(selector) {
  const _cbs = /* @__PURE__ */ new Set();
  return {
    addListener,
    hasListener,
    hasListeners,
    callListeners,
    clearListeners,
    getListeners,
    removeListener,
    toEvent() {
      return {
        addListener,
        hasListener,
        hasListeners,
        removeListener
      };
    }
  };
  function addListener(cb) {
    _cbs.add(cb);
  }
  function hasListener(cb) {
    return _cbs.has(cb);
  }
  function hasListeners() {
    return _cbs.size > 0;
  }
  function callListeners(...args) {
    const cbArgs = selector(...args);
    if (cbArgs) {
      _cbs.forEach((cb) => {
        cb(...cbArgs);
      });
    }
  }
  function removeListener(cb) {
    _cbs.delete(cb);
  }
  function clearListeners() {
    _cbs.clear();
  }
  function getListeners() {
    return new Set(_cbs.values());
  }
}
function createMapEvent(eventSelector, optionsSelector) {
  const _cbs = /* @__PURE__ */ new Map();
  return {
    addListener,
    hasListener,
    hasListeners,
    callListeners,
    clearListeners,
    getListeners,
    removeListener,
    toEvent() {
      return {
        addListener,
        hasListener,
        hasListeners,
        removeListener
      };
    }
  };
  function addListener(cb, ...options) {
    const _options = typeof optionsSelector === "function" && optionsSelector(...options) || options;
    _cbs.set(cb, _options);
  }
  function hasListener(cb) {
    return _cbs.has(cb);
  }
  function hasListeners() {
    return _cbs.size > 0;
  }
  function callListeners(...args) {
    _cbs.forEach((options, cb) => {
      const cbArgs = eventSelector(...options, ...args);
      if (cbArgs) {
        cb(...cbArgs);
      }
    });
  }
  function removeListener(cb) {
    _cbs.delete(cb);
  }
  function clearListeners() {
    _cbs.clear();
  }
  function getListeners() {
    return new Set(_cbs.keys());
  }
}
const addEvent = ({ name: name2, parameters }, target) => {
  const event = createEvent((...args) => {
    if (args.length > parameters.length) {
      throw new Error(
        `Max number of arguments for ${name2}.addListener is ${length}`
      );
    }
    return args;
  });
  Object.assign(target, { [name2]: event });
  return event;
};
const addFunction = ({ name: name2 }, target) => {
  const fn2 = vi.fn();
  Object.assign(target, { [name2]: fn2 });
  return fn2;
};
const addProperty = ({ name: name2, value = void 0 }, target) => {
  switch (value) {
    case "%storage%":
      value = addStorageArea();
      break;
  }
  Object.assign(target, { [name2]: value });
  return value;
};
function addStorageArea() {
  return {
    clear: vi.fn(),
    get: vi.fn(),
    getBytesInUse: vi.fn(),
    remove: vi.fn(),
    set: vi.fn()
  };
}
function createHandler(schema = jestChromeSchema) {
  return {
    ownKeys() {
      return Reflect.ownKeys(schema);
    },
    getOwnPropertyDescriptor(target, prop) {
      if (prop in schema) {
        return {
          enumerable: true,
          configurable: true
        };
      } else {
        return {
          enumerable: false,
          configurable: false
        };
      }
    },
    set(target, key, value) {
      if (key in schema && key === "lastError" && !(typeof value === "object" && typeof (value == null ? void 0 : value.message) === "string")) {
        throw new TypeError(
          "chrome.runtime.lastError should be type { message: string }"
        );
      }
      return Reflect.set(target, key, value);
    },
    deleteProperty(target, key) {
      return Reflect.set(target, key, null);
    },
    has(target, key) {
      const inTarget = key in target && Reflect.get(target, key);
      return inTarget !== null && !!inTarget;
    },
    get(target, key) {
      if (key in target) {
        const value = Reflect.get(target, key);
        return value !== null ? value : void 0;
      } else if (key in schema) {
        switch (schema[key].type) {
          case "event":
            return addEvent(schema[key], target);
          case "function":
            return addFunction(schema[key], target);
          case "property":
            return addProperty(schema[key], target);
          default: {
            const proxy2 = new Proxy(
              {},
              createHandler(schema[key])
            );
            Object.assign(target, { [key]: proxy2 });
            return proxy2;
          }
        }
      } else {
        return void 0;
      }
    }
  };
}
const chrome = new Proxy(
  {},
  createHandler()
);
var sourcemapCodec_umd = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    factory(exports);
  })(commonjsGlobal$1, function(exports2) {
    const comma = ",".charCodeAt(0);
    const semicolon = ";".charCodeAt(0);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const intToChar = new Uint8Array(64);
    const charToInt = new Uint8Array(128);
    for (let i2 = 0; i2 < chars.length; i2++) {
      const c = chars.charCodeAt(i2);
      intToChar[i2] = c;
      charToInt[c] = i2;
    }
    const td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
      decode(buf) {
        const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
        return out.toString();
      }
    } : {
      decode(buf) {
        let out = "";
        for (let i2 = 0; i2 < buf.length; i2++) {
          out += String.fromCharCode(buf[i2]);
        }
        return out;
      }
    };
    function decode2(mappings2) {
      const state = new Int32Array(5);
      const decoded = [];
      let index = 0;
      do {
        const semi = indexOf2(mappings2, index);
        const line = [];
        let sorted = true;
        let lastCol = 0;
        state[0] = 0;
        for (let i2 = index; i2 < semi; i2++) {
          let seg;
          i2 = decodeInteger(mappings2, i2, state, 0);
          const col = state[0];
          if (col < lastCol)
            sorted = false;
          lastCol = col;
          if (hasMoreVlq(mappings2, i2, semi)) {
            i2 = decodeInteger(mappings2, i2, state, 1);
            i2 = decodeInteger(mappings2, i2, state, 2);
            i2 = decodeInteger(mappings2, i2, state, 3);
            if (hasMoreVlq(mappings2, i2, semi)) {
              i2 = decodeInteger(mappings2, i2, state, 4);
              seg = [col, state[1], state[2], state[3], state[4]];
            } else {
              seg = [col, state[1], state[2], state[3]];
            }
          } else {
            seg = [col];
          }
          line.push(seg);
        }
        if (!sorted)
          sort2(line);
        decoded.push(line);
        index = semi + 1;
      } while (index <= mappings2.length);
      return decoded;
    }
    function indexOf2(mappings2, index) {
      const idx = mappings2.indexOf(";", index);
      return idx === -1 ? mappings2.length : idx;
    }
    function decodeInteger(mappings2, pos, state, j) {
      let value = 0;
      let shift = 0;
      let integer = 0;
      do {
        const c = mappings2.charCodeAt(pos++);
        integer = charToInt[c];
        value |= (integer & 31) << shift;
        shift += 5;
      } while (integer & 32);
      const shouldNegate = value & 1;
      value >>>= 1;
      if (shouldNegate) {
        value = -2147483648 | -value;
      }
      state[j] += value;
      return pos;
    }
    function hasMoreVlq(mappings2, i2, length2) {
      if (i2 >= length2)
        return false;
      return mappings2.charCodeAt(i2) !== comma;
    }
    function sort2(line) {
      line.sort(sortComparator);
    }
    function sortComparator(a, b2) {
      return a[0] - b2[0];
    }
    function encode2(decoded) {
      const state = new Int32Array(5);
      const bufLength = 1024 * 16;
      const subLength = bufLength - 36;
      const buf = new Uint8Array(bufLength);
      const sub = buf.subarray(0, subLength);
      let pos = 0;
      let out = "";
      for (let i2 = 0; i2 < decoded.length; i2++) {
        const line = decoded[i2];
        if (i2 > 0) {
          if (pos === bufLength) {
            out += td.decode(buf);
            pos = 0;
          }
          buf[pos++] = semicolon;
        }
        if (line.length === 0)
          continue;
        state[0] = 0;
        for (let j = 0; j < line.length; j++) {
          const segment = line[j];
          if (pos > subLength) {
            out += td.decode(sub);
            buf.copyWithin(0, subLength, pos);
            pos -= subLength;
          }
          if (j > 0)
            buf[pos++] = comma;
          pos = encodeInteger2(buf, pos, state, segment, 0);
          if (segment.length === 1)
            continue;
          pos = encodeInteger2(buf, pos, state, segment, 1);
          pos = encodeInteger2(buf, pos, state, segment, 2);
          pos = encodeInteger2(buf, pos, state, segment, 3);
          if (segment.length === 4)
            continue;
          pos = encodeInteger2(buf, pos, state, segment, 4);
        }
      }
      return out + td.decode(buf.subarray(0, pos));
    }
    function encodeInteger2(buf, pos, state, segment, j) {
      const next = segment[j];
      let num = next - state[j];
      state[j] = next;
      num = num < 0 ? -num << 1 | 1 : num << 1;
      do {
        let clamped = num & 31;
        num >>>= 5;
        if (num > 0)
          clamped |= 32;
        buf[pos++] = intToChar[clamped];
      } while (num > 0);
      return pos;
    }
    exports2.decode = decode2;
    exports2.encode = encode2;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
})(sourcemapCodec_umd, sourcemapCodec_umd.exports);
var sourcemapCodec_umdExports = sourcemapCodec_umd.exports;
class BitSet {
  constructor(arg) {
    this.bits = arg instanceof BitSet ? arg.bits.slice() : [];
  }
  add(n2) {
    this.bits[n2 >> 5] |= 1 << (n2 & 31);
  }
  has(n2) {
    return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
  }
}
class Chunk {
  constructor(start, end, content) {
    this.start = start;
    this.end = end;
    this.original = content;
    this.intro = "";
    this.outro = "";
    this.content = content;
    this.storeName = false;
    this.edited = false;
    {
      this.previous = null;
      this.next = null;
    }
  }
  appendLeft(content) {
    this.outro += content;
  }
  appendRight(content) {
    this.intro = this.intro + content;
  }
  clone() {
    const chunk = new Chunk(this.start, this.end, this.original);
    chunk.intro = this.intro;
    chunk.outro = this.outro;
    chunk.content = this.content;
    chunk.storeName = this.storeName;
    chunk.edited = this.edited;
    return chunk;
  }
  contains(index) {
    return this.start < index && index < this.end;
  }
  eachNext(fn2) {
    let chunk = this;
    while (chunk) {
      fn2(chunk);
      chunk = chunk.next;
    }
  }
  eachPrevious(fn2) {
    let chunk = this;
    while (chunk) {
      fn2(chunk);
      chunk = chunk.previous;
    }
  }
  edit(content, storeName, contentOnly) {
    this.content = content;
    if (!contentOnly) {
      this.intro = "";
      this.outro = "";
    }
    this.storeName = storeName;
    this.edited = true;
    return this;
  }
  prependLeft(content) {
    this.outro = content + this.outro;
  }
  prependRight(content) {
    this.intro = content + this.intro;
  }
  split(index) {
    const sliceIndex = index - this.start;
    const originalBefore = this.original.slice(0, sliceIndex);
    const originalAfter = this.original.slice(sliceIndex);
    this.original = originalBefore;
    const newChunk = new Chunk(index, this.end, originalAfter);
    newChunk.outro = this.outro;
    this.outro = "";
    this.end = index;
    if (this.edited) {
      newChunk.edit("", false);
      this.content = "";
    } else {
      this.content = originalBefore;
    }
    newChunk.next = this.next;
    if (newChunk.next)
      newChunk.next.previous = newChunk;
    newChunk.previous = this;
    this.next = newChunk;
    return newChunk;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(rx) {
    this.outro = this.outro.replace(rx, "");
    if (this.outro.length)
      return true;
    const trimmed = this.content.replace(rx, "");
    if (trimmed.length) {
      if (trimmed !== this.content) {
        this.split(this.start + trimmed.length).edit("", void 0, true);
      }
      return true;
    } else {
      this.edit("", void 0, true);
      this.intro = this.intro.replace(rx, "");
      if (this.intro.length)
        return true;
    }
  }
  trimStart(rx) {
    this.intro = this.intro.replace(rx, "");
    if (this.intro.length)
      return true;
    const trimmed = this.content.replace(rx, "");
    if (trimmed.length) {
      if (trimmed !== this.content) {
        this.split(this.end - trimmed.length);
        this.edit("", void 0, true);
      }
      return true;
    } else {
      this.edit("", void 0, true);
      this.outro = this.outro.replace(rx, "");
      if (this.outro.length)
        return true;
    }
  }
}
function getBtoa() {
  if (typeof window !== "undefined" && typeof window.btoa === "function") {
    return (str) => window.btoa(unescape(encodeURIComponent(str)));
  } else if (typeof Buffer === "function") {
    return (str) => Buffer.from(str, "utf-8").toString("base64");
  } else {
    return () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
  }
}
const btoa = /* @__PURE__ */ getBtoa();
class SourceMap {
  constructor(properties) {
    this.version = 3;
    this.file = properties.file;
    this.sources = properties.sources;
    this.sourcesContent = properties.sourcesContent;
    this.names = properties.names;
    this.mappings = sourcemapCodec_umdExports.encode(properties.mappings);
    if (typeof properties.x_google_ignoreList !== "undefined") {
      this.x_google_ignoreList = properties.x_google_ignoreList;
    }
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
  }
}
function guessIndent(code2) {
  const lines = code2.split("\n");
  const tabbed = lines.filter((line) => /^\t+/.test(line));
  const spaced = lines.filter((line) => /^ {2,}/.test(line));
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  const min = spaced.reduce((previous, current) => {
    const numSpaces = /^ +/.exec(current)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  const fromParts = from.split(/[/\\]/);
  const toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    let i2 = fromParts.length;
    while (i2--)
      fromParts[i2] = "..";
  }
  return fromParts.concat(toParts).join("/");
}
const toString = Object.prototype.toString;
function isObject(thing) {
  return toString.call(thing) === "[object Object]";
}
function getLocator(source) {
  const originalLines = source.split("\n");
  const lineOffsets = [];
  for (let i2 = 0, pos = 0; i2 < originalLines.length; i2++) {
    lineOffsets.push(pos);
    pos += originalLines[i2].length + 1;
  }
  return function locate(index) {
    let i2 = 0;
    let j = lineOffsets.length;
    while (i2 < j) {
      const m2 = i2 + j >> 1;
      if (index < lineOffsets[m2]) {
        j = m2;
      } else {
        i2 = m2 + 1;
      }
    }
    const line = i2 - 1;
    const column = index - lineOffsets[line];
    return { line, column };
  };
}
class Mappings {
  constructor(hires) {
    this.hires = hires;
    this.generatedCodeLine = 0;
    this.generatedCodeColumn = 0;
    this.raw = [];
    this.rawSegments = this.raw[this.generatedCodeLine] = [];
    this.pending = null;
  }
  addEdit(sourceIndex, content, loc, nameIndex) {
    if (content.length) {
      const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
      if (nameIndex >= 0) {
        segment.push(nameIndex);
      }
      this.rawSegments.push(segment);
    } else if (this.pending) {
      this.rawSegments.push(this.pending);
    }
    this.advance(content);
    this.pending = null;
  }
  addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
    let originalCharIndex = chunk.start;
    let first = true;
    while (originalCharIndex < chunk.end) {
      if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
        this.rawSegments.push([this.generatedCodeColumn, sourceIndex, loc.line, loc.column]);
      }
      if (original[originalCharIndex] === "\n") {
        loc.line += 1;
        loc.column = 0;
        this.generatedCodeLine += 1;
        this.raw[this.generatedCodeLine] = this.rawSegments = [];
        this.generatedCodeColumn = 0;
        first = true;
      } else {
        loc.column += 1;
        this.generatedCodeColumn += 1;
        first = false;
      }
      originalCharIndex += 1;
    }
    this.pending = null;
  }
  advance(str) {
    if (!str)
      return;
    const lines = str.split("\n");
    if (lines.length > 1) {
      for (let i2 = 0; i2 < lines.length - 1; i2++) {
        this.generatedCodeLine++;
        this.raw[this.generatedCodeLine] = this.rawSegments = [];
      }
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += lines[lines.length - 1].length;
  }
}
const n = "\n";
const warned = {
  insertLeft: false,
  insertRight: false,
  storeName: false
};
class MagicString {
  constructor(string2, options = {}) {
    const chunk = new Chunk(0, string2.length, string2);
    Object.defineProperties(this, {
      original: { writable: true, value: string2 },
      outro: { writable: true, value: "" },
      intro: { writable: true, value: "" },
      firstChunk: { writable: true, value: chunk },
      lastChunk: { writable: true, value: chunk },
      lastSearchedChunk: { writable: true, value: chunk },
      byStart: { writable: true, value: {} },
      byEnd: { writable: true, value: {} },
      filename: { writable: true, value: options.filename },
      indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
      sourcemapLocations: { writable: true, value: new BitSet() },
      storedNames: { writable: true, value: {} },
      indentStr: { writable: true, value: void 0 },
      ignoreList: { writable: true, value: options.ignoreList }
    });
    this.byStart[0] = chunk;
    this.byEnd[string2.length] = chunk;
  }
  addSourcemapLocation(char) {
    this.sourcemapLocations.add(char);
  }
  append(content) {
    if (typeof content !== "string")
      throw new TypeError("outro content must be a string");
    this.outro += content;
    return this;
  }
  appendLeft(index, content) {
    if (typeof content !== "string")
      throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byEnd[index];
    if (chunk) {
      chunk.appendLeft(content);
    } else {
      this.intro += content;
    }
    return this;
  }
  appendRight(index, content) {
    if (typeof content !== "string")
      throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byStart[index];
    if (chunk) {
      chunk.appendRight(content);
    } else {
      this.outro += content;
    }
    return this;
  }
  clone() {
    const cloned = new MagicString(this.original, { filename: this.filename });
    let originalChunk = this.firstChunk;
    let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
    while (originalChunk) {
      cloned.byStart[clonedChunk.start] = clonedChunk;
      cloned.byEnd[clonedChunk.end] = clonedChunk;
      const nextOriginalChunk = originalChunk.next;
      const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
      if (nextClonedChunk) {
        clonedChunk.next = nextClonedChunk;
        nextClonedChunk.previous = clonedChunk;
        clonedChunk = nextClonedChunk;
      }
      originalChunk = nextOriginalChunk;
    }
    cloned.lastChunk = clonedChunk;
    if (this.indentExclusionRanges) {
      cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
    }
    cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
    cloned.intro = this.intro;
    cloned.outro = this.outro;
    return cloned;
  }
  generateDecodedMap(options) {
    options = options || {};
    const sourceIndex = 0;
    const names = Object.keys(this.storedNames);
    const mappings2 = new Mappings(options.hires);
    const locate = getLocator(this.original);
    if (this.intro) {
      mappings2.advance(this.intro);
    }
    this.firstChunk.eachNext((chunk) => {
      const loc = locate(chunk.start);
      if (chunk.intro.length)
        mappings2.advance(chunk.intro);
      if (chunk.edited) {
        mappings2.addEdit(
          sourceIndex,
          chunk.content,
          loc,
          chunk.storeName ? names.indexOf(chunk.original) : -1
        );
      } else {
        mappings2.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
      }
      if (chunk.outro.length)
        mappings2.advance(chunk.outro);
    });
    return {
      file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
      sources: [options.source ? getRelativePath(options.file || "", options.source) : options.file || ""],
      sourcesContent: options.includeContent ? [this.original] : void 0,
      names,
      mappings: mappings2.raw,
      x_google_ignoreList: this.ignoreList ? [sourceIndex] : void 0
    };
  }
  generateMap(options) {
    return new SourceMap(this.generateDecodedMap(options));
  }
  _ensureindentStr() {
    if (this.indentStr === void 0) {
      this.indentStr = guessIndent(this.original);
    }
  }
  _getRawIndentString() {
    this._ensureindentStr();
    return this.indentStr;
  }
  getIndentString() {
    this._ensureindentStr();
    return this.indentStr === null ? "	" : this.indentStr;
  }
  indent(indentStr, options) {
    const pattern = /^[^\r\n]/gm;
    if (isObject(indentStr)) {
      options = indentStr;
      indentStr = void 0;
    }
    if (indentStr === void 0) {
      this._ensureindentStr();
      indentStr = this.indentStr || "	";
    }
    if (indentStr === "")
      return this;
    options = options || {};
    const isExcluded = {};
    if (options.exclude) {
      const exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
      exclusions.forEach((exclusion) => {
        for (let i2 = exclusion[0]; i2 < exclusion[1]; i2 += 1) {
          isExcluded[i2] = true;
        }
      });
    }
    let shouldIndentNextCharacter = options.indentStart !== false;
    const replacer = (match) => {
      if (shouldIndentNextCharacter)
        return `${indentStr}${match}`;
      shouldIndentNextCharacter = true;
      return match;
    };
    this.intro = this.intro.replace(pattern, replacer);
    let charIndex = 0;
    let chunk = this.firstChunk;
    while (chunk) {
      const end = chunk.end;
      if (chunk.edited) {
        if (!isExcluded[charIndex]) {
          chunk.content = chunk.content.replace(pattern, replacer);
          if (chunk.content.length) {
            shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
          }
        }
      } else {
        charIndex = chunk.start;
        while (charIndex < end) {
          if (!isExcluded[charIndex]) {
            const char = this.original[charIndex];
            if (char === "\n") {
              shouldIndentNextCharacter = true;
            } else if (char !== "\r" && shouldIndentNextCharacter) {
              shouldIndentNextCharacter = false;
              if (charIndex === chunk.start) {
                chunk.prependRight(indentStr);
              } else {
                this._splitChunk(chunk, charIndex);
                chunk = chunk.next;
                chunk.prependRight(indentStr);
              }
            }
          }
          charIndex += 1;
        }
      }
      charIndex = chunk.end;
      chunk = chunk.next;
    }
    this.outro = this.outro.replace(pattern, replacer);
    return this;
  }
  insert() {
    throw new Error(
      "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
    );
  }
  insertLeft(index, content) {
    if (!warned.insertLeft) {
      console.warn(
        "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
      );
      warned.insertLeft = true;
    }
    return this.appendLeft(index, content);
  }
  insertRight(index, content) {
    if (!warned.insertRight) {
      console.warn(
        "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
      );
      warned.insertRight = true;
    }
    return this.prependRight(index, content);
  }
  move(start, end, index) {
    if (index >= start && index <= end)
      throw new Error("Cannot move a selection inside itself");
    this._split(start);
    this._split(end);
    this._split(index);
    const first = this.byStart[start];
    const last = this.byEnd[end];
    const oldLeft = first.previous;
    const oldRight = last.next;
    const newRight = this.byStart[index];
    if (!newRight && last === this.lastChunk)
      return this;
    const newLeft = newRight ? newRight.previous : this.lastChunk;
    if (oldLeft)
      oldLeft.next = oldRight;
    if (oldRight)
      oldRight.previous = oldLeft;
    if (newLeft)
      newLeft.next = first;
    if (newRight)
      newRight.previous = last;
    if (!first.previous)
      this.firstChunk = last.next;
    if (!last.next) {
      this.lastChunk = first.previous;
      this.lastChunk.next = null;
    }
    first.previous = newLeft;
    last.next = newRight || null;
    if (!newLeft)
      this.firstChunk = first;
    if (!newRight)
      this.lastChunk = last;
    return this;
  }
  overwrite(start, end, content, options) {
    options = options || {};
    return this.update(start, end, content, { ...options, overwrite: !options.contentOnly });
  }
  update(start, end, content, options) {
    if (typeof content !== "string")
      throw new TypeError("replacement content must be a string");
    while (start < 0)
      start += this.original.length;
    while (end < 0)
      end += this.original.length;
    if (end > this.original.length)
      throw new Error("end is out of bounds");
    if (start === end)
      throw new Error(
        "Cannot overwrite a zero-length range – use appendLeft or prependRight instead"
      );
    this._split(start);
    this._split(end);
    if (options === true) {
      if (!warned.storeName) {
        console.warn(
          "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
        );
        warned.storeName = true;
      }
      options = { storeName: true };
    }
    const storeName = options !== void 0 ? options.storeName : false;
    const overwrite = options !== void 0 ? options.overwrite : false;
    if (storeName) {
      const original = this.original.slice(start, end);
      Object.defineProperty(this.storedNames, original, {
        writable: true,
        value: true,
        enumerable: true
      });
    }
    const first = this.byStart[start];
    const last = this.byEnd[end];
    if (first) {
      let chunk = first;
      while (chunk !== last) {
        if (chunk.next !== this.byStart[chunk.end]) {
          throw new Error("Cannot overwrite across a split point");
        }
        chunk = chunk.next;
        chunk.edit("", false);
      }
      first.edit(content, storeName, !overwrite);
    } else {
      const newChunk = new Chunk(start, end, "").edit(content, storeName);
      last.next = newChunk;
      newChunk.previous = last;
    }
    return this;
  }
  prepend(content) {
    if (typeof content !== "string")
      throw new TypeError("outro content must be a string");
    this.intro = content + this.intro;
    return this;
  }
  prependLeft(index, content) {
    if (typeof content !== "string")
      throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byEnd[index];
    if (chunk) {
      chunk.prependLeft(content);
    } else {
      this.intro = content + this.intro;
    }
    return this;
  }
  prependRight(index, content) {
    if (typeof content !== "string")
      throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byStart[index];
    if (chunk) {
      chunk.prependRight(content);
    } else {
      this.outro = content + this.outro;
    }
    return this;
  }
  remove(start, end) {
    while (start < 0)
      start += this.original.length;
    while (end < 0)
      end += this.original.length;
    if (start === end)
      return this;
    if (start < 0 || end > this.original.length)
      throw new Error("Character is out of bounds");
    if (start > end)
      throw new Error("end must be greater than start");
    this._split(start);
    this._split(end);
    let chunk = this.byStart[start];
    while (chunk) {
      chunk.intro = "";
      chunk.outro = "";
      chunk.edit("");
      chunk = end > chunk.end ? this.byStart[chunk.end] : null;
    }
    return this;
  }
  lastChar() {
    if (this.outro.length)
      return this.outro[this.outro.length - 1];
    let chunk = this.lastChunk;
    do {
      if (chunk.outro.length)
        return chunk.outro[chunk.outro.length - 1];
      if (chunk.content.length)
        return chunk.content[chunk.content.length - 1];
      if (chunk.intro.length)
        return chunk.intro[chunk.intro.length - 1];
    } while (chunk = chunk.previous);
    if (this.intro.length)
      return this.intro[this.intro.length - 1];
    return "";
  }
  lastLine() {
    let lineIndex = this.outro.lastIndexOf(n);
    if (lineIndex !== -1)
      return this.outro.substr(lineIndex + 1);
    let lineStr = this.outro;
    let chunk = this.lastChunk;
    do {
      if (chunk.outro.length > 0) {
        lineIndex = chunk.outro.lastIndexOf(n);
        if (lineIndex !== -1)
          return chunk.outro.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.outro + lineStr;
      }
      if (chunk.content.length > 0) {
        lineIndex = chunk.content.lastIndexOf(n);
        if (lineIndex !== -1)
          return chunk.content.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.content + lineStr;
      }
      if (chunk.intro.length > 0) {
        lineIndex = chunk.intro.lastIndexOf(n);
        if (lineIndex !== -1)
          return chunk.intro.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.intro + lineStr;
      }
    } while (chunk = chunk.previous);
    lineIndex = this.intro.lastIndexOf(n);
    if (lineIndex !== -1)
      return this.intro.substr(lineIndex + 1) + lineStr;
    return this.intro + lineStr;
  }
  slice(start = 0, end = this.original.length) {
    while (start < 0)
      start += this.original.length;
    while (end < 0)
      end += this.original.length;
    let result = "";
    let chunk = this.firstChunk;
    while (chunk && (chunk.start > start || chunk.end <= start)) {
      if (chunk.start < end && chunk.end >= end) {
        return result;
      }
      chunk = chunk.next;
    }
    if (chunk && chunk.edited && chunk.start !== start)
      throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
    const startChunk = chunk;
    while (chunk) {
      if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
        result += chunk.intro;
      }
      const containsEnd = chunk.start < end && chunk.end >= end;
      if (containsEnd && chunk.edited && chunk.end !== end)
        throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
      const sliceStart = startChunk === chunk ? start - chunk.start : 0;
      const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
      result += chunk.content.slice(sliceStart, sliceEnd);
      if (chunk.outro && (!containsEnd || chunk.end === end)) {
        result += chunk.outro;
      }
      if (containsEnd) {
        break;
      }
      chunk = chunk.next;
    }
    return result;
  }
  // TODO deprecate this? not really very useful
  snip(start, end) {
    const clone = this.clone();
    clone.remove(0, start);
    clone.remove(end, clone.original.length);
    return clone;
  }
  _split(index) {
    if (this.byStart[index] || this.byEnd[index])
      return;
    let chunk = this.lastSearchedChunk;
    const searchForward = index > chunk.end;
    while (chunk) {
      if (chunk.contains(index))
        return this._splitChunk(chunk, index);
      chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
    }
  }
  _splitChunk(chunk, index) {
    if (chunk.edited && chunk.content.length) {
      const loc = getLocator(this.original)(index);
      throw new Error(
        `Cannot split a chunk that has already been edited (${loc.line}:${loc.column} – "${chunk.original}")`
      );
    }
    const newChunk = chunk.split(index);
    this.byEnd[index] = chunk;
    this.byStart[index] = newChunk;
    this.byEnd[newChunk.end] = newChunk;
    if (chunk === this.lastChunk)
      this.lastChunk = newChunk;
    this.lastSearchedChunk = chunk;
    return true;
  }
  toString() {
    let str = this.intro;
    let chunk = this.firstChunk;
    while (chunk) {
      str += chunk.toString();
      chunk = chunk.next;
    }
    return str + this.outro;
  }
  isEmpty() {
    let chunk = this.firstChunk;
    do {
      if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim())
        return false;
    } while (chunk = chunk.next);
    return true;
  }
  length() {
    let chunk = this.firstChunk;
    let length2 = 0;
    do {
      length2 += chunk.intro.length + chunk.content.length + chunk.outro.length;
    } while (chunk = chunk.next);
    return length2;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(charType) {
    return this.trimStart(charType).trimEnd(charType);
  }
  trimEndAborted(charType) {
    const rx = new RegExp((charType || "\\s") + "+$");
    this.outro = this.outro.replace(rx, "");
    if (this.outro.length)
      return true;
    let chunk = this.lastChunk;
    do {
      const end = chunk.end;
      const aborted = chunk.trimEnd(rx);
      if (chunk.end !== end) {
        if (this.lastChunk === chunk) {
          this.lastChunk = chunk.next;
        }
        this.byEnd[chunk.end] = chunk;
        this.byStart[chunk.next.start] = chunk.next;
        this.byEnd[chunk.next.end] = chunk.next;
      }
      if (aborted)
        return true;
      chunk = chunk.previous;
    } while (chunk);
    return false;
  }
  trimEnd(charType) {
    this.trimEndAborted(charType);
    return this;
  }
  trimStartAborted(charType) {
    const rx = new RegExp("^" + (charType || "\\s") + "+");
    this.intro = this.intro.replace(rx, "");
    if (this.intro.length)
      return true;
    let chunk = this.firstChunk;
    do {
      const end = chunk.end;
      const aborted = chunk.trimStart(rx);
      if (chunk.end !== end) {
        if (chunk === this.lastChunk)
          this.lastChunk = chunk.next;
        this.byEnd[chunk.end] = chunk;
        this.byStart[chunk.next.start] = chunk.next;
        this.byEnd[chunk.next.end] = chunk.next;
      }
      if (aborted)
        return true;
      chunk = chunk.next;
    } while (chunk);
    return false;
  }
  trimStart(charType) {
    this.trimStartAborted(charType);
    return this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(searchValue, replacement) {
    function getReplacement(match, str) {
      if (typeof replacement === "string") {
        return replacement.replace(/\$(\$|&|\d+)/g, (_, i2) => {
          if (i2 === "$")
            return "$";
          if (i2 === "&")
            return match[0];
          const num = +i2;
          if (num < match.length)
            return match[+i2];
          return `$${i2}`;
        });
      } else {
        return replacement(...match, match.index, str, match.groups);
      }
    }
    function matchAll(re2, str) {
      let match;
      const matches = [];
      while (match = re2.exec(str)) {
        matches.push(match);
      }
      return matches;
    }
    if (searchValue.global) {
      const matches = matchAll(searchValue, this.original);
      matches.forEach((match) => {
        if (match.index != null)
          this.overwrite(
            match.index,
            match.index + match[0].length,
            getReplacement(match, this.original)
          );
      });
    } else {
      const match = this.original.match(searchValue);
      if (match && match.index != null)
        this.overwrite(
          match.index,
          match.index + match[0].length,
          getReplacement(match, this.original)
        );
    }
    return this;
  }
  _replaceString(string2, replacement) {
    const { original } = this;
    const index = original.indexOf(string2);
    if (index !== -1) {
      this.overwrite(index, index + string2.length, replacement);
    }
    return this;
  }
  replace(searchValue, replacement) {
    if (typeof searchValue === "string") {
      return this._replaceString(searchValue, replacement);
    }
    return this._replaceRegexp(searchValue, replacement);
  }
  _replaceAllString(string2, replacement) {
    const { original } = this;
    const stringLength = string2.length;
    for (let index = original.indexOf(string2); index !== -1; index = original.indexOf(string2, index + stringLength)) {
      this.overwrite(index, index + stringLength, replacement);
    }
    return this;
  }
  replaceAll(searchValue, replacement) {
    if (typeof searchValue === "string") {
      return this._replaceAllString(searchValue, replacement);
    }
    if (!searchValue.global) {
      throw new TypeError(
        "MagicString.prototype.replaceAll called with a non-global RegExp argument"
      );
    }
    return this._replaceRegexp(searchValue, replacement);
  }
}
const magicString_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SourceMap,
  default: MagicString
}, Symbol.toStringTag, { value: "Module" }));
export {
  chrome
};
