import {
  I18nProvider,
  Modal as ModalRaw,
  ModalProps,
  ModalTrigger as ModalTriggerRaw,
  ThemeProvider,
  ModalContent,
  Dialog,
  DialogTitle,
  ActionButton,
  Select,
} from "@baseline-ui/core";
import { ReactNode } from "react";
import "./App.css";

const Modal = ModalRaw as React.FC<ModalProps & { children?: ReactNode }>;
const ModalTrigger = ModalTriggerRaw as React.FC<{ children?: ReactNode }>;

function App() {
  const items = [
    {
      id: "inside-1",
      label: "Click on me, I won't close dialog",
    },
    {
      id: "inside-2",
      label: "Click on me, I might close dialog",
    },
    ...Array.from(Array(3)).map((_, i) => ({
      id: `outside-${i.toString()}`,
      label: "Click on me, I will close dialog",
    })),
  ];

  return (
    <ThemeProvider>
      <I18nProvider>
        <Modal>
          <ModalTrigger>
            <ActionButton label="click me to open dialog" />
          </ModalTrigger>
          <ModalContent>
            <Dialog>
              <DialogTitle>Awesome Dialog</DialogTitle>
              <p>
                Open select, click on one of the options that span outside of
                the dialog. It shouldn't close, but it will.
              </p>
              <div style={{ width: "50%", margin: 'auto' }}>
                <Select items={items} placeholder="Select me" />
              </div>
              <p>Some space to make dialog a bit bigger.</p>
              <p>Some space to make dialog a bit bigger.</p>
              <p>Some space to make dialog a bit bigger.</p>
            </Dialog>
          </ModalContent>
        </Modal>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
