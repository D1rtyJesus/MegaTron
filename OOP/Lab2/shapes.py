import abc
import tkinter as tk


class Shape(abc.ABC):
    def __init__(self):
        self.xs1: int = 0
        self.ys1: int = 0
        self.xs2: int = 0
        self.ys2: int = 0

    def set_coords(self, x1: int, y1: int, x2: int, y2: int) -> None:
        self.xs1 = x1
        self.ys1 = y1
        self.xs2 = x2
        self.ys2 = y2

    @abc.abstractmethod
    def show(self, c: tk.Canvas) -> None:
        pass


class PointShape(Shape):
    def show(self, c: tk.Canvas) -> None:
        c.create_oval(
            self.xs1 - 1, self.ys1 - 1, self.xs1 + 1, self.ys1 + 1,
            fill="black", outline="black"
        )


class LineShape(Shape):
    def show(self, c: tk.Canvas) -> None:
        c.create_line(
            self.xs1, self.ys1, self.xs2, self.ys2,
            fill="black", width=1
        )


class RectShape(Shape):
    def show(self, c: tk.Canvas) -> None:
        c.create_rectangle(
            self.xs1, self.ys1, self.xs2, self.ys2,
            outline="black", fill="", width=1
        )


class EllipseShape(Shape):
    def show(self, c: tk.Canvas) -> None:
        a = abs(self.xs2 - self.xs1)
        b = abs(self.ys2 - self.ys1)
        x1, y1 = self.xs1 - a, self.ys1 - b
        x2, y2 = self.xs1 + a, self.ys1 + b
        c.create_oval(
            x1, y1, x2, y2,
            outline="black", fill="pink", width=1
        )