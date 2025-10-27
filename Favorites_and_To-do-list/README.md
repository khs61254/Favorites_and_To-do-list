프로젝트 제목 : 나를 위한 즐겨찾기 & 투두리스트

만들게 된 계기 : 
    즐겨찾기(북마크)를 많이 하다보니 분류해서 구분하기 어렵고, 한 눈에 알아보기 쉽지 않았음.
    또한, 평소 할 일들을 메모장에 적어두는데, 다른 앱들은 사용감이 불편하고 배우기 귀찮아서 단순한 디자인으로 직접 제작.

주요 기능 : 
    #즐겨찾기
    1. 즐겨찾기 기능
    2. 즐겨찾기 분류 기능(카테고리)
    3. 최근 방문 링크 기록, 바로가기 기능
    4. 수정 기능
    5. 삭제 기능
    6. 요약(부제목) 기능

    #투두리스트
    1. 투두리스크 기능
    2. 강조 기능
    3. 수정 기능
    4. 비우기 기능
    5. 완료된 항목 자동 삭제 기능
    6. 마우스 오버시 상세정보 기능, 더블클릭 시 수정

실행 방법 : 터미널에 'npm run dev' 입력 후 사이트 접속

기술 스택 : React 라이브러리, Gemini cli, Tailwind CSS, Git/GitHub, Node.js

AI 활용 방법 : gemini cli을 이용한 자연어 프롬프팅 및 코드 자동 생성, 디버깅





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

