// iPAS AI應用規劃師（中級）考試資料 — 科目一 L21 + 科目二 L22

const S1_NOTES = [
  {
    title: '1.1　AI 基礎概念與技術發展',
    items: [
      { kw: 'AI 定義與分類', text: '弱 AI（ANI）解決特定任務；通用 AI（AGI）擁有人類水準智能（尚未實現）；超 AI（ASI）超越人類（理論概念）' },
      { kw: 'ML / DL / RL 關係', text: '機器學習（ML）⊃ 深度學習（DL）；強化學習（RL）屬 ML 的分支，透過獎勵信號學習策略' },
      { kw: '深度學習核心架構', text: '', sub: ['CNN（卷積神經網路）→ 影像辨識、物件偵測', 'RNN / LSTM → 序列資料、時間序列預測', 'Transformer → NLP 翻譯、問答系統（BERT、GPT）', 'GAN（生成對抗網路）→ 圖像生成、資料擴充'] },
      { kw: 'NLP 應用', text: '情感分析、機器翻譯、文件摘要、命名實體識別（NER）、問答系統、Chatbot' },
      { kw: '電腦視覺應用', text: '影像分類、物件偵測（YOLO、Faster R-CNN）、語意分割、人臉辨識、OCR' },
      { kw: '多模態 AI', text: '同時處理文字＋影像＋音訊等多種輸入，例：GPT-4V、Gemini、DALL-E（文字→圖像）' },
    ],
  },
  {
    title: '1.2　生成式 AI（GenAI）與 LLM',
    items: [
      { kw: 'LLM 訓練流程', text: 'Pre-training（大規模無標注語料）→ Fine-tuning（特定任務資料）→ RLHF（人類回饋強化學習）' },
      { kw: 'Prompt Engineering', text: '', sub: ['Zero-shot：無範例直接提問', 'Few-shot：提供 3~5 個輸入/輸出示範', 'Chain-of-Thought（CoT）：要求模型逐步推理，提升複雜題目準確度', 'System Prompt：設定角色與行為準則'] },
      { kw: 'RAG（檢索增強生成）', text: '推論時先從外部知識庫檢索相關文件，再與問題一起送給 LLM，有效降低幻覺並引用最新資料' },
      { kw: 'Fine-tuning vs RAG', text: '', sub: ['Fine-tuning → 學習特定領域語言風格、術語，需重新訓練', 'RAG → 無需訓練，即時引用外部文件，適合知識頻繁更新'] },
      { kw: 'AI 幻覺（Hallucination）', text: 'LLM 生成聽起來合理但不正確的資訊，緩解方法：RAG、RLHF、溫度降低、輸出驗證' },
      { kw: 'AI Agent', text: '具備「工具使用（Tool Use）+ 規劃（Planning）+ 動態記憶（Memory）」能力，可自主完成多步驟任務' },
      { kw: '向量資料庫', text: '儲存文字 Embedding 向量，支援語意搜尋（如 Pinecone、Weaviate、pgvector）' },
      { kw: '常見 GenAI 工具', text: 'ChatGPT（OpenAI）、Gemini（Google）、Claude（Anthropic）、Copilot（Microsoft）、Llama（Meta，開源）' },
    ],
  },
  {
    title: '1.3　AI 治理、倫理與法規',
    items: [
      { kw: 'AI 倫理六大原則', text: '公平性（Fairness）、透明性（Transparency）、問責性（Accountability）、可靠性（Reliability）、隱私（Privacy）、包容性（Inclusiveness）' },
      { kw: '台灣 AI 基本法（2024）', text: '強調人本 AI、資安保護、倫理審查，規範政府 AI 應用，確保 AI 可問責與透明' },
      { kw: 'EU AI Act（2024）', text: '全球第一部 AI 綜合法規，按風險分四級：', sub: ['🚫 不可接受風險（禁止）：社會信用評分、即時大規模生物辨識監控', '⚠️ 高風險：醫療、就業、基礎設施、教育，需嚴格合規要求', '⚡ 有限風險：需透明度義務（如 Chatbot 須告知使用者是 AI）', '✅ 最小風險：大多數 AI 應用，無強制規範（如垃圾郵件過濾）'] },
      { kw: 'GDPR', text: '歐盟通用資料保護法規：規範個人資料蒐集/處理，賦予資料主體「被遺忘權」「資料可攜權」' },
      { kw: 'AI 偏見（Bias）類型', text: '', sub: ['選擇偏差：訓練資料不代表真實分佈', '歷史偏差：資料反映過去社會不公平（如種族、性別歧視）', '確認偏差：系統傾向確認已有假設'] },
      { kw: '可解釋 AI（XAI）', text: 'SHAP（量化特徵貢獻度）、LIME（局部線性近似解釋）；滿足法規對模型透明性要求' },
      { kw: '資料去識別化', text: '匿名化（Anonymization）= 不可逆，GDPR 不適用；假名化（Pseudonymization）= 可透過對照表還原，仍受 GDPR 規範' },
    ],
  },
  {
    title: '1.4　AI 導入規劃與 MLOps',
    items: [
      { kw: 'AI 導入流程', text: '問題定義 → 資料蒐集/清洗 → 模型選擇/訓練 → 評估驗證 → 部署 → 監控 → 迭代優化' },
      { kw: '技術可行性評估', text: '資料品質/量、算力需求、技術成熟度、預期效益、導入成本、維護複雜度' },
      { kw: 'ROI 評估', text: '量化指標：效率提升 %、錯誤率降低 %、人力節省；計算預期投資回收期（Payback Period）' },
      { kw: '風險評估矩陣', text: '橫軸：影響程度（Impact）；縱軸：發生機率（Likelihood）；依象限採取接受/監控/緩解/迴避策略' },
      { kw: 'MLOps', text: '將 ML 模型開發、部署、監控自動化的最佳實踐；包含 CI/CD、模型版本控制（MLflow、DVC）、自動重訓練' },
      { kw: '資料漂移 vs 概念漂移', text: '', sub: ['資料漂移（Data Drift）：輸入特徵 P(X) 分佈改變', '概念漂移（Concept Drift）：P(Y|X) 關係改變，即相同輸入的正確答案變了'] },
    ],
  },
  {
    title: '1.5　AI 應用場景',
    items: [
      { kw: '製造業', text: '預測性維護（感測器時序 → 故障預測）、瑕疵檢測（CNN 影像辨識）、生產排程優化' },
      { kw: '金融業', text: '信用評分（邏輯迴歸/XGBoost）、詐欺偵測（異常偵測）、演算法交易、客服 Chatbot' },
      { kw: '醫療業', text: 'X 光/MRI 影像診斷（CNN）、新藥研發（分子生成）、病歷 NLP 分析、手術輔助機器人' },
      { kw: '零售業', text: '推薦系統（協同過濾/內容過濾）、需求預測（時序模型）、客戶分群（K-means）' },
      { kw: '推薦系統', text: '', sub: ['協同過濾（CF）：根據相似用戶/商品的歷史行為推薦', '內容過濾（Content-based）：根據商品本身特徵比對用戶偏好', '混合式：結合兩者優點'] },
    ],
  },
];

const S2_NOTES = [
  {
    title: '2.1　大數據基礎概念',
    items: [
      { kw: '大數據 5V 特性', text: 'Volume（體量大）、Velocity（速度快）、Variety（多樣性高）、Veracity（真實性/準確性）、Value（價值密度低）' },
      { kw: '資料類型', text: '', sub: ['結構化：關聯式資料庫表格（SQL）', '半結構化：JSON、XML、CSV（有格式但不嚴格）', '非結構化：圖片、影片、音訊、自然語言文字'] },
      { kw: '資料倉儲 vs 資料湖 vs 資料湖倉', text: '', sub: ['資料倉儲（DW）：Schema on Write，ETL 後結構化，適合 BI 查詢（Redshift、BigQuery）', '資料湖（DL）：Schema on Read，原始格式儲存，適合資料科學探索（S3 + Spark）', '資料湖倉（Lakehouse）：結合兩者，支援 ACID 事務（Delta Lake、Apache Iceberg）'] },
      { kw: '批次處理 vs 串流處理', text: '批次（Batch）：定期大量處理歷史資料（如每日報表）；串流（Streaming）：即時連續處理（如詐欺偵測）' },
    ],
  },
  {
    title: '2.2　Hadoop 生態系統',
    items: [
      { kw: 'HDFS 分散式儲存', text: '將大檔案切成 Block（預設 128MB），預設複製 3 份存於不同 DataNode（含跨機架）' },
      { kw: 'NameNode vs DataNode', text: 'NameNode：儲存 metadata（目錄結構、Block 位置）—— 是 SPOF 需設 HA；DataNode：儲存實際資料 Block' },
      { kw: 'MapReduce 運算框架', text: '', sub: ['Map 階段：將輸入資料轉換為 (Key, Value) 對', 'Shuffle & Sort 階段：相同 Key 的資料歸併到同一 Reducer', 'Reduce 階段：對每個 Key 的所有 Value 進行聚合計算（如加總、計數）'] },
      { kw: 'YARN 資源管理', text: 'ResourceManager（全域調度）+ NodeManager（節點資源）+ ApplicationMaster（應用程式管理）' },
      { kw: 'Hive', text: '將 HiveQL（類 SQL）轉換為 MapReduce/Tez 執行，適合批次查詢大型資料集' },
      { kw: 'HBase', text: '基於 HDFS 的 NoSQL 列式資料庫，支援隨機讀寫，適合低延遲即時查詢（如用戶資料存取）' },
      { kw: 'ZooKeeper', text: '分散式協調服務：設定管理、分散式鎖、Leader 選舉（Hadoop HA、Kafka 依賴它）' },
    ],
  },
  {
    title: '2.3　Apache Spark',
    items: [
      { kw: 'Spark vs MapReduce', text: 'Spark 使用記憶體內（In-Memory）運算，速度比 MapReduce 快 10~100 倍；適合迭代演算法（ML 訓練）' },
      { kw: 'RDD（彈性分散式資料集）', text: '不可變、可分區、支援容錯的分散式資料集；透過 DAG 追蹤血緣（Lineage），節點故障時可重新計算' },
      { kw: 'Spark 元件', text: '', sub: ['Spark Core：基礎執行引擎與 RDD 操作', 'Spark SQL：結構化資料查詢（DataFrame API）', 'Spark Streaming / Structured Streaming：串流資料處理', 'MLlib：分散式機器學習（如分散式 K-means、線性迴歸）', 'GraphX：圖計算框架'] },
      { kw: '惰性求值（Lazy Evaluation）', text: 'Transformation（如 map、filter、join）不立即執行；Action（如 count、collect、saveAsTextFile）觸發實際計算' },
      { kw: 'DAG（有向無環圖）', text: 'Spark 將所有 Transformation 建構成 DAG，分析後切割為 Stage 最佳化執行，避免冗餘計算' },
    ],
  },
  {
    title: '2.4　串流處理與訊息佇列',
    items: [
      { kw: 'Apache Kafka', text: '高吞吐量分散式訊息佇列；核心概念：Producer → Topic → Partition → Consumer Group' },
      { kw: 'Kafka Offset', text: 'Consumer 記錄在 Partition 中的讀取位置；支援訊息重播（Replay），預設保留 7 天' },
      { kw: 'Consumer Group', text: '同一 Group 內每個 Partition 只由一個 Consumer 消費（保序）；不同 Group 可各自獨立消費全量' },
      { kw: 'Lambda 架構', text: '批次層（全量歷史，高延遲）+ 速度層（最新串流，低延遲）+ 服務層（合併結果）；複雜但完整' },
      { kw: 'Kappa 架構', text: '僅使用串流處理層，去除批次層；架構更簡單，適合可以重播歷史訊息的場景（如 Kafka）' },
      { kw: '水印（Watermark）', text: '定義系統等待遲到事件的最長時間，超過 Watermark 的舊事件不再等待，讓視窗可觸發計算' },
      { kw: 'Apache Flink', text: '低延遲有狀態串流框架，支援 Exactly-Once 語意；可同時做批次和串流（Unified Batch+Stream）' },
    ],
  },
  {
    title: '2.5　CAP 理論與分散式資料庫',
    items: [
      { kw: 'CAP 定理', text: '分散式系統無法同時滿足三個特性；P（分區容錯）實務上必須保留，故只能選 CP 或 AP', sub: ['C（Consistency）一致性：所有節點看到相同最新資料', 'A（Availability）可用性：每個請求都有回應（不保證最新）', 'P（Partition Tolerance）分區容錯性：網路分裂時系統仍可運作'] },
      { kw: 'CP 系統', text: '優先保證一致性，網路分區時可能拒絕請求；例：HBase、ZooKeeper、MongoDB（強一致模式）' },
      { kw: 'AP 系統', text: '優先保證可用性，允許最終一致性；例：Cassandra、DynamoDB、CouchDB、Riak' },
      { kw: 'BASE 理論', text: 'Basically Available（基本可用）+ Soft State（軟狀態，中間態）+ Eventually Consistent（最終一致性）' },
      { kw: '分片（Sharding）vs 副本（Replication）', text: '分片：資料水平切割至不同節點，提升寫入量與儲存容量；副本：同一份資料複製多份，提升讀取效能與容錯' },
    ],
  },
  {
    title: '2.6　資料分析與統計',
    items: [
      { kw: '特徵縮放', text: '', sub: ["Min-Max Normalization：x' = (x − min) / (max − min)，縮放至 [0, 1]，對異常值敏感", "Z-score Standardization：x' = (x − μ) / σ，均值 0 標準差 1，對異常值更穩健"] },
      { kw: 'PCA 主成分分析', text: '將高維特徵投影至保留最大變異量的低維正交空間，達到降維/去除多共線性效果' },
      { kw: 'K-means 分群', text: '設定 K 個群心，迭代：分配→更新群心，直到群心不再移動（收斂）；需預先指定 K 值' },
      { kw: '關聯規則（Apriori）', text: '', sub: ['Support（支持度）= P(A∩B)，出現頻率', 'Confidence（信心度）= P(B|A) = P(A∩B)/P(A)', 'Lift（提升度）= Confidence(A→B) / P(B)；>1 正相關，=1 獨立，<1 負相關'] },
      { kw: '混淆矩陣指標', text: '', sub: ['Accuracy = (TP+TN) / Total', 'Precision = TP / (TP+FP)，預測為正中真正是正的比例', 'Recall = TP / (TP+FN)，實際正例中被找出的比例', 'F1-Score = 2 × Precision × Recall / (Precision + Recall)', 'AUC-ROC：ROC 曲線下面積，越接近 1 越好'] },
      { kw: 'A/B 測試', text: '對照組 vs 實驗組比較；p-value < 0.05 表示結果達統計顯著（信心水準 95%），可拒絕虛無假設' },
      { kw: '缺失值處理', text: '刪除（少量缺失）、均值/中位數填補（連續變數）、眾數填補（類別變數）、插補法（時序）' },
    ],
  },
  {
    title: '2.7　雲端大數據服務',
    items: [
      { kw: 'AWS 大數據服務', text: '', sub: ['EMR（Elastic MapReduce）：Hadoop/Spark 叢集', 'S3：物件儲存，資料湖常用', 'Redshift：列式資料倉儲，適合 BI', 'Kinesis：即時串流資料擷取', 'Glue：Serverless ETL 服務', 'Athena：S3 上的 Serverless SQL 查詢'] },
      { kw: 'Google Cloud 大數據服務', text: '', sub: ['BigQuery：Serverless 列式資料倉儲，PB 級秒速查詢', 'Dataflow：Serverless 批次/串流 ETL（基於 Apache Beam）', 'Pub/Sub：全代管訊息佇列', 'Dataproc：Hadoop/Spark 叢集'] },
      { kw: 'Azure 大數據服務', text: '', sub: ['HDInsight：Hadoop/Spark 叢集', 'Synapse Analytics：DW + Spark 整合', 'Event Hubs：大規模事件串流', 'Data Factory：雲端 ETL'] },
      { kw: 'Serverless 大數據', text: '無需管理伺服器（如 BigQuery、Athena），依查詢量/掃描資料量計費，適合不規則工作負載' },
      { kw: '資料治理（Data Governance）', text: '資料目錄（Data Catalog）、資料品質管控、資料血緣（Data Lineage）追蹤、存取控制（RBAC）' },
      { kw: '資料安全', text: '傳輸加密（TLS）、靜態加密（AES-256）、欄位級加密、最小權限原則（PoLP）、稽核日誌' },
    ],
  },
];

const S1_QUESTIONS = [
  { subject: '科目一', q: '下列哪種神經網路架構最適合用於影像辨識任務？', opts: ['A. RNN（循環神經網路）', 'B. CNN（卷積神經網路）', 'C. Transformer', 'D. GAN（生成對抗網路）'], ans: 'B', exp: 'CNN 透過卷積核（Kernel）提取局部空間特徵（邊緣、紋理、形狀），並透過池化（Pooling）降維，非常適合影像辨識。RNN 適合序列資料；Transformer 適合 NLP；GAN 適合圖像生成。' },
  { subject: '科目一', q: '根據 EU AI Act，「政府建立針對公民日常行為的社會信用評分系統」屬於哪個風險等級？', opts: ['A. 最小風險', 'B. 有限風險', 'C. 高風險', 'D. 不可接受風險（禁止）'], ans: 'D', exp: 'EU AI Act 將「政府對公民的社會信用評分系統」明確列為不可接受風險，禁止在 EU 境內使用。醫療診斷屬高風險；Chatbot 屬有限風險；垃圾郵件過濾屬最小風險。' },
  { subject: '科目一', q: 'RAG（Retrieval-Augmented Generation）技術主要解決 LLM 的哪項問題？', opts: ['A. 模型訓練時間過長', 'B. 生成不正確或過時內容（幻覺問題）', 'C. 模型參數量過大無法部署', 'D. 多語言輸入的字元編碼問題'], ans: 'B', exp: 'RAG 在推論時先從外部知識庫檢索相關文件，作為上下文提供給 LLM，有效降低幻覺（Hallucination）並使模型能使用最新資訊，不受訓練截止日期限制。' },
  { subject: '科目一', q: 'AI 偏見（Bias）中的「歷史偏差」是指什麼？', opts: ['A. 訓練資料量不足導致的偏差', 'B. 訓練資料反映了過去社會不平等，使模型複製歧視', 'C. 模型對歷史資料過度擬合', 'D. 資料蒐集時間過長導致不一致'], ans: 'B', exp: '歷史偏差（Historical Bias）指訓練資料本身含有社會歷史上的不公平現象（如種族、性別歧視），模型學習後複製並可能放大這些偏見，是 AI 公平性的核心挑戰。' },
  { subject: '科目一', q: 'MLOps 中「資料漂移（Data Drift）」是指？', opts: ['A. 模型程式碼在不同環境執行結果不同', 'B. 線上推論資料的統計分佈與訓練資料產生差異', 'C. 模型超參數隨時間自動改變', 'D. 資料庫中資料被意外刪除'], ans: 'B', exp: '資料漂移指模型上線後，真實環境的輸入資料分佈 P(X) 發生變化，與訓練資料分佈不同，導致模型效能下降。需監控並在漂移超閾值時觸發重訓練。' },
  { subject: '科目一', q: '下列哪種提示技術（Prompting）透過提供多個「輸入→輸出」示範來引導 LLM？', opts: ['A. Zero-shot Prompting', 'B. Few-shot Prompting', 'C. Chain-of-Thought Prompting', 'D. System Prompt'], ans: 'B', exp: 'Few-shot Prompting 在提示中包含幾個（通常 3~5 個）示範例子（輸入/輸出對），讓模型學習格式與推理模式。Zero-shot 無範例；CoT 要求逐步推理；System Prompt 設定角色準則。' },
  { subject: '科目一', q: '「可解釋 AI（XAI）」的主要用途是？', opts: ['A. 提高模型訓練速度', 'B. 讓模型預測結果可被人類理解，符合透明性要求', 'C. 自動選擇最佳超參數', 'D. 將複雜模型轉換為規則式系統'], ans: 'B', exp: 'XAI 讓複雜模型（如深度學習）的決策過程可解釋，常用工具：SHAP（量化每個特徵貢獻度）、LIME（局部線性近似），用於滿足 EU AI Act、金融法規等透明性要求。' },
  { subject: '科目一', q: '製造業導入「預測性維護」AI 系統，主要解決哪個業務問題？', opts: ['A. 自動化生產報表撰寫', 'B. 在設備故障前預測並安排維修，降低停機損失', 'C. 減少生產線人員數量', 'D. 優化產品行銷文案'], ans: 'B', exp: '預測性維護（Predictive Maintenance）透過感測器資料（振動、溫度、電流）訓練時序模型，在故障前發出警報，使維修從「定期維護」轉為「按需維護」，顯著降低非計畫停機成本。' },
  { subject: '科目一', q: '關於匿名化（Anonymization）與假名化（Pseudonymization），下列何者正確？', opts: ['A. 兩者均可完全還原為個人資訊', 'B. 匿名化不可逆；假名化可透過對照表還原', 'C. 假名化比匿名化隱私保護等級更高', 'D. 兩者在 GDPR 下均需取得明確同意'], ans: 'B', exp: '匿名化是不可逆的去識別化，GDPR 不適用於已匿名資料。假名化保留對照表可還原，仍屬個人資料，仍受 GDPR 規範。因此匿名化隱私保護等級更高。' },
  { subject: '科目一', q: 'AI 導入評估的「風險評估矩陣」的兩個軸分別代表什麼？', opts: ['A. 開發成本 × 預期收益', 'B. 影響程度 × 發生機率', 'C. 技術複雜度 × 資料品質', 'D. 時程長短 × 人員數量'], ans: 'B', exp: '風險評估矩陣（Risk Matrix）以「影響程度（Impact）」與「發生機率（Likelihood）」為兩軸，依四個象限採取「接受/監控/緩解/迴避」等不同應對策略。' },
  { subject: '科目一', q: '下列哪項不是 AI Agent 的核心能力？', opts: ['A. 工具使用（Tool Use）', 'B. 規劃（Planning）', 'C. 靜態固定記憶', 'D. 與環境互動並反饋'], ans: 'C', exp: 'AI Agent 的核心特徵是動態能力：工具使用、規劃、動態記憶更新、環境互動。「靜態固定記憶」不是 Agent 特徵，Agent 強調動態記憶（Short-term + Long-term）的更新能力。' },
  { subject: '科目一', q: '推薦系統中「協同過濾（Collaborative Filtering）」的運作原理是？', opts: ['A. 根據商品描述特徵比對相似度', 'B. 根據相似用戶的行為偏好推薦', 'C. 依照銷售量排序後直接推薦', 'D. 使用規則式引擎按時間排列'], ans: 'B', exp: '協同過濾（CF）分為 User-based（找相似用戶）和 Item-based（找相似商品），基於歷史行為矩陣預測評分。內容過濾（Content-based）才是根據商品本身特徵比對，與 CF 不同。' },
  { subject: '科目一', q: '「概念漂移（Concept Drift）」與「資料漂移（Data Drift）」的主要差異為？', opts: ['A. 概念漂移 = 輸入特徵分佈改變；資料漂移 = 標籤關係改變', 'B. 資料漂移 = 輸入分佈改變；概念漂移 = 輸入與標籤關係改變', 'C. 兩者完全相同', 'D. 概念漂移只發生在 NLP 模型'], ans: 'B', exp: '資料漂移：P(X) 改變（輸入特徵的統計分佈改變）；概念漂移：P(Y|X) 改變（相同輸入對應的正確輸出關係變了，如市場行為改變）。兩者都需監控，但應對方式不同。' },
  { subject: '科目一', q: 'Fine-tuning 與 RAG 的適用情境差異，下列何者正確？', opts: ['A. Fine-tuning 適合即時資料更新；RAG 適合固定領域知識', 'B. Fine-tuning 適合讓模型學習特定風格或術語；RAG 適合引用最新外部文件', 'C. 兩者功能完全相同，只是成本不同', 'D. Fine-tuning 只能用於小型模型'], ans: 'B', exp: 'Fine-tuning 讓模型學習特定領域語言風格和術語，需重新訓練。RAG 不需重訓練，透過即時檢索外部文件提供上下文，適合知識頻繁更新的場景，且可稽核引用來源。' },
  { subject: '科目一', q: 'SHAP（SHapley Additive exPlanations）在 AI 可解釋性中的主要功能是？', opts: ['A. 自動調整模型超參數', 'B. 量化每個特徵對單一預測結果的貢獻度', 'C. 生成合成資料以擴充訓練集', 'D. 壓縮神經網路模型大小'], ans: 'B', exp: 'SHAP 基於賽局理論（Shapley Values），為每個特徵計算對特定預測的邊際貢獻值（正/負），可解釋單筆預測（Local）也可彙總為全域特徵重要性（Global），是最廣泛使用的 XAI 工具之一。' },
];

const S2_QUESTIONS = [
  { subject: '科目二', q: 'Hadoop HDFS 預設將每個資料 Block 複製幾份以確保容錯？', opts: ['A. 1 份（不複製）', 'B. 2 份', 'C. 3 份', 'D. 5 份'], ans: 'C', exp: 'HDFS 預設將每個 Block（預設 128MB）複製 3 份，分散儲存於不同 DataNode（盡量跨機架），確保即使單一節點故障，資料仍可從其他副本存取。' },
  { subject: '科目二', q: 'MapReduce 中「Shuffle and Sort」階段的主要功能是？', opts: ['A. 將原始輸入資料切割分配給 Mapper', 'B. 將 Map 輸出的相同 Key 資料排序後送給同一 Reducer', 'C. 將最終結果寫入 HDFS', 'D. 監控各節點資源使用'], ans: 'B', exp: 'Shuffle and Sort 將各 Mapper 輸出的 Key-Value 對，按 Key 進行分組（Partitioning）和排序（Sorting），確保相同 Key 的所有 Value 被傳送到同一 Reducer 聚合。' },
  { subject: '科目二', q: '根據 CAP 定理，Apache Cassandra 屬於哪種類型？', opts: ['A. CA 系統', 'B. CP 系統（一致性 + 分區容錯）', 'C. AP 系統（可用性 + 分區容錯）', 'D. CAP 三者均滿足'], ans: 'C', exp: 'Cassandra 設計為高可用性優先，採用最終一致性（Eventual Consistency），屬於 AP 系統。寫入時使用可調一致性（Tunable Consistency），允許部分節點不同步，確保網路分區時仍可讀寫。' },
  { subject: '科目二', q: 'Apache Spark 「惰性求值（Lazy Evaluation）」的意義是？', opts: ['A. Spark 立即計算每個操作結果', 'B. Transformation 不立即執行，遇到 Action 才觸發計算', 'C. Spark 自動延遲低優先權任務', 'D. 資料讀取等待硬碟 I/O 完成後才繼續'], ans: 'B', exp: 'Spark 的惰性求值讓 Transformation（如 map、filter、join）只建立執行計劃（DAG），不立即執行。只有當 Action（如 count、collect、save）被呼叫時，才真正執行整個計算流水線並最佳化執行計劃。' },
  { subject: '科目二', q: "資料正規化中「Min-Max Normalization」的正確公式是？", opts: ["A. x' = (x − mean) / std", "B. x' = (x − min) / (max − min)", "C. x' = x / max", "D. x' = log(x + 1)"], ans: 'B', exp: "Min-Max Normalization 公式：x' = (x − min) / (max − min)，將所有值線性縮放至 [0, 1]。適合已知範圍的特徵，但對異常值敏感。Z-score Standardization（選項A）縮放至均值0、標準差1，對異常值更穩健。" },
  { subject: '科目二', q: 'Lambda 架構中「速度層（Speed Layer）」的主要職責是？', opts: ['A. 儲存所有歷史原始資料供批次重計算', 'B. 處理即時串流資料，提供低延遲的即時視圖', 'C. 合併批次層和速度層的結果供查詢', 'D. 管理資料存取權限和加密'], ans: 'B', exp: 'Lambda 三層架構：批次層（處理全量歷史資料，高延遲）、速度層（處理最新串流資料，低延遲，填補批次層延遲缺口）、服務層（合併兩層結果回應查詢）。速度層負責提供近即時視圖。' },
  { subject: '科目二', q: 'Kafka 中「Consumer Group」機制主要用於？', opts: ['A. 確保所有消費者收到每一條訊息', 'B. 讓多個消費者並行消費不同 Partition，實現水平擴展', 'C. 自動壓縮過期訊息節省儲存空間', 'D. 對訊息進行加密傳輸'], ans: 'B', exp: 'Consumer Group 允許多個 Consumer 實例分攤一個 Topic 的不同 Partition，實現平行消費與水平擴展。同一 Group 內每個 Partition 只由一個 Consumer 消費；不同 Group 間各自獨立消費全量訊息。' },
  { subject: '科目二', q: 'K-means 演算法「收斂」是指什麼狀態？', opts: ['A. K 值達到資料點總數時停止', 'B. 群心位置不再移動，資料點分配穩定', 'C. 所有群的樣本數量相等', 'D. 組內距離平方和（WCSS）等於零'], ans: 'B', exp: 'K-means 迭代：分配每個點到最近群心 → 重新計算群心 → 重複。當群心位置不再改變（或改變量小於閾值 ε）時收斂停止。WCSS=0 意味著 K=N（每點一群），實際上無意義。' },
  { subject: '科目二', q: 'Google BigQuery 相較於傳統 Hadoop 叢集最大優勢是？', opts: ['A. 支援更多程式語言 SDK', 'B. Serverless 架構，無需管理叢集，依查詢量計費', 'C. 資料需先上傳至本地端才能查詢', 'D. 只支援 CSV 格式'], ans: 'B', exp: 'BigQuery 是 Serverless 全代管資料倉儲，不需管理任何伺服器；使用欄式儲存（Columnar Storage）和 Dremel 分散式查詢引擎，在 PB 級資料上可秒速完成複雜 SQL 查詢，費用按掃描資料量計算。' },
  { subject: '科目二', q: 'PCA（主成分分析）的主要應用場景是？', opts: ['A. 提升模型預測準確率', 'B. 降低資料維度，減少雜訊並加速模型訓練', 'C. 將離散類別變數轉換為連續數值', 'D. 填補資料集中的缺失值'], ans: 'B', exp: 'PCA 透過線性變換，將原始高維特徵投影到保留最大變異量的低維正交主成分空間，達到降維目的。應用：減少特徵數降低計算量、去除多共線性（Multicollinearity）、資料視覺化（降至 2D/3D）。' },
  { subject: '科目二', q: '關聯規則中「Lift（提升度）> 1」表示什麼？', opts: ['A. 購買項目 A 的交易佔所有交易的比例超過 1%', 'B. 購買 A 後又購買 B 的機率超過 1%', 'C. A 與 B 呈正相關，購買 A 會增加購買 B 的機率', 'D. 包含 A 和 B 的交易超過 1 筆'], ans: 'C', exp: 'Lift = Confidence(A→B) / P(B) = P(A∩B) / (P(A)×P(B))。Lift>1 表示 A 與 B 正相關（購買 A 增加購買 B 的機率）；Lift=1 獨立；Lift<1 負相關。Lift 是判斷關聯規則是否有實際意義的關鍵指標。' },
  { subject: '科目二', q: '資料湖（Data Lake）與資料倉儲（Data Warehouse）最主要的差異是？', opts: ['A. 資料湖只支援 SQL；資料倉儲支援所有語言', 'B. 資料湖以原始格式儲存多種資料；資料倉儲儲存 ETL 後的結構化資料', 'C. 資料倉儲儲存成本更低', 'D. 資料湖只能本地部署；資料倉儲必須雲端'], ans: 'B', exp: '資料湖以原始格式儲存結構化/半結構化/非結構化資料，Schema on Read，適合資料科學探索。資料倉儲採 Schema on Write，資料需先 ETL 清洗為固定結構，適合 BI 報表和標準化查詢。' },
  { subject: '科目二', q: 'HDFS NameNode 單點故障（SPOF）的最佳解決方案是？', opts: ['A. 增加每個 Block 的複製數量', 'B. 設置 NameNode HA 架構（Active/Standby）搭配 ZooKeeper 自動切換', 'C. 使用更高規格伺服器替換 NameNode', 'D. 減少 DataNode 數量'], ans: 'B', exp: 'Hadoop HA 架構使用兩個 NameNode（Active/Standby），透過 ZooKeeper 監控 Active NameNode 狀態，故障時自動切換（Failover）到 Standby，解決傳統單 NameNode 的單點故障問題。' },
  { subject: '科目二', q: '串流處理中「水印（Watermark）」機制主要解決什麼問題？', opts: ['A. 加密串流資料防止洩漏', 'B. 處理事件時間亂序到達的問題', 'C. 控制 Kafka Consumer 讀取速率', 'D. 壓縮串流資料降低網路傳輸量'], ans: 'B', exp: '在事件時間（Event Time）串流處理中，因網路延遲等因素，事件可能亂序到達。Watermark 定義系統願意等待遲到事件的最長時間閾值，讓視窗在 Watermark 時間點觸發計算，平衡完整性與延遲。' },
  { subject: '科目二', q: 'A/B 測試中，p-value < 0.05 代表什麼意義？', opts: ['A. 實驗組效果比對照組提升了 5%', 'B. 在虛無假設為真時觀測到此結果的機率低於 5%，可拒絕虛無假設', 'C. 實驗需要再收集 5% 更多資料', 'D. 實驗的信心水準為 5%'], ans: 'B', exp: 'p-value 是在虛無假設（H₀：兩組無差異）為真時，觀測到現有或更極端結果的機率。p<0.05 表示結果在統計上顯著（信心水準 95%），可拒絕虛無假設。注意：統計顯著≠業務上有實質意義。' },
];
