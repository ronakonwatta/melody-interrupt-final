# 🎶 Melody Interrupt 8-bit - Web-based Embedded System Concept 🎶

> โปรเจกต์นี้เป็นการจำลองแนวคิด **Interrupt และ State-based Programming** ในรูปแบบเว็บแอปที่สามารถเล่นเสียง 8-bit แบบ Real-Time เสมือน **ระบบฝังตัว (Embedded System)** เพื่อให้เข้าใจหลักการของ **การควบคุมด้วย Interrupt** และการทำงานแบบ **สถานะ (State-based)**

---

## 📜 ทฤษฎีที่ใช้ (Embedded System Concept)

### ✅ 1. **Interrupt**
- คือเหตุการณ์ที่ทำให้โปรแกรมหลักหยุดชั่วคราวเพื่อไปทำงานตามที่กำหนด (เช่น การกดปุ่ม หรือ Timer เรียกใช้เองอัตโนมัติ)
- ในโปรเจกต์นี้ การกดปุ่ม หรือกดปุ่มบน **Keyboard** จะเปรียบเสมือน Interrupt ที่ทำให้เว็บแอปเล่นเสียงดนตรีทันที โดย **ไม่ต้องรอ Loop หลัก**

### ✅ 2. **State-Based Programming**
- การแบ่งโปรแกรมออกเป็นสถานะ (State) เช่น **รอการกดปุ่ม**, **กำลังเล่นเพลง**, **หยุดเล่นเพลง** เพื่อควบคุมลำดับขั้นของโปรแกรม
- ระบบนี้ช่วยให้ควบคุมลำดับเสียง หรือควบคุมสถานะของการเล่นเพลงได้

### ✅ 3. **Embedded System (EMB) Concept ประยุกต์**
- **Web Browser + JavaScript (Next.js)** เปรียบเสมือน MCU
- **Event/Interrupt (กดปุ่ม, คีย์บอร์ด, Timer)** เหมือน Interrupt ใน MCU
- **State (Playing, Waiting)** เหมือน FSM (Finite State Machine) ควบคุมการทำงานแบบต่อเนื่อง
- **Timer (setInterval)** ใช้แทน Hardware Timer Interrupt

---

## 🚀 เทคโนโลยีที่ใช้ (Technology Stack)

| เทคโนโลยี          | ใช้ทำอะไร                                      |
|------------------|--------------------------------------------|
| **Next.js**       | สร้างเว็บแอปหลักแบบ React Framework         |
| **React.js**      | ควบคุมสถานะ (State) ของระบบ                  |
| **TypeScript**   | เพิ่มความปลอดภัยของตัวแปร                   |
| **Web Audio API** | สร้างเสียง 8-bit (Square Wave)               |
| **Tailwind CSS** | สร้าง UI สวยๆ แบบ Responsive                 |

---

## ⏲️ การใช้ Tempo และเวลา (Timing & Tempo)

### ✅ **Tempo**
- Tempo คือ ความเร็วของเพลง วัดเป็น **มิลลิวินาที (ms)** ต่อโน้ต 1 ตัว
- ควบคุมด้วยตัวแปร `tempo` (เช่น `300` = 300ms ต่อโน้ต 1 ตัว)
- สามารถเพิ่มหรือลด tempo ได้แบบ Real-Time (เหมือนปรับ speed ของ Timer Interrupt ใน MCU)

### ✅ **การเล่นเมโลดี้แบบมีจังหวะ (Timer Interrupt)**

```typescript
const interval = setInterval(() => {
  playNote(melody[i].freq, melody[i].dur); // เล่นโน้ต
  i++;
  if (i >= melody.length) {
    clearInterval(interval); // จบเพลง
  }
}, tempo); // ใช้ tempo ควบคุมความเร็ว
```

---

## 🎮 วิธีใช้งาน (Usage)

| การกระทำ (Action)                 | คำอธิบาย (Description)                   |
|---------------------------------|----------------------------------------|
| ▶️  Play Melody Button            | เล่นเมโลดี้ 8-bit ตามลำดับโน้ต         |
| 💥 Interrupt Note Button          | เล่นโน้ตเฉพาะกิจ 660Hz ทันที           |
| ⌨️  Keyboard (a, s, d, f, g, h, j) | เล่นโน้ตแบบกดสดตามปุ่มคีย์บอร์ด       |
| ⏩ Increase Tempo                 | เพิ่มความเร็วเพลง                      |
| ⏪ Decrease Tempo                 | ลดความเร็วเพลง                         |

---

## ⌨️ **Mapping Keyboard เป็นโน้ตดนตรี**

| Key | Note (Hz) | ความหมายทางดนตรี |
|-----|-----------|-----------------|
| a   | 440 Hz    | A4              |
| s   | 494 Hz    | B4              |
| d   | 523 Hz    | C5              |
| f   | 587 Hz    | D5              |
| g   | 659 Hz    | E5              |
| h   | 698 Hz    | F5              |
| j   | 784 Hz    | G5              |

---

## 🌐 การ Embed ในเว็บอื่น (Embedding Example)

หลังจาก Deploy แล้ว สามารถฝังในเว็บอื่นด้วย:

```html
<iframe src="https://melody-interrupt-final.vercel.app/" width="800" height="600" style="border:none;"></iframe>
```

---

## 🛠️ การติดตั้ง (Installation)

### 1. แตกไฟล์ หรือ clone โปรเจกต์
```bash
git clone https://github.com/your-username/melody-interrupt.git
cd melody-interrupt
```

### 2. ติดตั้งแพ็กเกจ
```bash
npm install
```

### 3. รันโปรเจกต์
```bash
npm run dev
```

---

## 📸 ตัวอย่างหน้าตาโปรเจกต์ (Preview)
> (สามารถแนบภาพ screenshot ของโปรเจกต์ตอนทำงานได้)

---

## ⭐ จุดเด่น (Highlight)

- ✅ **แนวคิด Embedded ที่นำมาใช้ในเว็บ**
- ✅ **ระบบ Interrupt และ State-Based ของจริง**
- ✅ **เล่นเพลงแบบ 8-bit Chiptune**
- ✅ **ควบคุมจังหวะ (Tempo) ได้จริง**
- ✅ **สนุก และมีปฏิสัมพันธ์ผ่านคีย์บอร์ด**

---

## 📬 ติดต่อ (Contact)

- พัฒนาโดย: RONAKON WATTANAMONGKOLCHOKE
- ติดต่อ: kicvong@gmail.com, 6772085021@student.chula.ac.th

---

## 📜 License

MIT License
