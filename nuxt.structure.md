< nuxt 프로젝트 디렉터리 구조 >

-src
  --bundle
    ---api 
    ---assets
    ---common
    ---components
    ---layouts
    ---static
--pages
--store

-------------------------------------------------

# src
- 앱을 구성하는 모든 소스를 포함한 폴더입니다.

-------------------------------------------------

# bundle
- 편의상 pages와 store을 제외한 폴더들을 포함합니다.
  api/assets/common/components/layouts/static

# - api
- api 관련 모든 내용을 포함하는 폴더로, 기능 혹은 페이지별로 문서를 분리해 사용합니다. 
- ex) user.api.ts, 
      order.store.ts

# - assets
- css, sass, image, js 등 컴파일되지 않는 어셋 요소를 포함합니다.  

# - common
- 전역적(글로벌)으로 사용할 수 있는 요소들을 포함합니다.
- 기본적으로 component 폴더가 존재하며,
  component 폴더 하위에는 글로벌 컴포넌트만 추가합니다.

# - components
- 글로벌 컴포넌트가 아닌 컴포넌트들을 포함합니다.
- 페이지, 혹은 기능별로 폴더를 분리해 사용합니다.
- ex) order
      user

# - layouts
- error, default 를 포함한 nuxt 레이아웃 문서를 포합합니다.

# static
- favicon 등 정적 문서들을 포함합니다.

-------------------------------------------------

# page
- index.vue를 포함한 vue 페이지들을 포함합니다.

-------------------------------------------------

# store
- Vuex의 store 파일을 포함합니다. 
- 페이지, 혹은 기능별로 파일을 분리해 사용합니다.
- ex) order.store.ts
  user.store.ts


