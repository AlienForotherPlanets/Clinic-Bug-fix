"use strict"; (self.webpackChunkSnehi_Clinic = self.webpackChunkSnehi_Clinic || []).push([[181], { 48452: function (e, t, n) { n(80184) }, 3181: function (e, t, n) { n.r(t), n.d(t, { default: function () { return I } }); n(80928); var a = n(23735), r = (n(48452), n(97582), n(61889)), i = n(48550), l = n(72791), o = n(54225), s = n(58294), c = n(40697), m = n(41834), d = n(80184); var u = n(20890), p = n(10703), h = n(89673), x = n(55818), g = n(3721), j = n(81131), b = n(27888), Z = n(53767), f = n(64554), v = n(42763), C = n(24518), y = n(16871); const S = (new Date).getMonth() + 1 <= 9 ? "0" + ((new Date).getMonth() + 1) : (new Date).getMonth() + 1, P = (new Date).getDate() <= 9 ? "0" + (new Date).getDate() : (new Date).getDate(), N = { id: 0, CaseNumber: "", AppoitmentDate: (new Date).getFullYear() + "-" + S + "-" + P, PatientName: "", DoctorName: "", Gender: "", ContactNumber: "", PatientMobileNumber: "", time: "", Flat: "", Street: "", City: "anand", Nationality: "india", Email1: "", Village: "", area: "", State: "Gujarat", PinCode: "388001", Email2: "", allergy: [], continue: "no", DOB: "", age: "", Timehour: "", TimeMin: "", Timeampm: "", ReferredBy: "", Status: 0, Service: "" }; const k = [{ id: "male", title: "Male" }, { id: "female", title: "Female" }, { id: "other", title: "Other" }]; var D = () => { const { values: e, setValues: t, errors: n, setErrors: a, handleInputChange: S, resetForm: P } = (0, o.c)(N, !1, (function () { let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e, r = { ...n }; if ("ContactNumber" in t && (r.ContactNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(t.ContactNumber) ? "" : "Invalid Number!"), "Email1" in t && (r.Email1 = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(t.Email1) && t.Email1.includes(".") || 0 == t.Email1.length ? "" : "Invalid Email!"), "DoctorName" in t && (r.DoctorName = 0 != t.DoctorName.length ? "" : "Select the DoctorName!"), "service" in t && (r.service = 0 != t.service.length ? "" : "Select the service!"), "PinCode" in t && (r.PinCode = 6 == t.PinCode.length || 0 == t.PinCode.length ? "" : "length should be 6 only!"), a({ ...r }), t == e) return Object.values(r).every((e => "" == e)) })), D = (0, y.TH)(); let I; I = "#redirected" == location.hash ? D.state : null, (0, l.useEffect)((() => { t(null != I ? I : N) }), [I]); let w, A, E = []; const B = () => { fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDate?Date=" + e.AppoitmentDate).then((e => e.json())).then((e => { A = [e.map((e => e.Timehour + ":" + e.TimeMin + (1 == e.Timeampm ? "am" : "pm")))], A = A[0], w = A[0]; for (let t = 1; t < A.length; t++)w === A[t + 1] ? E.push(w) : t++, w = A[t]; console.log(E) })) }; (0, l.useEffect)((() => { B() }), [e.AppoitmentDate]); const F = ["09:30am", "09:45am", "10:00am", "10:15am", "10:30am", "10:45am", "11:00am", "11:15am", "11:30am", "11:45am", "12:00pm", "12:15pm", "12:30pm", "12:45pm", "01:00pm", "01:15pm", "01:30pm", "01:45pm", "02:00pm", "02:15pm", "02:30pm", "02:45pm", "03:00pm", "03:15pm", "03:30pm", "03:45pm", "04:00pm", "04:15pm", "04:30pm", "04:45pm", "05:00pm", "05:15pm"], [T, O] = l.useState(!1), [M, R] = l.useState("select time"), V = () => { O((e => !e)) }, z = () => { O(!1) }, G = { position: "relative", top: 5, right: 0, left: 0, zIndex: 1, border: "1px solid", p: 0, width: "100%", overflow: "auto", bgcolor: "background.paper" }; let L = async t => { t.preventDefault(), console.log("handleSubmit"), console.log("Validating"); try { console.log("Data added"); let t = await fetch("http://65.1.110.101:3036/Appointment/BookAppointment", { method: "POST", headers: { "Content-Type": "application/json;charset=utf-8" }, body: JSON.stringify({ ContactNumber: e.ContactNumber, Gender: e.Gender, DOB: e.DOB, Age: e.age, Email1: e.Email1, Email2: e.Email2, ReferredBy: e.ReferredBy, Flat: e.Flat, Street: e.Street, City: e.City, Village: e.Village, Nationality: e.Nationality, State: e.State, PinCode: e.PinCode, CaseNumber: e.CaseNumber, Service: e.service, PatientName: e.PatientName, ContactNumber: e.ContactNumber, PatientMobileNumber: e.ContactNumber, DoctorName: e.DoctorName, AppoitmentDate: e.AppoitmentDate, Timehour: M.slice(0, 2), TimeMin: M.slice(3, 5), Timeampm: "am" == M.slice(5, 7) ? 1 : 2, Status: e.Status }) }), n = await t.json(); console.log(n), 200 === t.status ? (console.log("Data enter succesfully: "), console.log(e)) : console.log("Some error occured") } catch (n) { console.log(n) } P(), console.log("end of handeleSubmit") }; const [J, W] = (0, l.useState)([]); return (0, l.useEffect)((() => { fetch("http://65.1.110.101:3036/Appointment/GetLastCaseNumber").then((e => e.json())).then((e => { W(e) })), B() }), []), N.CaseNumber = J, function (e) { let t = e + "=", n = document.cookie.split(";"); for (let a = 0; a < n.length; a++) { let e = n[a]; for (; " " == e.charAt(0);)e = e.substring(1); if (0 == e.indexOf(t)) return e.substring(t.length, e.length) } return "" }("validate") ? (0, d.jsxs)(o.l, { onSubmit: L, children: [(0, d.jsxs)(r.ZP, { container: !0, spacing: 2, children: [(0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "CaseNumber", label: "Case No.", value: e.CaseNumber, onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "Service", label: "Service", value: e.Service, onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "PatientName", label: "Full Name", value: e.PatientName, onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "ContactNumber", label: "Mobile No", value: e.PatientMobileNumber, onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(m.Z, { name: "DoctorName", label: "DoctorName", value: e.DoctorName, onChange: S, options: s.dD() }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.DatePicker, { name: "AppoitmentDate", label: "date", value: e.AppoitmentDate, onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(Z.Z, { onClickAway: z, children: (0, d.jsxs)(f.Z, { sx: { position: "relative" }, children: [(0, d.jsx)(i.Z, { fullWidth: !0, disabled: !0, label: M, sx: { "-webkit-text-fill-color": "black !important" }, onClick: V }), T ? (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 12, children: (0, d.jsx)(f.Z, { sx: G, children: (0, d.jsx)(v.Z, { sx: { minWidth: "80%", Width: "100%", height: 250 }, cols: 6, rowHeight: 10, children: F.map((e => !(E.indexOf(e) > -1) && (0, d.jsx)(b.Z, { sx: { margin: "0px", height: "100%", margin: "0px" }, children: (0, d.jsx)(C.Z, { onClick: () => (e => { R(e), O(!1) })(e), children: e }) }, E.itemd))) }) }) }) : null] }) }) })] }), (0, d.jsxs)(h.Z, { sx: { marginTop: "20px" }, children: [(0, d.jsx)(x.Z, { expandIcon: (0, d.jsx)(j.Z, {}), "aria-controls": "panel1a-content", id: "panel1a-header", children: (0, d.jsx)(u.Z, { variant: "h4", children: " Extra Information" }) }), (0, d.jsx)(g.Z, { children: (0, d.jsx)(p.Z, { sx: { marginTop: "10px", paddingTop: "10px" }, children: (0, d.jsxs)(r.ZP, { container: !0, spacing: 2, children: [(0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.RadioGroup, { name: "Gender", label: "Gender : ", value: e.Gender, onChange: S, items: k, defaultvalue: "" }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsxs)(r.ZP, { container: !0, spacing: 2, children: [(0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.DatePicker, { name: "DOB", label: "Date of Birth", value: e.DOB, onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "age", value: e.age, label: "Age", onChange: S }) })] }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "Email1", value: e.Email1, label: "Email1", error: n.Email1, onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "Email2", value: e.Email2, label: "Email2", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "Nationality", value: e.Nationality, label: "Nationality", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "ReferredBy", value: e.ReferredBy, label: "Referred By", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "Flat", value: e.Flat, label: "Flat/Door/Block No", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "Village", value: e.Village, label: "Name of Building / Village", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "Street", value: e.Street, label: "Road/Street/Lane", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "area", value: e.area, label: "Area/Locality", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "City", value: e.City, label: "City", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "State", value: e.State, label: "State", onChange: S }) }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)(c.Z.Input, { name: "PinCode", value: e.PinCode, label: "Pin Code", onChange: S, error: n.PinCode }) })] }) }) })] }), (0, d.jsx)(r.ZP, { item: !0, xs: 12, sm: 6, children: (0, d.jsx)("div", { children: (0, d.jsx)(c.Z.Buttons, { type: "submit", text: "Submit" }) }) })] }) : (0, d.jsx)("h1", { children: "Hello error" }) }; var I = () => (0, d.jsx)(d.Fragment, { children: (0, d.jsx)(a.Z, { title: "Schedule Appointment", children: (0, d.jsx)(D, {}) }) }) }, 97582: function (e, t, n) { var a = n(72791), r = n(66934), i = n(13967), l = n(95892), o = n(28029), s = n(93044), c = n(63466), m = n(64554), d = n(95080), u = n(57621), p = n(61889), h = n(73719), x = n(63868), g = n(58956), j = n(44046), b = n(80184); const Z = (0, r.ZP)(l.Z, { shouldForwardProp: j.x9 })((e => { let { theme: t } = e; return { zIndex: 1100, width: "99%", top: "-55px !important", padding: "0 12px", [t.breakpoints.down("sm")]: { padding: "0 10px" } } })), f = (0, r.ZP)(o.Z, { shouldForwardProp: j.x9 })((e => { let { theme: t } = e; return { width: 434, marginLeft: 16, paddingLeft: 16, paddingRight: 16, "& input": { background: "transparent !important", paddingLeft: "4px !important" }, [t.breakpoints.down("lg")]: { width: 250 }, [t.breakpoints.down("md")]: { width: "100%", marginLeft: 4, background: "#fff" } } })), v = (0, r.ZP)(s.Z, { shouldForwardProp: j.x9 })((e => { let { theme: t } = e; return { ...t.typography.commonAvatar, ...t.typography.mediumAvatar, background: t.palette.secondary.light, color: t.palette.secondary.dark, "&:hover": { background: t.palette.secondary.dark, color: t.palette.secondary.light } } })), C = e => { let { value: t, setValue: n, popupState: a, handleSearch: r } = e; const l = (0, i.Z)(); return (0, b.jsx)(f, { id: "input-search-header", onChange: r, placeholder: "Search", startAdornment: (0, b.jsx)(c.Z, { position: "start", children: (0, b.jsx)(g.jVj, { stroke: 1.5, size: "1rem", color: l.palette.grey[500] }) }), endAdornment: (0, b.jsx)(c.Z, { position: "end", children: (0, b.jsx)(m.Z, { sx: { ml: 2 }, children: (0, b.jsx)(d.Z, { sx: { borderRadius: "12px" }, children: (0, b.jsx)(s.Z, { variant: "rounded", sx: { ...l.typography.commonAvatar, ...l.typography.mediumAvatar, background: l.palette.orange.light, color: l.palette.orange.dark, "&:hover": { background: l.palette.orange.dark, color: l.palette.orange.light } }, ...(0, h.LI)(a), children: (0, b.jsx)(g.kLi, { stroke: 1.5, size: "1.3rem" }) }) }) }) }), "aria-describedby": "search-helper-text", inputProps: { "aria-label": "weight" } }) }; t.Z = e => { const { onChange: t, ...n } = e, r = (0, i.Z)(), [l, o] = (0, a.useState)(""); return (0, b.jsxs)(b.Fragment, { children: [(0, b.jsx)(m.Z, { sx: { display: { xs: "block", md: "none" } }, children: (0, b.jsx)(h.ZP, { variant: "popper", popupId: "demo-popup-popper", children: e => (0, b.jsxs)(b.Fragment, { children: [(0, b.jsx)(m.Z, { sx: { ml: 2 }, children: (0, b.jsx)(d.Z, { sx: { borderRadius: "12px" }, children: (0, b.jsx)(v, { variant: "rounded", ...(0, h.LI)(e), children: (0, b.jsx)(g.jVj, { stroke: 1.5, size: "1.2rem" }) }) }) }), (0, b.jsx)(Z, { ...(0, h.Rg)(e), transition: !0, children: n => { let { TransitionProps: a } = n; return (0, b.jsx)(b.Fragment, { children: (0, b.jsx)(x.Z, { type: "zoom", ...a, sx: { transformOrigin: "center left" }, children: (0, b.jsx)(u.Z, { sx: { background: "#fff", [r.breakpoints.down("sm")]: { border: 0, boxShadow: "none" } }, children: (0, b.jsx)(m.Z, { sx: { p: 2 }, children: (0, b.jsx)(p.ZP, { container: !0, alignItems: "center", justifyContent: "space-between", children: (0, b.jsx)(p.ZP, { item: !0, xs: !0, children: (0, b.jsx)(C, { value: l, setValue: o, popupState: e, handleSearch: t }) }) }) }) }) }) }) } })] }) }) }), (0, b.jsx)(m.Z, { sx: { display: { xs: "none", md: "block" } }, children: (0, b.jsx)(f, { id: "input-search-header", onChange: t, placeholder: "Search", startAdornment: (0, b.jsx)(c.Z, { position: "start", children: (0, b.jsx)(g.jVj, { stroke: 1.5, size: "1rem", color: r.palette.grey[500] }) }), "aria-describedby": "search-helper-text", inputProps: { "aria-label": "weight" } }) })] }) } }, 16490: function (e, t, n) { n.d(t, { Z: function () { return o } }); n(72791); var a = n(24518), r = n(70478), i = n(80184); const l = (0, r.Z)((e => ({ root: { minWidth: 0, margin: e.spacing(.5) }, secondary: { backgroundColor: e.palette.secondary.light, "& .MuiButton-label": { color: e.palette.secondary.main } }, primary: { backgroundColor: e.palette.primary.light, "& .MuiButton-label": { color: e.palette.primary.main } } }))); function o(e) { const { color: t, children: n, onClick: r } = e, o = l(); return (0, i.jsx)(a.Z, { className: "".concat(o.root, " ").concat(o[t]), onClick: r, children: n }) } }, 40697: function (e, t, n) { n.d(t, { Z: function () { return g } }); n(72791); var a = n(48550), r = n(80184); var i = e => { const { name: t, label: n, value: i, error: l = null, onChange: o, ...s } = e; return (0, r.jsx)(a.Z, { fullWidth: !0, variant: "outlined", name: t, value: i, label: n, onChange: o, sx: { "& .MuiInputBase-root": { height: "46px" } }, ...s, ...l && { error: !0, helperText: l } }) }, l = n(88970), o = n(17133), s = n(85523), c = n(61419); var m = e => { const { name: t, label: n, value: a, onChange: i, items: m } = e; return (0, r.jsxs)(l.Z, { name: t, value: a, row: !0, "aria-labelledby": "demo-row-radio-buttons-group-label", onChange: i, children: [(0, r.jsxs)(o.Z, { id: "demo-radio-buttons-group-label", sx: { marginRight: "10px", fontSize: "16px", color: "black", paddingTop: "8px" }, children: [n, "  "] }), m.map((e => (0, r.jsx)(s.Z, { value: e.id, control: (0, r.jsx)(c.Z, {}), label: e.title }, e.id)))] }) }, d = n(41834); n(72426); var u = n(24518); var p = n(68096), h = n(94454); var x = n(16490); var g = { Input: i, RadioGroup: m, Select: d.Z, DatePicker: function (e) { const { name: t, label: n, value: i, onChange: l } = e; return (0, r.jsx)(a.Z, { fullWidth: !0, name: t, label: n, InputLabelProps: { shrink: !0, required: !0 }, type: "date", value: i, onChange: l, sx: { "& .MuiInputBase-root": { height: "46px" } } }) }, Buttons: function (e) { const { text: t, size: n, color: a, variant: i, onClick: l, ...o } = e; return (0, r.jsx)(u.Z, { variant: i || "contained", size: n || "large", color: a || "primary", onClick: l, ...o, children: t }) }, Checkbox: function (e) { const { name: t, label: n, value: a, onChange: i } = e; return (0, r.jsx)(p.Z, { children: (0, r.jsx)(s.Z, { control: (0, r.jsx)(h.Z, { name: t, color: "primary", checked: a, onChange: e => i(((e, t) => ({ target: { name: e, value: t } }))(t, e.target.checked)) }), label: n }) }) }, ActionButton: x.Z } }, 41834: function (e, t, n) { n(72791); var a = n(48550), r = n(23786), i = n(80184); t.Z = e => { const { name: t, label: n, value: l, error: o = null, onChange: s, options: c } = e; return (0, i.jsxs)(a.Z, { ...o && { error: !0, helperText: o }, style: { width: "100%" }, variant: "outlined", value: l, onChange: s, select: !0, label: n, name: t, sx: { "& .MuiInputBase-root": { height: "46px" } }, children: [(0, i.jsx)(r.Z, { value: "", children: "None" }), c.map((e => (0, i.jsx)(r.Z, { value: e.id, children: e.price ? e.title + " " + e.price : e.title }, e.id)))] }) } }, 58294: function (e, t, n) { n.d(t, { HG: function () { return s }, P6: function () { return c }, XA: function () { return m }, dD: function () { return i }, mS: function () { return l }, qp: function () { return o } }); const a = "employees", r = "employeeId", i = () => [{ id: "1", title: "Dr. Rakesh" }, { id: "2", title: "Dr. Akshay" }, { id: "3", title: "Dr. Snehal" }, { id: "4", title: "Dr. Pooja" }], l = () => [{ id: "10", title: "11:15 am" }, { id: "11", title: "11:30 am" }, { id: "12", title: "11:45 am" }, { id: "13", title: "12:00 pm" }, { id: "14", title: "12:15 pm" }, { id: "15", title: "12:30 pm" }, { id: "16", title: "12:45 pm" }, { id: "17", title: "1:00 pm" }, { id: "18", title: "1:15 pm" }, { id: "19", title: "1:30 pm" }, { id: "20", title: "1:45 pm" }, { id: "21", title: "2:00 pm" }, { id: "22", title: "2:15 pm" }]; function o(e) { let t = m(); e.id = function () { console.log(localStorage.getItem(r)), null == localStorage.getItem(r) && localStorage.setItem(r, "0"); var e = parseInt(localStorage.getItem(r)); return localStorage.setItem(r, (++e).toString()), e }(), t.push(e), localStorage.setItem(a, JSON.stringify(t)) } function s(e) { let t = m(), n = t.findIndex((t => t.id == e.id)); t[n] = { ...e }, localStorage.setItem(a, JSON.stringify(t)) } function c(e) { let t = m(); t = t.filter((t => t.id != e)), localStorage.setItem(a, JSON.stringify(t)) } function m() { null == localStorage.getItem(a) && localStorage.setItem(a, JSON.stringify([])); return JSON.parse(localStorage.getItem(a)).map((e => ({ ...e }))) } }, 54225: function (e, t, n) { n.d(t, { c: function () { return i }, l: function () { return l } }); n(4941); var a = n(72791), r = n(80184); const i = function (e) { const [t, n] = (0, a.useState)(e), [r, i] = (0, a.useState)({}), l = e => { const { name: a, value: r } = e.target; n({ ...t, [a]: r }) }, o = () => { n(e), i({}) }; return { values: t, setValues: n, errors: r, setErrors: i, handleInputChange: l, resetForm: o } }, l = e => { const { children: t, ...n } = e; return (0, r.jsx)("form", { autoComplete: "off", ...n, children: e.children }) } } }]);
//# sourceMappingURL=181.902a635f.chunk.js.map