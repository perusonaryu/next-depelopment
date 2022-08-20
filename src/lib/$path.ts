export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  "blog": {
    $url: (url?: { hash?: string }) => ({ pathname: '/blog' as const, hash: url?.hash }),
    "detail": {
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/detail' as const, hash: url?.hash }),
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/blog/detail/[id]' as const, query: { id }, hash: url?.hash })
      })
    }
  },
  "contact": {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  "portfolio": {
    $url: (url?: { hash?: string }) => ({ pathname: '/portfolio' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
