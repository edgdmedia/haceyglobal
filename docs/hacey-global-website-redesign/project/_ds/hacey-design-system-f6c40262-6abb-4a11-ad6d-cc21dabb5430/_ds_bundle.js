/* @ds-bundle: {"format":4,"namespace":"HaceyDesignSystem_f6c402","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"IconFeature","sourcePath":"components/display/IconFeature.jsx"},{"name":"SectionHeading","sourcePath":"components/display/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/display/StatCard.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"46bb217b5b64","components/display/Card.jsx":"aab5680eab5d","components/display/IconFeature.jsx":"88b40ecb5a5b","components/display/SectionHeading.jsx":"53bb962536a2","components/display/StatCard.jsx":"da569269aa1b","components/forms/Button.jsx":"bd872fa0bcbe","components/forms/Input.jsx":"4be6454f718a","components/navigation/Footer.jsx":"128b9effca0f","components/navigation/NavBar.jsx":"d2b25589adb1","ui_kits/website/Home.jsx":"f4bb391baa54"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HaceyDesignSystem_f6c402 = window.HaceyDesignSystem_f6c402 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'navy',
  children,
  style
}) {
  const tones = {
    navy: {
      background: 'var(--hacey-navy-tint)',
      color: 'var(--hacey-navy)'
    },
    teal: {
      background: 'var(--hacey-teal-tint)',
      color: 'var(--hacey-teal-dark)'
    },
    lime: {
      background: 'var(--hacey-lime-tint)',
      color: 'var(--hacey-lime-dark)'
    },
    solid: {
      background: 'var(--hacey-navy)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '4px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  image,
  imageAlt = '',
  badge,
  title,
  children,
  href,
  footer,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'all 220ms ease',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: `url(${image}) center/cover`,
      backgroundColor: 'var(--surface-brand-soft)'
    },
    role: "img",
    "aria-label": imageAlt
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, badge), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      marginBottom: children ? 8 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/IconFeature.jsx
try { (() => {
function IconFeature({
  icon,
  iconAlt = '',
  title,
  children,
  layout = 'card',
  style
}) {
  const isTile = layout === 'tile';
  const [hover, setHover] = React.useState(false);
  const base = {
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-md)',
    padding: isTile ? '28px 20px' : 'var(--space-5)',
    boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
    transform: hover ? 'translateY(-3px)' : 'none',
    transition: 'all 220ms ease',
    textAlign: isTile ? 'center' : 'left',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: isTile ? 72 : 58,
      height: isTile ? 72 : 58,
      borderRadius: isTile ? '50%' : 'var(--radius-sm)',
      background: 'var(--hacey-navy-tint)',
      display: 'grid',
      placeItems: 'center',
      margin: isTile ? '0 auto 16px' : '0 0 16px'
    }
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: iconAlt,
    style: {
      width: isTile ? 38 : 32,
      height: isTile ? 38 : 32
    }
  }) : null), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: isTile ? 'var(--text-lg)' : 'var(--text-xl)',
      marginBottom: children ? 8 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, children));
}
Object.assign(__ds_scope, { IconFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/IconFeature.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  inverse,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: 720,
      margin: align === 'center' ? '0 auto' : 0,
      marginBottom: 'var(--space-7)',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--hacey-lime)' : 'var(--hacey-teal-dark)',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      color: inverse ? '#fff' : 'var(--text-heading)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      marginBottom: 0,
      fontSize: 'var(--text-lg)',
      color: inverse ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/display/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  tone = 'lime',
  style
}) {
  const colors = {
    lime: 'var(--hacey-lime)',
    teal: 'var(--hacey-teal)',
    navy: 'var(--hacey-navy)',
    white: '#fff'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-4xl)',
      lineHeight: 1,
      color: colors[tone]
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 15,
      color: tone === 'white' ? 'rgba(255,255,255,0.85)' : 'var(--text-body)',
      lineHeight: 1.5
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  disabled,
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 18px' : size === 'lg' ? '14px 32px' : '11px 26px';
  const fs = size === 'sm' ? 14 : size === 'lg' ? 17 : 15;
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: '#fff',
      border: '2px solid var(--action-primary)'
    },
    accent: {
      background: 'var(--action-accent)',
      color: 'var(--hacey-navy-dark)',
      border: '2px solid var(--action-accent)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--hacey-navy)',
      border: '2px solid var(--hacey-navy)'
    },
    'outline-inverse': {
      background: 'transparent',
      color: '#fff',
      border: '2px solid #fff'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--link)',
      border: '2px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverMap = {
    primary: {
      background: 'var(--action-primary-hover)',
      borderColor: 'var(--action-primary-hover)'
    },
    accent: {
      background: 'var(--action-accent-hover)',
      borderColor: 'var(--action-accent-hover)'
    },
    outline: {
      background: 'var(--hacey-navy)',
      color: '#fff'
    },
    'outline-inverse': {
      background: 'rgba(255,255,255,0.15)'
    },
    ghost: {
      color: 'var(--hacey-navy)'
    }
  };
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    cursor: disabled ? 'default' : 'pointer',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: fs,
    lineHeight: 1,
    padding: pad,
    borderRadius: 'var(--radius-pill)',
    transition: 'all 180ms ease',
    textDecoration: 'none',
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    ...variants[variant],
    ...(hover && !disabled ? hoverMap[variant] : null),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: disabled,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  type = 'text',
  placeholder,
  required,
  multiline,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--gray-900)',
    background: '#fff',
    borderRadius: 'var(--radius-sm)',
    border: `1px solid ${focus ? 'var(--hacey-teal)' : 'var(--border-default)'}`,
    outline: 'none',
    boxShadow: focus ? '0 0 0 3px var(--hacey-teal-tint)' : 'none',
    transition: 'all 150ms ease'
  };
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--gray-900)',
      marginBottom: 6
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hacey-teal-dark)'
    }
  }, "*")), /*#__PURE__*/React.createElement(Field, _extends({
    type: multiline ? undefined : type,
    placeholder: placeholder,
    rows: multiline ? 4 : undefined,
    style: base,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc = '../../assets/hacey-logo.png',
  address = 'Austin, Texas',
  phone = '(346) 438-9082',
  email = 'isaiah@haceyglobal.com',
  links = ['Home', 'About', 'Practice Areas', 'Services', 'Impact'],
  style
}) {
  const col = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 15,
    color: '#fff',
    marginBottom: 14
  };
  const item = {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 14,
    lineHeight: 1.7
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--hacey-navy-dark)',
      color: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 32px',
      display: 'grid',
      gridTemplateColumns: '2fr 1.5fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '10px 16px',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "HACEY",
    style: {
      height: 34,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      ...item,
      marginTop: 16,
      maxWidth: 340
    }
  }, "HACEY LLC is a highly experienced social impact consultancy with over 17 years of experience in transforming complex challenges into impactful solutions.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: item
  }, address), /*#__PURE__*/React.createElement("div", {
    style: {
      ...item,
      marginTop: 8
    }
  }, phone, /*#__PURE__*/React.createElement("br", null), email)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, "Quick Link"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      ...item,
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.15)',
      textAlign: 'center',
      padding: '18px 24px',
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "\xA9 2025 HACEY LLC. All rights reserved."));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavLink({
  children,
  active
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 15,
      color: active || h ? 'var(--hacey-teal-dark)' : 'var(--gray-900)',
      transition: 'color 150ms ease'
    }
  }, children);
}
function NavBar({
  links = ['Home', 'About', 'Practice Areas', 'Services', 'Impact'],
  active,
  cta = 'Get in Touch',
  logoSrc = '../../assets/hacey-logo.png',
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "HACEY",
    style: {
      height: 36
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l,
    active: l === active
  }, l))), cta && /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      background: 'var(--action-primary)',
      color: '#fff',
      padding: '10px 24px',
      borderRadius: 'var(--radius-pill)'
    }
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  NavBar,
  Footer,
  Button,
  SectionHeading,
  IconFeature,
  StatCard,
  Badge
} = window.HaceyDesignSystem_f6c402;
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 24px'
};
const S = 'https://haceyglobal.com/wp-content/uploads/2025/06/';
const P = 'https://haceyglobal.com/wp-content/uploads/2025/07/';
const services = [[S + 'icons8-users-100-1.png', 'Systems Strengthening', 'Partnering with organizations to design robust systems that empower communities and improve service delivery.'], [S + 'icons8-touchpad-100.png', 'Digital Solutions', 'From mobile health applications to data analytics, our solutions leverage cutting-edge technologies to address social challenges.'], [S + 'icons8-magnetic-card-100-1.png', 'Fund Management', 'We manage grants and funding programs, ensuring efficient resource allocation and measurable outcomes.'], [S + 'icons8-view-quilt-100-1.png', 'Project Design and Implementation', 'Expertly designing projects that align with goals and implementing them to drive sustainable change.'], [S + 'icons8-research-100-1.png', 'Research and Development', 'Conducting in-depth research to inform policies and strategies for maximum impact.'], [S + 'icons8-human-resources-100-1.png', 'Human Resources Management', 'Building capable teams by recruiting and managing experts in various fields to support social initiatives.']];
const practice = [[P + 'icons8-heart-with-pulse-10.png', 'Health and Wellbeing'], [P + 'icons8-percentage-growth-100.png', 'Economic Inclusion'], [P + 'icons8-megaphone-100.png', 'Rights and Advocacy'], [P + 'icons8-recycling-100.png', 'Environmental Sustainability']];
const impact = [['40+', 'Programs', 'Talent Acquisition', 'Recruited data scientists, program managers, researchers and other professionals for over 40 social impact programs.'], ['5+', 'States', 'Championing Health Rights', 'Trained champions across 5 states to advocate for Sexual and Reproductive Health Rights (SRHR).'], ['20+', 'Businesses', 'Business Support', 'Empowered more than 20 businesses to implement sustainability-focused interventions.'], ['100k+', 'Doses', 'Malaria Prevention', 'Donated over 100,000 doses of IPTp-SP and 10,000 Malaria rapid diagnostic test (RDT) kits in Oyo state.']];
function Home() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    active: "Home",
    logoSrc: "../../assets/hacey-logo.png"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hacey-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '96px 24px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-5xl)',
      color: '#fff',
      lineHeight: 1.05
    }
  }, "Solutions for a Sustainable Future"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.85)',
      margin: '24px 0 32px',
      maxWidth: 620
    }
  }, "Our work demonstrates that transformative development isn't just about high-level strategy or ground-level execution \u2014 it's about connecting both to create systems that work for everyone."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Get in Touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hacey-teal)',
      borderRadius: 'var(--radius-lg)',
      padding: '40px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-5xl)',
      lineHeight: 1,
      color: '#fff'
    }
  }, "17+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: '#fff',
      marginTop: 6
    }
  }, "Years"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.9)',
      marginTop: 8
    }
  }, "of Impact")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      maxWidth: 860,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--hacey-teal-dark)',
      marginBottom: 14
    }
  }, "About HACEY LLC"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)'
    }
  }, "We are a social impact consultancy with over 17 years of experience in transforming complex challenges into impactful solutions."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Learn More")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-alt)',
      padding: 'var(--section-pad-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "Our Services",
    lead: "Transforming complex challenges into impactful solutions through diverse expertise, digital innovation, and global partnerships."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, services.map(([ic, t, d]) => /*#__PURE__*/React.createElement(IconFeature, {
    key: t,
    icon: ic,
    iconAlt: "",
    title: t
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get Started with Us")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Where we work",
    title: "Our Practice Areas",
    lead: "Driving sustainable change through comprehensive solutions across key development sectors."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, practice.map(([ic, t]) => /*#__PURE__*/React.createElement(IconFeature, {
    key: t,
    layout: "tile",
    icon: ic,
    iconAlt: "",
    title: t
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hacey-navy-dark)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our impact stories",
    title: "Transforming lives and communities",
    lead: "Measurable, sustainable impact across every engagement.",
    inverse: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20
    }
  }, impact.map(([v, u, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 20,
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 'var(--radius-md)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 110,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-3xl)',
      color: 'var(--hacey-lime)',
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 4
    }
  }, u)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-lg)',
      marginBottom: 6
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'rgba(255,255,255,0.8)',
      lineHeight: 1.6
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline-inverse",
    size: "lg"
  }, "See More Success Stories")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--hacey-teal-dark)',
      marginBottom: 14
    }
  }, "Partner with us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      marginBottom: 24
    }
  }, "Work with Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, ['Access to a network of 200+ verified experts', 'Evidence-based approach with proven results', 'Innovative digital solutions for social impact'].map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--hacey-lime)',
      color: 'var(--hacey-navy-dark)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700,
      fontFamily: 'var(--font-display)'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--gray-900)'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Work with Us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "Systems"), /*#__PURE__*/React.createElement(Badge, {
    tone: "lime"
  }, "Digital"), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "Research")), /*#__PURE__*/React.createElement(StatCard, {
    value: "200+",
    label: "verified experts in our network",
    tone: "navy"
  })))), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/hacey-logo.png"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Home, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconFeature = __ds_scope.IconFeature;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
