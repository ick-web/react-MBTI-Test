# MBTI 성격 유형 테스트 사이트 

## 📌 프로젝트 소개
이 프로젝트는 사용자가 MBTI 성격 유형 테스트를 진행하고 결과를 저장할 수 있는 웹 애플리케이션입니다. 또한, 회원가입 및 로그인 기능을 제공하며, 프로필을 관리할 수 있습니다.

## 🚀 주요 기능
### ✅ 인증 및 사용자 관리
- **회원가입**: 사용자가 새로운 계정을 생성할 수 있습니다.
- **로그인**: 기존 계정으로 로그인할 수 있습니다.
- **JWT 인증**을 활용하여 사용자의 보안을 강화하였습니다.
- **프로필 관리**: 사용자는 자신의 프로필 정보를 수정할 수 있습니다.

### ✅ MBTI 테스트
- 사용자는 질문에 답변하여 자신의 MBTI 유형을 확인할 수 있습니다.
- 테스트 결과를 저장하고 조회할 수 있습니다.

### ✅ 테스트 결과 관리
- **결과 저장**: 사용자의 MBTI 테스트 결과를 서버에 저장합니다.
- **결과 조회**: 저장된 테스트 결과를 목록으로 확인할 수 있습니다.
- **결과 삭제**: 특정 테스트 결과를 삭제할 수 있습니다.

## 🛠️ 사용 기술
### 🔹 프론트엔드
- React.js
- React Router
- Tailwind CSS (스타일링)
- TanStack Query (React Query, 데이터 관리)

### 🔹 백엔드
- JSON Server (로컬 API 서버 구축)
- Axios (API 요청 관리)
- JWT (JSON Web Token, 사용자 인증)

## 📂 프로젝트 구조
```
react-MBTI-Test/
├── public/
├── src/
│   ├── api/            # API 요청 관리
│   ├── components/     # 재사용 가능한 UI 컴포넌트
│   ├── pages/          # 주요 페이지 컴포넌트
│   ├── shared/         # 레이아웃 및 공통 요소
│   ├── utils/          # 유틸리티 함수 (MBTI 계산 로직 등)
│   ├── App.jsx         # 라우팅 및 전체 구조
│   ├── main.jsx        # 애플리케이션 진입점
├── db.json             # JSON Server를 위한 데이터베이스 파일
├── package.json        # 프로젝트 종속성 및 스크립트 설정
└── README.md           # 프로젝트 설명 파일
```

## 📝 API 엔드포인트
| 메서드 | 엔드포인트             | 설명 |
|--------|----------------------|------|
| POST   | `/register`          | 회원가입 |
| POST   | `/login`             | 로그인 |
| GET    | `/user`              | 프로필 정보 가져오기 |
| PATCH  | `/profile`           | 프로필 수정 |
| GET    | `/testResults`       | 모든 테스트 결과 조회 |
| POST   | `/testResults`       | 테스트 결과 저장 |
| DELETE | `/testResults/:id`   | 테스트 결과 삭제 |
| PATCH  | `/testResults/:id`   | 테스트 결과 업데이트 |

## 📌 추가 하고 싶은 기능
- OAuth 소셜 로그인 기능 추가 (Google, Kakao 등)
- MBTI 결과 페이지 UI 개선
- 다크 모드 지원

## 📢 트러블슈팅 블로그
- [블로그](https://devyu0001.tistory.com/73)

## 👨‍💻 사이트 배포
- [MBTI TEST](https://react-mbti-test-alpha.vercel.app/)

## 💡 느낀점
- **인증 및 권한 관리**를 통해 사용자의 데이터를 안전하게 보호할 수 있는 방법을 알게 되었습니다
- **Axios**와 Tanstack Query(React Query)를 활용하여 비동기 데이터를 효율적으로 관리 할 수 있게 되었습니다.
- **json-server**를 사용해 로컬 환경에서 API 서버를 구축하는 방법을 알게 되었습니다. 😊

