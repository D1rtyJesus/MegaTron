import tkinter as tk
from tkinter import messagebox
from shapes import Shape, PointShape, LineShape, RectShape, EllipseShape

N = 128


class PaintApp:
    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("OOP_lab2")
        self.root.geometry("800x600")

        self.pcshape: list[Shape] = []
        self.tool = tk.StringVar(value="Крапка")

        self.is_draw = False
        self.x0 = 0
        self.y0 = 0
        self.temp_id = None

        self._create_menu()
        self._create_canvas()

    def _create_menu(self):
        menubar = tk.Menu(self.root)

        m_file = tk.Menu(menubar, tearoff=0)
        m_file.add_command(label="Очистити", command=self.clear)
        m_file.add_separator()
        m_file.add_command(label="Вихід", command=self.root.quit)
        menubar.add_cascade(label="Файл", menu=m_file)

        m_obj = tk.Menu(menubar, tearoff=0)
        for item in ["Крапка", "Лінія", "Прямокутник", "Еліпс"]:
            m_obj.add_radiobutton(
                label=item,
                variable=self.tool,
                value=item
            )
        menubar.add_cascade(label="Об'єкти", menu=m_obj)

        m_help = tk.Menu(menubar, tearoff=0)
        m_help.add_command(label="Про програму", command=self.dialog_info)
        menubar.add_cascade(label="Довідка", menu=m_help)

        self.root.config(menu=menubar)

    def _create_canvas(self):
        self.canvas = tk.Canvas(self.root, bg="white")
        self.canvas.pack(fill=tk.BOTH, expand=True)

        self.canvas.bind("<ButtonPress-1>", self.on_lbutton_down)
        self.canvas.bind("<B1-Motion>", self.on_mouse_move)
        self.canvas.bind("<ButtonRelease-1>", self.on_lbutton_up)

    def dialog_info(self):
        messagebox.showinfo(
            "Про програму",
            f"Лабораторна робота №2\nВаріант: 28\n"
            f"Максимум фігур у статичному масиві: {N}"
        )

    def on_lbutton_down(self, event):
        if len(self.pcshape) >= N:
            messagebox.showwarning("Помилка", f"Переповнення статичного масиву ({N} елементів)!")
            return

        self.is_draw = True
        self.x0 = event.x
        self.y0 = event.y

        if self.tool.get() == "Крапка":
            pt = PointShape()
            pt.set_coords(self.x0, self.y0, self.x0, self.y0)
            self.pcshape.append(pt)
            pt.show(self.canvas)
            self.is_draw = False

    def on_mouse_move(self, event):
        if not self.is_draw:
            return

        if self.temp_id is not None:
            self.canvas.delete(self.temp_id)

        t = self.tool.get()

        if t == "Лінія":
            self.temp_id = self.canvas.create_line(
                self.x0, self.y0, event.x, event.y,
                fill="black", width=1
            )
        elif t == "Прямокутник":
            self.temp_id = self.canvas.create_rectangle(
                self.x0, self.y0, event.x, event.y,
                outline="black", width=1
            )
        elif t == "Еліпс":
            a = abs(event.x - self.x0)
            b = abs(event.y - self.y0)
            self.temp_id = self.canvas.create_oval(
                self.x0 - a, self.y0 - b,
                self.x0 + a, self.y0 + b,
                outline="black", width=1
            )

    def on_lbutton_up(self, event):
        if not self.is_draw:
            return

        self.is_draw = False

        if self.temp_id is not None:
            self.canvas.delete(self.temp_id)
            self.temp_id = None

        if len(self.pcshape) >= N:
            return

        t = self.tool.get()
        item_1 = None

        if t == "Лінія":
            item_1 = LineShape()
        elif t == "Прямокутник":
            item_1 = RectShape()
        elif t == "Еліпс":
            item_1 = EllipseShape()

        if item_1:
            item_1.set_coords(self.x0, self.y0, event.x, event.y)
            self.pcshape.append(item_1)

        self.redraw_all()

    def redraw_all(self):
        self.canvas.delete("all")
        for s in self.pcshape:
            s.show(self.canvas)

    def clear(self):
        self.pcshape.clear()
        self.canvas.delete("all")


if __name__ == "__main__":
    tk_root = tk.Tk()
    app = PaintApp(tk_root)
    tk_root.mainloop()