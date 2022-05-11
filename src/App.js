import React from "react";
import ReactDOM, { render } from "react-dom";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// import App from './App';

function App() {
  const { t, i18n } = useTranslation();
  let rows = [];
  for (let i = 1; i < 43; i++) {
    let a = "Q3_Item" + i;
    rows.push(
      <div key={i}>
        <div>{"{"}</div>
        <div> "value": "item{i}",</div>
        <div>"text": "{t(a)}"</div>
        <div>{"}"},</div>
      </div>
    );
  }
  rows.push(
    <div key={43}>
      <div>{"{"}</div>
      <div> "value": "item43",</div>
      <div>"text": "{t("Q3_Item43")}"</div>
      <div>{"}"}</div>
    </div>
  );

  return (
    <div>
      <div>{"{"}</div>
      <div>"tracking":{"{"}</div>
      <div>
        "ggi": 83847, "proto_ver": "{"{VERSION}"}", "entity_type": "4523:83847:
        {"{VERSION}"}:HTML5:Ads","entity_id": "Survey"
      </div>
      <div>{"}"},</div>

      <div>"cookies":</div>
      <div>{"{"}</div>
      <div>"gtmId": "GTM-T99T3D8"</div>
      <div>{"}"},</div>

      <div>"cheat":</div>
      <div>{"{"}</div>
      <div> "enable": false</div>
      <div>{"}"},</div>

      <div>"links":</div>
      <div>{"{"}</div>
      <div>
        {" "}
        "oxford": "https://applaydu.kinder.com/static/public/Oxford/index.html"
      </div>
      <div>{"}"},</div>
      <div> "pages": [</div>
      <div>{"{"}</div>

      <div> "name": "page1", "elements": [</div>

      <div></div>

      <div>{"{"}</div>
      <div> "type": "text",</div>
      <div>"name": "Q1",</div>
      <div>"title": "{t("Q1_Title")}",</div>
      <div> "inputType": "month",</div>
      <div> "placeHolder": "{t("Q1_Subtitle_Month_Year")}"</div>
      <div>{"}"},</div>
      <div>{"{"}</div>

      <div>"type": "radiogroup",</div>
      <div>"name": "Q2",</div>
      <div>"title": "{t("Q2_Title")}",</div>

      <div> "choices": [</div>
      <div>{"{"}</div>
      <div> "value": "item1",</div>
      <div>"text": "{t("Q2_Item1")}"</div>
      <div>{"}"},</div>
      <div>{"{"}</div>
      <div> "value": "item2",</div>
      <div>"text": "{t("Q2_Item2")}"</div>
      <div>{"}"}</div>
      <div> ],</div>
      <div> "hasOther": true, "hasNone": true,</div>

      <div>"noneText": "{t("Q2_Item3")}",</div>
      <div>"otherText": "{t("Q2_Item4")}"</div>
      <div>{"}"},</div>
      <div>{"{"}</div>

      <div> "type": "checkbox", "name": "Q3",</div>
      <div>"title": "{t("Q3_Title")}",</div>
      <div>"choices": [</div>

      <div>{rows}</div>
      <div> ],</div>
      <div> "hasOther": true, "hasNone": true,</div>

<div>"noneText": "{t("Q2_Item3")}",</div>
<div>"otherText": "{t("Q2_Item4")}"</div>
      <div>{"}"},</div>

      {/* //Q3a */}
      <div>{"{"}</div>
      <div>
        {" "}
        "type": "radiogroup", "name": "Q3a", "visibleIf": "{"{Q3} notmulti"}" ,
      </div>
      <div> "title": "{t("Q3a_Title")}",</div>

      <div> "choices": [</div>
      <div>{"{"}</div>
      <div> "value": "item1",</div>
      <div>"text": "{t("Q3a_Item1")}"</div>
      <div>{"}"},</div>
      <div>{"{"}</div>
      <div> "value": "item2",</div>
      <div>"text": "{t("Q3a_Item2")}"</div>
      <div>{"}"}</div>
      <div> ]</div>
      <div>{"}"},</div>

      {/* Q3b */}
      <div>{"{"}</div>

      <div>
        {" "}
        "type": "radiogroup", "name": "Q3b", "visibleIf": "{"{Q3a} =item1"}",
      </div>
      <div> "title": "{t("Q3b_Title")}",</div>

      <div>
        {" "}
        "choicesFromQuestion": "Q3", "choicesFromQuestionMode": "selected",
        "hasNone": true,
      </div>
      <div>"noneText": "{t("Q2_Item3")}"</div>

      <div>{"}"},</div>

      {/* Q4a */}
      <div>{"{"}</div>
      <div>"type": "checkbox", "name": "Q4a", "visibleIf": "{"{Q3} noSay"}",
      </div>
      <div> "title": "{t("Q4_Title")}",</div>
      <div>"choices": [</div>

      <div>{rows}</div>
      <div> ],</div>
      <div> "hasOther": true, "hasNone": true,</div>

      <div>"noneText": "{t("Q2_Item3")}",</div>
      <div>"otherText": "{t("Q2_Item4")}"</div>
      <div>{"}"},</div>
      {/* "name": "Q4b", */}
      <div>{"{"}</div>

      <div>
        "type": "checkbox", "name": "Q4b", "visibleIf":"{"{Q3}<>'none'"}",
      </div>
      <div> "title": "{t("Q4_Title")}",</div>
      <div>
        {" "}
        "choicesFromQuestion": "Q3", "choicesFromQuestionMode": "selected",
        "hasNone": true,
      </div>

      <div>"noneText": "{t("Q2_Item3")}"</div>
      <div>{"}"},</div>
      {/* "name": "Q5", */}
      <div>{"{"}</div>
      <div>"type": "checkbox", "name": "Q5",</div>
      <div> "title": "{t("Q5_Title")}",</div>
      <div> "choices": [</div>
      <div>{"{"}</div>
      <div> "value": "item1",</div>
      <div>"text": "{t("Q5_Subtitle1")}"</div>
      <div>{"}"},</div>
      <div>{"{"}</div>
      <div> "value": "item2",</div>
      <div>"text": "{t("Q5_Subtitle2")}"</div>
      <div>{"}"},</div>
      <div>{"{"}</div>
      <div> "value": "item3",</div>
      <div>"text": "{t("Q5_Subtitle3")}"</div>
      <div>{"}"}</div>
      <div> ],</div>
      <div> "hasNone": true,</div>

      <div>"noneText": "{t("Q5_Subtitle4")}"</div>
      <div>{"}"},</div>
      {/* q6 */}
      <div>{"{"}</div>
      <div> "type": "text", "name": "Q6",</div>
      <div> "title": "{t("Q6_Title")}",</div>
      <div>"inputType": "number",</div>
      <div>"placeHolder": "{t("Q6_Subtitle")}"</div>
      <div>{"}"}</div>
      <div>{" ] }]}"}</div>
    </div>
  );
}

export default App;
