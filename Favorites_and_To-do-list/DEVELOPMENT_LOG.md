프로젝트 명 : 나를 위한 즐겨찾기 & 투두리스트

개발 기간 : 1일

목표 : 즐겨찾기를 빠르고 심플하게, 투두리스트와 함께 하루를 절약하자!


===============================================================================================
개발 과정 : 
    1. 기본 개발 환경 구축
    2. DEVELOPMENT_LOG.md 파일 생성
    3. 첫 프롬프트 작성, 뼈대 구축

너는 React와 Tailwind CSS에 매우 능숙한 시니어 프론트엔드 개발자야.
'즐겨찾기 & To-do-list' 웹 애플리케이션의 프로토타입을 만들어 줘.

다음은 필수 요구사항이야:

1.  **기술 스택**: React (Hooks 사용), Tailwind CSS.
2.  **핵심 구조 (App.js)**:
    * `App` 컴포넌트에서 `useState`를 사용해 현재 활성화된 탭('bookmarks' 또는 'todos')을 관리하는 상태(`activeTab`)를 만들어 줘.
    * 상단에 "즐겨찾기"와 "To-do-list" 두 개의 탭 버튼을 만들어 줘.
    * 각 버튼을 클릭하면 `activeTab` 상태가 변경되어야 해.
    * 활성화된 탭 버튼은 시각적으로 구분되어야 해 (예: 파란색 하단 테두리 또는 다른 배경색).
    * `activeTab` 상태에 따라 아래에 렌더링되는 컴포넌트가 달라져야 해 (조건부 렌더링).

3.  **컴포넌트 분리**:
    * `Tabs.js`: 탭 버튼 UI를 담당하는 컴포넌트. `activeTab`과 `setActiveTab`을 props로 받아 상태를 관리해.
    * `BookmarkList.js`: "즐겨찾기" 탭이 활성화될 때 보여줄 컴포넌트. "즐겨찾기 목록"이라는 h2 태그와 간단한 목록 예시를 포함해 줘.
    * `TodoList.js`: "To-do-list" 탭이 활성화될 때 보여줄 컴포넌트. "할 일 목록"이라는 h2 태그와 간단한 목록 예시를 포함해 줘.

4.  **기능 구현 (기본)**:
    * **TodoList.js**:
        * `useState`로 할 일 목록(`todos`) 배열 상태를 관리해.
        * 할 일을 추가할 수 있는 `<input>`과 "추가" 버튼을 만들어 줘.
        * 각 할 일 항목을 표시하고, 완료 여부를 체크할 수 있는 체크박스와 "삭제" 버튼을 포함해 줘.
    * **BookmarkList.js**:
        * `useState`로 북마크 목록(`bookmarks`) 배열 상태를 관리해.
        * 북마크 이름과 URL을 입력받는 `<input>` 2개와 "추가" 버튼을 만들어 줘.
        * 각 북마크 항목을 `<a>` 태그로 표시하여 클릭 시 해당 URL로 이동하게 하고, "삭제" 버튼을 포함해 줘.

5.  **스타일링 (Tailwind CSS)**:
    * 전체적인 레이아웃은 `h-screen bg-gray-100`으로 설정해 줘.
    * 컨텐츠 영역은 `max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10` 스타일을 적용해 줘.
    * 탭 버튼은 `py-2 px-4 font-semibold` 스타일을 적용하고, 활성화된 탭은 `border-b-4 border-blue-500 text-blue-600` 스타일을, 비활성화 탭은 `text-gray-500` 스타일을 적용해 줘.
    * `input`과 `button`에 `rounded-md`, `shadow-sm`, `focus:ring-blue-500` 등 Tailwind의 기본 폼 스타일을 적용해 줘.
    * 목록 항목은 `flex justify-between items-center p-3 border-b` 스타일을 적용해 줘.

위 요구사항을 바탕으로 `App.js`, `Tabs.js`, `BookmarkList.js`, `TodoList.js` 4개의 컴포넌트 파일에 대한 전체 코드를 각각 생성해 줘.

    4. 즐겨찾기에 '카테고리' 기능 추가
    5. 카테고리 추가 버튼을 누르면 카테고리를 추가로 늘릴 수 있고, 그 카테고리 안에 원하는 즐겨찾기 링크와 이름이 들어가는 기능으로 수정