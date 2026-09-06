self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/scalus-2026-proposal/",
        "destination": "/scalus-2026-proposal/index.html"
      },
      {
        "source": "/scalus-2026-proposal/:path+/",
        "destination": "/scalus-2026-proposal/:path+/index.html"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()