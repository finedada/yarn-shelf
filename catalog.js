let SOURCE={"headers": ["구매처or브랜드", "형태", "이름", "컬러", "합수or두께", "용량", "길이", "추천바늘", "구매처참고게이지1", "구매처참고게이지2", "비고", "참고컬러", "100g당 미터"], "items": []};
let initialChanges={};
try{const state=JSON.parse(localStorage.getItem('yarn-shelf-v2')||'null');if(state&&Array.isArray(state.source?.items)){SOURCE=state.source;initialChanges=state.changes||{}}}catch{}

const ORG_HEADERS=["고유ID", "구매처·브랜드", "실 이름", "컬러", "보관 형태", "원본 분류", "합수·두께 원문", "100g당 길이 입력(m)", "한 볼·타래 무게(g)", "한 볼·타래 길이(m)", "보유 볼·타래 수", "콘사 보유 무게(g)", "추가 잔여 실 무게(g)", "100g당 길이 계산(m)", "총 보유 무게(g)", "총 보유 길이(m)", "확인 상태", "확인할 내용", "추천 바늘", "참고 게이지 1", "참고 게이지 2", "비고 원문", "용량 원문", "길이 원문", "100g당 길이 원문", "출처 행"];
