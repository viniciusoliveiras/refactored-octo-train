function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$1 = require('react');
var phosphorReact = require('phosphor-react');
var react = require('@headlessui/react');
var html2canvas = _interopDefault(require('html2canvas'));

var bugImageUrl = "bug~PJfCOdbE.svg";

var ideaImageUrl = "idea~WrjPnbAp.svg";

var thoughtImageUrl = "thought~qssTifBx.svg";

function CloseButton() {
  return /*#__PURE__*/React.createElement(react.Popover.Button, {
    className: "absolute top-5 right-5 text-zinc-400 hover:text-zinc-100",
    title: "Fechar formul\xE1rio de feedback"
  }, /*#__PURE__*/React.createElement(phosphorReact.X, {
    className: "h-4 w-4",
    weight: "bold"
  }));
}

function FeedbackTypeStep(_ref) {
  var onFeedbackTypeChange = _ref.onFeedbackTypeChange;
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xl leading-6"
  }, "Deixe seu feedback"), /*#__PURE__*/React.createElement(CloseButton, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex w-full gap-2 py-8"
  }, Object.entries(feedbackTypes).map(function (_ref2) {
    var type = _ref2[0],
        _ref2$ = _ref2[1],
        title = _ref2$.title,
        image = _ref2$.image;
    return /*#__PURE__*/React.createElement("button", {
      key: type,
      type: "button",
      className: "flex w-24 flex-1 flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-zinc-800 py-5 hover:border-brand-500 focus:border-brand-500 focus:outline-none",
      onClick: function onClick() {
        return onFeedbackTypeChange(type);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image.source,
      alt: image.alt
    }), /*#__PURE__*/React.createElement("span", null, title));
  })));
}

function Loading() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-6 w-6 items-center justify-center overflow-hidden"
  }, /*#__PURE__*/React.createElement(phosphorReact.CircleNotch, {
    weight: "bold",
    className: "h-4 w-4 animate-spin"
  }));
}

function ScreenshotButton(_ref) {
  var screenshot = _ref.screenshot,
      onScreenshotTook = _ref.onScreenshotTook;

  var _useState = React$1.useState(false),
      isTakingScreenshot = _useState[0],
      setIsTakingScreenshot = _useState[1];

  var handleTakeScreenshot = function handleTakeScreenshot() {
    try {
      setIsTakingScreenshot(true);
      return Promise.resolve(html2canvas(document.querySelector('html'))).then(function (canvas) {
        var base64image = canvas.toDataURL('image/png');
        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  if (screenshot) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        onScreenshotTook(null);
      },
      className: "flex h-10 w-10 items-end justify-end rounded border-transparent p-1 text-zinc-400 transition-colors hover:text-zinc-100",
      style: {
        backgroundImage: "url(" + screenshot + ")",
        backgroundPosition: 'right bottom',
        backgroundSize: 180
      }
    }, /*#__PURE__*/React.createElement(phosphorReact.Trash, {
      weight: "fill"
    }));
  }

  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "rounded border-transparent bg-zinc-800 p-2 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900",
    onClick: handleTakeScreenshot
  }, isTakingScreenshot ? /*#__PURE__*/React.createElement(Loading, null) : /*#__PURE__*/React.createElement(phosphorReact.Camera, {
    className: "h-6 w-6"
  }));
}

function FeedbackContentStep(_ref) {
  var feedbackType = _ref.feedbackType,
      onFeedbackRestartRequest = _ref.onFeedbackRestartRequest,
      onFeedbackSent = _ref.onFeedbackSent;

  var _useState = React$1.useState(null),
      screenshot = _useState[0],
      setScreenshot = _useState[1];

  var _useState2 = React$1.useState(''),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _feedbackTypes$feedba = feedbackTypes[feedbackType],
      image = _feedbackTypes$feedba.image,
      title = _feedbackTypes$feedba.title;

  var resetFeedbackForm = function resetFeedbackForm() {
    setScreenshot(null);
    setComment('');
  };

  var handleFeedbackSubmit = function handleFeedbackSubmit(event) {
    event.preventDefault();
    console.log({
      screenshot: screenshot,
      comment: comment
    });
    onFeedbackSent();
    resetFeedbackForm();
  };

  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "absolute top-5 left-5 text-zinc-400 hover:text-zinc-100",
    onClick: onFeedbackRestartRequest
  }, /*#__PURE__*/React.createElement(phosphorReact.ArrowLeft, {
    weight: "bold",
    className: "h-4 w-4"
  })), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2 text-xl leading-6"
  }, /*#__PURE__*/React.createElement("img", {
    src: image.source,
    alt: image.alt,
    className: "h-6 w-6"
  }), " ", title), /*#__PURE__*/React.createElement(CloseButton, null)), /*#__PURE__*/React.createElement("form", {
    className: "my-4 w-full",
    onSubmit: handleFeedbackSubmit
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "min-h-[112px] w-full min-w-[304px] resize-none rounded-md border border-zinc-600 bg-transparent py-2 px-3 text-sm text-zinc-200 placeholder-zinc-400 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500",
    placeholder: "Conte com detalhes o que est\xE1 acontecendo...",
    value: comment,
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setComment(value);
    }
  }), /*#__PURE__*/React.createElement("footer", {
    className: "mt-2 flex gap-2"
  }, /*#__PURE__*/React.createElement(ScreenshotButton, {
    screenshot: screenshot,
    onScreenshotTook: setScreenshot
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex-1 items-center justify-center rounded border-transparent bg-brand-500 p-2 text-sm transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-brand-500",
    disabled: comment.trim() === ''
  }, "Enviar feedback"))));
}

function FeedbackSuccessStep(_ref) {
  var onFeedbackRestartRequest = _ref.onFeedbackRestartRequest;
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(CloseButton, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex w-[304px] flex-col items-center py-10"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "37",
    height: "36",
    viewBox: "0 0 37 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M36.5 32C36.5 34.209 34.709 36 32.5 36H4.5C2.291 36 0.5 34.209 0.5 32V4C0.5 1.791 2.291 0 4.5 0H32.5C34.709 0 36.5 1.791 36.5 4V32Z",
    fill: "#77B255"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.78 6.36202C28.624 5.61102 27.076 5.94002 26.322 7.09802L15.436 23.877L10.407 19.227C9.39303 18.289 7.81103 18.352 6.87403 19.365C5.93703 20.379 5.99903 21.961 7.01303 22.898L14.222 29.564C14.702 30.009 15.312 30.229 15.918 30.229C16.591 30.229 17.452 29.947 18.017 29.09C18.349 28.584 30.517 9.82002 30.517 9.82002C31.268 8.66102 30.938 7.11302 29.78 6.36202Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("span", {
    className: "mt-2 text-xl"
  }, "Agradecemos o feedback!"), /*#__PURE__*/React.createElement("button", {
    className: "mt-6 rounded border-transparent bg-zinc-800 py-2 px-6 text-sm leading-6 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-brand-500",
    onClick: onFeedbackRestartRequest
  }, "Quero enviar outro")));
}

var feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
};
function WidgetForm() {
  var _useState = React$1.useState(null),
      feedbackType = _useState[0],
      setFeedbackType = _useState[1];

  var _useState2 = React$1.useState(false),
      feedbackSent = _useState2[0],
      setFeedbackSent = _useState2[1];

  var handleRestartFeedback = function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "relative mb-4 flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl bg-zinc-900 p-4 shadow-lg md:w-auto"
  }, feedbackSent ? /*#__PURE__*/React.createElement(FeedbackSuccessStep, {
    onFeedbackRestartRequest: handleRestartFeedback
  }) : /*#__PURE__*/React.createElement(Fragment, null, !feedbackType ? /*#__PURE__*/React.createElement(FeedbackTypeStep, {
    onFeedbackTypeChange: setFeedbackType
  }) : /*#__PURE__*/React.createElement(FeedbackContentStep, {
    feedbackType: feedbackType,
    onFeedbackRestartRequest: handleRestartFeedback,
    onFeedbackSent: function onFeedbackSent() {
      return setFeedbackSent(true);
    }
  })));
}

function Widget() {
  return /*#__PURE__*/React.createElement(react.Popover, {
    className: "absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-8"
  }, /*#__PURE__*/React.createElement(react.Popover.Panel, null, /*#__PURE__*/React.createElement(WidgetForm, null)), /*#__PURE__*/React.createElement(react.Popover.Button, {
    className: "group flex h-12 items-center rounded-full bg-brand-500 px-3 text-white"
  }, /*#__PURE__*/React.createElement(phosphorReact.ChatTeardropDots, {
    className: "h-6 w-6"
  }), /*#__PURE__*/React.createElement("span", {
    className: "max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pl-2"
  }, "Feedback"))));
}

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React$1.createElement("div", {
    className: "bg-red-300 text-black p-4"
  }, "Example Component: ", text);
};

exports.ExampleComponent = ExampleComponent;
exports.Widget = Widget;
//# sourceMappingURL=index.js.map
